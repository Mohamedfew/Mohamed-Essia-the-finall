



// mohdrate
let ul  = document.querySelectorAll("li");
let close= document.querySelector(".closen");
ul.forEach((li)=>{
   
    li.addEventListener(("click"),(e)=>{
        // e.currentTarget.style.color="red"
     let ele = e.currentTarget.dataset.show;
     document.querySelector(ele).style.display="block"
     close.style.display="block"
     close.addEventListener("click",()=>{
        document.querySelector(ele).style.display="none";
        close.style.display="none"
     })
   
    })
});



window.onscroll = ()=>{   if(window.scrollY >= 1000){
    let click = document.querySelector(".up")
    click.style.display="block"
    
    click.onclick = ()=>{
        window.scrollTo ({
            top:0,
            behavior:"smooth"
        })}  
    }
    else{
      document.querySelector(".up").style.display="none"
    }
}


                   
let nav =document.querySelector("nav");
let sectiontext =document.querySelector(".text");
let sectionphoto =document.querySelector(".photo");
let sectionp =document.querySelector(".text p");
let footer =document.querySelector("footer");
sectionp.style.cssText = "position: relative; left: -90%";
sectionphoto.style.cssText = "position: relative; right: -100%";
footer.style.cssText = "  height:10px;";

window.onscroll = ()=>{
       

// section
if(window.scrollY >= sectiontext.offsetTop-400){
    sectionp.style.cssText = "  animation: left-to-right 2s;"
}
if(window.scrollY >= sectionphoto.offsetTop-300){
    sectionphoto.style.cssText = "   animation:right-to-left 2s; " 
}
if(window.scrollY >= sectiontext.offsetTop+300){
    console.log("fdsfsd")
    footer.style.cssText = "   animation:height-top-bottom 2s " 
}


  
// btn scroll to top
if(window.scrollY >= 1000){
let click = document.querySelector(".up")
click.style.display="block"

click.onclick = ()=>{
    window.scrollTo ({
        top:0,
        behavior:"smooth"
    })}  
}
else{
  document.querySelector(".up").style.display="none"
}
}