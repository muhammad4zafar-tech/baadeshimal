let currentArticle = null;
let activeCategory = "تمام مضامین";

function getArticleUrl(file) {
  const url = new URL("articles.html", window.location.href);
  url.searchParams.set("article", file);
  return url.href;
}

function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid || typeof ARTICLES === "undefined") return;
  const categories = [...new Set(ARTICLES.map(a => a.category))];
  const all = [{name:"تمام مضامین", count:ARTICLES.length}, ...categories.map(name => ({name, count:ARTICLES.filter(a=>a.category===name).length}))];
  grid.innerHTML = all.map(item => `<button class="category-card${item.name===activeCategory?' active':''}" type="button" data-category="${escapeHtml(item.name)}"><span>${escapeHtml(item.name)}</span><small>${item.count} ${item.count===1?'مضمون':'مضامین'}</small></button>`).join("");
  grid.querySelectorAll('.category-card').forEach(btn => btn.addEventListener('click', () => {
    activeCategory=btn.dataset.category;
    const s=document.getElementById('search');
    if(s) s.value='';
    renderCategories();
    renderArticleList();

    // Make the selected category's article list obvious without hiding the site header.
    const sidebar=document.querySelector('.sidebar');
    if(sidebar){
      requestAnimationFrame(() => {
        const headerOffset = window.innerWidth <= 768 ? 12 : 18;
        const top = sidebar.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({top, behavior:'smooth'});
      });
    }
  }));
}

function renderArticleList() {
  const list=document.getElementById('articleList'); if(!list || typeof ARTICLES==='undefined') return;
  const search=(document.getElementById('search')?.value || '').trim().toLocaleLowerCase('ur');
  let items=ARTICLES;
  if(search) items=ARTICLES.filter(a => `${a.title} ${a.category}`.toLocaleLowerCase('ur').includes(search));
  else if(activeCategory!=="تمام مضامین") items=ARTICLES.filter(a=>a.category===activeCategory);
  const title=document.getElementById('articleListTitle'); if(title) title.textContent=search?'تلاش کے نتائج':activeCategory;
  const count=document.getElementById('resultCount'); if(count) count.textContent=`${items.length}`;
  list.innerHTML=items.length ? items.map(a=>`<button type="button" class="article-link${currentArticle?.file===a.file?' active-article':''}" data-file="${escapeHtml(a.file)}"><span>${escapeHtml(a.title)}</span><small>${escapeHtml(a.category)}</small></button>`).join('') : '<p class="no-results">کوئی مضمون نہیں ملا۔</p>';
  list.querySelectorAll('.article-link').forEach(btn=>btn.addEventListener('click',()=>loadPDF(btn.dataset.file)));
}

function loadPDF(pdfFile, options={}) {
  const article=ARTICLES.find(a=>a.file===pdfFile); if(!article) return;
  currentArticle=article;
  activeCategory=article.category;
  const intro=document.getElementById('articleIntro'); if(intro) intro.hidden=true;
  const toolbar=document.getElementById('articleToolbar'); if(toolbar) toolbar.hidden=false;
  const title=document.getElementById('currentArticleTitle'); if(title) title.textContent=article.title;
  const pdfUrl=`articles/${article.file}`;
  const open=document.getElementById('openPdfLink'); if(open) open.href=pdfUrl;

  if(options.updateUrl !== false){
    const pageUrl=new URL(window.location.href);
    pageUrl.searchParams.set('article', article.file);
    history.replaceState({article:article.file}, '', pageUrl);
  }

  renderCategories();
  renderArticleList();

  const isMobile=window.matchMedia('(max-width: 768px)').matches;
  if(isMobile){
    if(options.fromSharedLink){
      // Let the visitor see the Baad-e-Shimal page first, then open the selected PDF.
      setTimeout(()=>{ window.location.href=pdfUrl; }, 700);
    } else {
      window.location.href=pdfUrl;
    }
    return;
  }

  const viewer=document.getElementById('pdfViewer');
  if(viewer) {
    viewer.src=`${pdfUrl}#toolbar=0&zoom=page-width`;
    viewer.classList.add('has-pdf');
  }

  if(options.fromSharedLink){
    const workspace=document.querySelector('.article-workspace');
    if(workspace){
      requestAnimationFrame(()=>{
        const top=workspace.getBoundingClientRect().top + window.scrollY - 12;
        window.scrollTo({top, behavior:'smooth'});
      });
    }
  }
}

async function shareArticle() {
  if(!currentArticle){ alert('پہلے کوئی مضمون کھولیں۔'); return; }
  const url=getArticleUrl(currentArticle.file);
  const data={title:currentArticle.title, text:`${currentArticle.title} — Baad-e-Shimal Canada`, url};
  try {
    // On phones/tablets use the native share sheet. On desktop copy the
    // direct Baad-e-Shimal URL so browser share services cannot replace it.
    const mobileShare = window.matchMedia('(max-width: 768px)').matches && navigator.share;
    if(mobileShare){ await navigator.share(data); return; }
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(url);
      alert('مضمون کا براہِ راست Baad-e-Shimal لنک کاپی ہوگیا ہے۔');
      return;
    }
  } catch(e){ if(e && e.name==='AbortError') return; }

  // Fallback for browsers where navigator.clipboard is unavailable/blocked.
  const box=document.createElement('textarea');
  box.value=url;
  box.setAttribute('readonly','');
  box.style.position='fixed';
  box.style.opacity='0';
  document.body.appendChild(box);
  box.select();
  box.setSelectionRange(0, box.value.length);
  try {
    const copied=document.execCommand('copy');
    document.body.removeChild(box);
    if(copied){
      alert('مضمون کا Baad-e-Shimal لنک کاپی ہوگیا ہے۔');
      return;
    }
  } catch(e) {}
  if(box.parentNode) box.parentNode.removeChild(box);
  window.prompt('لنک کاپی نہیں ہوسکا۔ براہِ کرم اسے کاپی کریں:',url);
}

function escapeHtml(value){ return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

document.addEventListener('DOMContentLoaded',()=>{
  if(typeof ARTICLES==='undefined') return;

  const requestedFile=new URLSearchParams(window.location.search).get('article');
  const requestedArticle=requestedFile ? ARTICLES.find(a=>a.file===requestedFile) : null;
  if(requestedArticle){
    currentArticle=requestedArticle;
    activeCategory=requestedArticle.category;
  }

  renderCategories();
  renderArticleList();

  const search=document.getElementById('search');
  if(search) search.addEventListener('input',()=>{ if(search.value.trim()) activeCategory='تمام مضامین'; renderCategories(); renderArticleList(); });

  if(requestedArticle){
    loadPDF(requestedArticle.file, {updateUrl:false, fromSharedLink:true});
  }
});
