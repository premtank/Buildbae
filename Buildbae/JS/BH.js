// Read more 

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var forScroll = document.getElementById("bup");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    forScroll.style.overflowY = "scroll";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    forScroll.style.overflowY = "visible";
  }
}

// End of Read more


// Day Change with resolution 

var day = document.getElementsByClassName("Day");


if ( window.screen.availWidth<= 460) {
  day[0].innerHTML = "Mon";
  day[1].innerHTML = "Tue";
  day[2].innerHTML = "Wed";
  day[3].innerHTML = "Thu";
  day[4].innerHTML = "Fri";
  day[5].innerHTML = "Sat";
  day[6].innerHTML = "Sun";
}
else{
  day[0].innerHTML = "Monday";
  day[1].innerHTML = "Tuesday";
  day[2].innerHTML = "Wednesday";
  day[3].innerHTML = "Thurday";
  day[4].innerHTML = "Friday";
  day[5].innerHTML = "Saturday";
  day[6].innerHTML = "Sunday";
}


// End of // Day Change with resolution 


// Card Scrolling with buttons

function ScrollWithbuttonR() {
  var silde = document.getElementById("EmployeeCard");
  silde.scrollLeft += 300;
}
function ScrollWithbuttonL() {
  var silde = document.getElementById("EmployeeCard");
  silde.scrollLeft -= 300;
}
function ScrollWithbuttonRN() {
  var silde1 = document.getElementById("OnboardingCard");
  silde1.scrollLeft += 350;
}
function ScrollWithbuttonLN() {
  var silde1 = document.getElementById("OnboardingCard");
  silde1.scrollLeft -= 350;
}

// End of Card Scrolling with buttons
  

// function scrollmenu(){
  //   var container=document.getElementById("Menu");
  //   sidescroll(container,'Right',25,100,10);  
  // }  
  // function sidescroll(element,direction,speed,distance,step){
  //   scrollamount=0;
  //   var slidetimer = setInterval(function(){
  //     element.scrollLeft += step;
  //     scrollamount+=step;
  //     if(scrollamount>=distance){
  //       window.clearInterval(slidetimer);
  //     }
  //   },speed)
  // }