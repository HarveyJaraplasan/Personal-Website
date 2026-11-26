// Change this address to your preferred recipient.
const CONTACT_EMAIL='your-email@example.com';
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const subject=encodeURIComponent(fd.get('subject'));const body=encodeURIComponent(`Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\n${fd.get('message')}`);location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;});
