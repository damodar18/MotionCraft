var crsr=document.querySelector("#cursor");
var crsr_blur=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20+"px";   /*dets-> gives the details of cursor position  and these two makes that cursor element follow the cursor(actual)*/
    crsr.style.top = dets.y+"px";
    gsap.to(crsr_blur,{
        left: dets.x-150+"px",   /* if not substracted with half of cursor-blur width and height ..the blue portion will not be at actual cursor and half the value bcoz cursor element is set at center of the blur part*/
        top : dets.y-150+"px",        /*if you dont need animation to the cursor blur change lhs in the form of above 2 lines and add = instead : but use crsr_blur*/
        duration:0.9
    })
})

var h4all=document.querySelectorAll("#nav h4"); //cursor animation when hovered h4 in nav
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    h4all.forEach(h=>h.style.color="#fff");
    this.style.color="#9aca21"
    gsap.to(crsr,{
        scale:3,
        border:"1px solid #fff",
        backgroundColor:"transparent",
        duration:0.3
    })
   
    // crsr.style.scale=2;
    // crsr.style.border="1px solid #fff";
    // crsr.style.backgroundColor="transparent";
})
elem.addEventListener("mouseleave",function(){
    this.style.color="#fff";
    gsap.to(crsr,{
        scale:1,
        border:" 0px solid #9aca21",
        backgroundColor:"#99BA47",
        duration:0.3
   })
//    crsr.style.scale=1;
//    crsr.style.border=" 0px solid #99BA47";
//    crsr.style.backgroundColor="#99BA47";
   })
})



gsap.to("#nav" , {
    backgroundColor: "#000",
    duration: 0.3,
    height: "160px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%", /*start and end are the animation start and its end and % represents part of display(consider scroll bar to stimate %)*/
        end: "top -17%", 
        scrub:1, /*scrub can take true or 1 to 5 values for smooth animation*/
    } 
});
gsap.to("#main" ,{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.from("#about-us img,#aboutus-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4, /*one by one animation action*/
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",  
        scrub:2,
    }
})
gsap.from(".card",{                       /* gsap use can over ride the action of rotate3d to tilt card*/
    scale:0.9,
    opacity:20,
    duration:0.3,
    scrollTrigger:{
        trigger:".card",                   
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2                 
    }
}) 
var cards=document.querySelectorAll(".card");
cards.forEach(card=>{
    card.addEventListener("mouseenter",function(){
        gsap.to(crsr,{
           scale:3,
           border:"1px solid #fff",
           backgroundColor:"transparent",
           
        });
    });
    card.addEventListener("mouseleave",function(){
        gsap.to(crsr,{
           scale:1,
           border:"0px #9aca21",
           backgroundColor:"#99BA47",
           
        });
    });

});
gsap.from("#colon1",{                      
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",                   
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 40%",
        scrub:4                
    }
}) 
gsap.from("#colon2",{                      
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon2",                   
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 85%",
        scrub:4                
    }
}) 

// ScrollTrigger animation for h1
gsap.from("#page4 h1", {
  y: 70,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 60%",
    scrub: 2,
    // markers: true
  }
});

// Stroke hover effect (outside gsap.from!)
const elems = document.querySelectorAll(".elem");
const heading = document.querySelector("#page4 h1");

elems.forEach(elem => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(heading, {
    //   color: "transparent",
      webkitTextStroke: "1px #99BA47",
      
      overwrite: "auto"
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(heading, {
      color: "#000",
      webkitTextStroke: "1px #fff",
      
      overwrite: "auto"   //overwrite is used to stop multiple GSAP animations from fighting over the same element ...we are making two animation 1 is scroll animation other is stroke change when hovered to elem...it helps gsap not to confuse and animates one after other
    });
  });
});


  
   
