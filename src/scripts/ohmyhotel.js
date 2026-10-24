  var fill = document.getElementById('progressFill');
  function updateProgress(){
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (scrolled / max) * 100 : 0;
    fill.style.width = pct + '%';
  }
  document.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

  var dots = document.querySelectorAll('.dot-nav a');
  var sectionIds = ['s-background','s-role','s-platform','s-design','s-results'];
  if ('IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          dots.forEach(function(d){
            d.classList.toggle('active', d.dataset.id === entry.target.id);
          });
        }
      });
    }, {rootMargin:'-45% 0px -45% 0px'});
    sectionIds.forEach(function(id){
      var el = document.getElementById(id);
      if(el) obs.observe(el);
    });
  }

  if ('IntersectionObserver' in window){
    var revealObs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          revealObs.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){ revealObs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
