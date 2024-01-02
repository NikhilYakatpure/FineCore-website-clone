var swiper = new Swiper(".mySwiperOne", {
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-icon",
      prevEl: ".swiper-button-prev-icon",
    },
    pagination: {
      el: ".swiper-pageOne",
      clickable: true,
    },
  });

  let total = 3;

  var swiper = new Swiper(".mySwiperTwo", {
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
    spaceBetween: 30,
    freeMode: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-page",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiperThree", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-paginations",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiperFour", {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 5,
        spaceBetween: 30
      },
    },
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });


  // ---- navbar scroll ----- //

  const navbar = document.querySelector(".navbar");
  const heroSlider = document.querySelector(".hero-slider");


  const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
  };


  const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        navbar.classList.add("nav-scrolled");
      }
      else{
        navbar.classList.remove("nav-scrolled");
      }
    })
  }, sectionOneOptions);


  sectionOneObserver.observe(heroSlider);
  
  
// -------- 

const menuOpen = document.querySelector("#menuOpen");

const menuClose = document.querySelector("#menuClose");

const navbarMenuSlide = document.querySelector("#navbar-menu-slide");

menuOpen.addEventListener("click", ()=>{

  navbarMenuSlide.classList.toggle("active");
});
menuClose.addEventListener("click", ()=>{

  navbarMenuSlide.classList.remove("active");
});

  
  // progress bar

  const skillPer = document.querySelectorAll(".skill-per");

  const abouts = document.querySelector(".about");

  function showProgress(){
    skillPer.forEach((skill)=>{
      skill.style.width = skill.dataset.width;
    });
   };


window.addEventListener("scroll",()=>{
  const sectionpos = abouts.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if(sectionpos < screenPos){
    showProgress();
  }
});



// accordion starts


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');

  title.addEventListener('click', () => {
    for (i = 0; i < accordionItems.length; i++) {
      if(accordionItems[i] != item){
        accordionItems[i].classList.remove('active');
      }else{
        // toggle the accordion item
        item.classList.toggle('active');
      }
    }

  });
});



// projects gallery filter

// selecting ul
const gallery = document.querySelector(".gallery");

// selecting project images
const projectImgs = document.querySelectorAll(".project-img");
console.log(projectImgs);



gallery.addEventListener("click", (e)=>{
  // console.log(e)

if(e.target.classList.contains("filter")){

  // finding any active class present and removing it
  gallery.querySelector(".active").classList.remove("active");

  // adding active class to the targeted li
  e.target.classList.add("active");

  // storing data-filter value into a variable
  const filterValue = e.target.getAttribute("data-filter");
  console.log(filterValue);


  projectImgs.forEach(item =>{

    if(item.classList.contains(filterValue) || filterValue === "all"){
      
      item.classList.add("show");

      item.classList.remove("hide");
      
    }
    else{
      item.classList.add("hide");
    }

  })

}
});



 