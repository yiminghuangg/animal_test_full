// mobile nav toggle
(function(){
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', ()=>{
    if(links.style.display === 'flex') links.style.display = 'none';
    else links.style.display = 'flex';
  });
})();
