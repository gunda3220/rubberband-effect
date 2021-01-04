const images = document.querySelectorAll('.logo img');
images.forEach((item, i) => {
  item.addEventListener('mouseover',()=>{
    item.classList.add('active');
    setTimeout(function(){ item.classList.remove('active'); }, 1200);
  })
});
