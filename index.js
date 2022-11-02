const info = [
  {
    fName: "Mike Taylor",
    image: 'Images/person 1.jpg',
    locatio: "Lahore, Pakistan",
    description: `“On the Windows taking painted pasture yet its
        expressparties use. Sure last upon he same as
        knew next. Of believed or diverted no.”`,
  },
  {
    fName: "Chris Thomas",
    image: "Images/person 2.jpg",
    locatio: "Rome, Itlay",
    description: `“I have found Jadoo to be the best professional services in the area. I would recommend them to anyone without hesitation.”`,
  },
  {
    fName: "Alia Singh",
    image: "Images/person 5.jpg",
    locatio: "Mumbai, India ",
    description: `“I have been using jadoo for a few months now and it has been great so far. The prices are also very reasonable.”`,
  },
  {
    fName: "Dan Lee",
    image: "Images/person 3.jpg",
    locatio: "Hunan, China ",
    description: `“I have been a customer for about 12 months. The customer service is great and they always help me to make my experience better.”`,
  },
  {
    fName: "Jody Stokes",
    image: "Images/person 4.jpg",
    locatio: "Madrid, Spain ",
    description: `“Using Jadoo from a long time and can say they are the best in their field and provide good services in reasonable price.”`,
  },
];

// btns
const up = document.querySelector(".testimonial__up");
const down = document.querySelector(".testimonial__down");
//

// info
const image = document.querySelector(".testimonial__img img");
const description = document.getElementById("testimonial__des-1");
const fName = document.getElementById("testimonial__name-1");
const locatio = document.getElementById("testimonial__location-1");
//

// info card 2
const fName2 = document.getElementById("testimonial__name-2");
const locatio2 = document.getElementById("testimonial__location-2");
// 

// dots
const dot1 = document.querySelector("#testimonial__dot-1");
const dot2 = document.querySelector("#testimonial__dot-2");
const dot3 = document.querySelector("#testimonial__dot-3");
const dot4 = document.querySelector("#testimonial__dot-4");
const dot5 = document.querySelector("#testimonial__dot-5");

// show function

function showData(value) {
  const infoo = info[value];
  image.src = infoo.image;
  description.textContent = infoo.description;
  fName.textContent = infoo.fName;
  locatio.textContent = infoo.locatio;
}
// function showData2(v){
//   fName2.textContent=info[v].fName;
//   locatio2.textContent=info[v].locatio;
//   v++;
// }


// up click
i = 0;
v=1;
val = 0;
const dots = [dot1, dot2, dot3, dot4, dot5];
dots[0].style.backgroundColor = "#181e4b";
up.addEventListener("click", function () {
  i++;
  if (i == info.length) {
    i = 0;
  }
  showData(i);

  // card 2
  v++;
  if(v==info.length){
    v=0;
  }
  fName2.textContent=info[v].fName;
  locatio2.textContent=info[v].locatio;

  // dots functionality
  dots[val].style.backgroundColor = "rgb(215,215,215)";
  val++;
  if (val == dots.length) {
    val = 0;
  }
  dots[val].style.backgroundColor = "#181e4b";
});

//  down click

down.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = info.length - 1;
  }
  showData(i);

  // card 2
  v--;
  if(v<0){
    v=info.length-1;
  }
  fName2.textContent=info[v].fName;
  locatio2.textContent=info[v].locatio;

  // dots
  dots[val].style.backgroundColor="rgb(215,215,215)";
  val--;
  if(val<0){
    val=dots.length-1;
  }
  dots[val].style.backgroundColor="#181e4b";
});




// ----------------------------Navigation Toggle

const navBtn=document.getElementById('navigation__toggle');
const navMenu=document.querySelector(".navigation__menu");
const toggleNav=document.querySelector(".navigation__toggle-list-container");



navBtn.addEventListener('click',function(){
  toggleNav.classList.toggle('navigation__toggle-display');
  navMenu.classList.toggle("navigation__active-menu")
})



















// navBtn.addEventListener("click",function(){
//   navList.classList.toggle("navigation__list")
//   navLogin.style.marginLeft="0rem"
//   navToggleList.style.opacity="1"
//   navContainer.classList.toggle('navigation__toggle' )  
//   navList.classList.toggle('navigation__toggle-list')  

//   console.log(navToggleList)
// })