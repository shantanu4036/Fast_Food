// active navbar 

let nav=document.querySelector(".navigation-wrap");
window.onscroll =function (){
   if(document.documentElement.scrollTop >20)
   {
      nav.classList.add("scroll-on");
   }
   else{
      nav.classList.remove("scroll-on");
   }
}



// nav hide  // in mobile application in which navitem we will click ,the other items are vanish and the respective are shown
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse"); // here don't make a space in between two classes
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
        // show is a bootstrap class
    })
})

//counter design
document.addEventListener("DOMContentLoaded",()=>{
  function counter(id,start,end,duration){
     let obj=document.getElementById(id);
     current=start;
     range=end-start;
     increment =end > start ? 1:-1;
     step= Math.abs(Math.floor(duration/range));
     timer=setInterval(()=>
      {
         current +=increment
         obj.textContent=current;
         if(current ==end)
         {
          clearInterval(timer);
         }
      },step);

  }
  counter("count1",0,1287,3000);
  counter("count2",100,5786,2500);
  counter("count3",0,1400,3000);
  counter("count4",0,7110,3000);
})