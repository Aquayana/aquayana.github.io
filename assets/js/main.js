// Aquayana
(function(){
  const nav=document.getElementById('site-nav');
  if(nav) window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>50);},{passive:true});
  const toggle=document.getElementById('nav-toggle'),links=document.getElementById('nav-links');
  if(toggle&&links){
    toggle.addEventListener('click',function(){links.classList.toggle('open');toggle.classList.toggle('active');});
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open');toggle.classList.remove('active');});});
  }
})();