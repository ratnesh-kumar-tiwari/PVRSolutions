

document.addEventListener('scroll', function() {
    var elements = document.getElementsByClassName('fade-in-element');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var rect = element.getBoundingClientRect();
      var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        element.classList.add('animated');
      }
    }
  });


  document.addEventListener('scroll', function() {
    var elements = document.getElementsByClassName('move');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var rect = element.getBoundingClientRect();
      var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        element.classList.add('animated_left');
      }
    }
  });
 
  window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('modal-form'));
    myModal.show();
  };
    window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > navbar.getBoundingClientRect().top) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
  