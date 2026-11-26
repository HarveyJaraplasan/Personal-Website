const navPages=['index.html','about.html','hobbies.html','gallery.html','favorite.html','dreams.html','contact.html'];
const slides=[...document.querySelectorAll('.slide')];
let slideIdx=0;
const pageName=location.pathname.split('/').pop()||'index.html';
const pageIdx=navPages.indexOf(pageName);
document.body.classList.add(`page-${pageName.replace('.html','')}`);
const navLinks=[...document.querySelectorAll('.top-nav .nav-link')];
navLinks.forEach((a,i)=>{if(i===pageIdx)a.classList.add('active')});
function switchSlide(n){if(!slides.length)return;slideIdx=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===slideIdx));const s=slides[slideIdx];const values={subNumber:String(slideIdx+1).padStart(2,'0'),subTitle:s.dataset.title||`Slide ${slideIdx+1}`,subCurrent:String(slideIdx+1),subTotal:String(slides.length)};Object.entries(values).forEach(([id,value])=>{const el=document.getElementById(id);if(el)el.textContent=value;});}
function goPage(n){location.href=navPages[(n+navPages.length)%navPages.length]}
document.getElementById('prevPage')?.addEventListener('click',()=>goPage(pageIdx-1));
document.getElementById('nextPage')?.addEventListener('click',()=>goPage(pageIdx+1));
document.getElementById('prevSlide')?.addEventListener('click',()=>switchSlide(slideIdx-1));
document.getElementById('nextSlide')?.addEventListener('click',()=>switchSlide(slideIdx+1));
document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA'].includes(document.activeElement.tagName))return;if(e.key==='ArrowLeft')goPage(pageIdx-1);if(e.key==='ArrowRight')goPage(pageIdx+1);if(e.key==='ArrowUp')switchSlide(slideIdx-1);if(e.key==='ArrowDown')switchSlide(slideIdx+1)});
switchSlide(0);
