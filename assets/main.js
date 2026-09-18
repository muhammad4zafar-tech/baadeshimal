let currentArticle = null;
let activeCategory = "تمام مضامین";

function getArticleUrl(file) { return new URL(`articles/${file}`, window.location.href).href; }

function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid || typeof ARTICLES === "undefined") return;
  const categories = [...new Set(ARTICLES.map(a => a.category))];
  const all = [{name:"تمام مضامین", count:ARTICLES.length}, ...categories.map(name => ({name, count:ARTICLES.filter(a=>a.category===name).length}))];
  grid.innerHTML = all.map(item => `<button class="category-card${item.name===activeCategory?' active':''}" type="button" data-category="${escapeHtml(item.name)}"><span>${escapeHtml(item.name)}</span><small>${item.count} ${item.count===1?'مضمون':'مضامین'}</small></button>`).join("");
  grid.querySelectorAll('.category-card').forEach(btn => btn.addEventListener('click', () => { activeCategory=btn.dataset.category; const s=document.getElementById('search'); if(s) s.value=''; renderCategories(); renderArticleList(); }));
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

function loadPDF(pdfFile) {
  const article=ARTICLES.find(a=>a.file===pdfFile); if(!article) return;
  currentArticle=article;
  const intro=document.getElementById('articleIntro'); if(intro) intro.hidden=true;
  const toolbar=document.getElementById('articleToolbar'); if(toolbar) toolbar.hidden=false;
  const title=document.getElementById('currentArticleTitle'); if(title) title.textContent=article.title;
  const open=document.getElementById('openPdfLink'); if(open) open.href=`articles/${article.file}`;
  const viewer=document.getElementById('pdfViewer');
  if(viewer) { viewer.src=`articles/${article.file}#toolbar=0&zoom=page-width`; viewer.classList.add('has-pdf'); }
  renderArticleList();
}

async function shareArticle() {
  if(!currentArticle){ alert('پہلے کوئی مضمون کھولیں۔'); return; }
  const url=getArticleUrl(currentArticle.file);
  const data={title:currentArticle.title, text:`${currentArticle.title} — Baad-e-Shimal Canada`, url};
  try { if(navigator.share){ await navigator.share(data); return; } if(navigator.clipboard && window.isSecureContext){ await navigator.clipboard.writeText(url); alert('مضمون کا لنک کاپی ہوگیا ہے۔'); return; } } catch(e){ if(e && e.name==='AbortError') return; }
  window.prompt('مضمون کا لنک کاپی کریں:',url);
}

function escapeHtml(value){ return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

document.addEventListener('DOMContentLoaded',()=>{
  if(typeof ARTICLES==='undefined') return;
  renderCategories(); renderArticleList();
  const search=document.getElementById('search'); if(search) search.addEventListener('input',()=>{ if(search.value.trim()) activeCategory='تمام مضامین'; renderCategories(); renderArticleList(); });
});
