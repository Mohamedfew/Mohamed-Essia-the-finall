
// let audio = document.querySelector("#audio");
// audio.style.display = "none"
// console.log(audio)

// let mohdratess = document.querySelector("#mohadrate")
// console.log(mohdratess)

//  window.onclick = ()=>{
//     let aud = new Audio ("/dfeqwrfew.mp3");
//     let sound = true;
//     if(sound === true){
//         aud.play() 
//     }
//     else{   
//         aud.pause()
//     }
    
// }



// mohdrate
let ul  = document.querySelectorAll("li");
let close= document.querySelector(".closen");
ul.forEach((li)=>{
   
    li.addEventListener(("click"),(e)=>{
     let ele = e.currentTarget.dataset.show;
     console.log(ele)
     document.querySelector(ele).style.display="block"
     close.style.display="block"
     close.addEventListener("click",()=>{
        document.querySelector(ele).style.display="none";
        close.style.display="none"
     })
   
    })
});

// section

let ulll  = document.querySelectorAll("li");
let closeone= document.querySelector(".closen-1");
ulll.forEach((li)=>{
   
    li.addEventListener(("click"),(e)=>{
        
     let ele = e.currentTarget.dataset.show;
     console.log(ele)
     document.querySelector(ele).style.display="block"
     closeone.style.display="block"
     closeone.addEventListener("click",()=>{
        document.querySelector(ele).style.display="none";
        closeone.style.display="none"
     })
   
    })
});
// section



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
    sectionp.style.cssText = "  animation: left-to-right 2s linear"
}
if(window.scrollY >= sectionphoto.offsetTop-300){
    sectionphoto.style.cssText = "   animation:right-to-left 2s linear " 
}
if(window.scrollY >= sectiontext.offsetTop+250){
    console.log("fdsfsd")
    footer.style.cssText = "   animation:height-top-bottom 3s linear" 
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




