console.log("Script is running...")
document.querySelector(".cross").style.display = 'none';

/*
document.querySelector(".ham").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    document.querySelector(".cross").style.display = 'inline'
    document.querySelector(".ham").style.display = 'none';
})
document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    document.querySelector(".cross").style.display = 'none'
    document.querySelector(".ham").style.display = 'inline';
})
*/ 

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        document.querySelector(".cross").style.display = 'none'
        setTimeout(() => {
            document.querySelector(".ham").style.display = 'inline';
        }, 300);
    } else {
        setTimeout(() => {
            document.querySelector(".cross").style.display = 'inline'    
            
        }, 300);
        setTimeout(() => {
            document.querySelector(".ham").style.display = 'none';
        }, 100);
        
    }
})

document.querySelector(".service1").addEventListener("mouseover",()=>{
    document.querySelector(".service1").classList.toggle("backColor") 
})
document.querySelector(".service1").addEventListener("mouseout",()=>{
    document.querySelector(".service1").classList.toggle("backColor") 
})

document.querySelector(".service2").addEventListener("mouseover",()=>{
    document.querySelector(".service2").classList.toggle("backColor") 
})
document.querySelector(".service2").addEventListener("mouseout",()=>{
    document.querySelector(".service2").classList.toggle("backColor") 
})

document.querySelector(".service3").addEventListener("mouseover",()=>{
    document.querySelector(".service3").classList.toggle("backColor") 
})
document.querySelector(".service3").addEventListener("mouseout",()=>{
    document.querySelector(".service3").classList.toggle("backColor") 
})

document.querySelector(".service4").addEventListener("mouseover",()=>{
    document.querySelector(".service4").classList.toggle("backColor") 
})
document.querySelector(".service4").addEventListener("mouseout",()=>{
    document.querySelector(".service4").classList.toggle("backColor") 
})

document.querySelector(".service5").addEventListener("mouseover",()=>{
    document.querySelector(".service5").classList.toggle("backColor") 
})
document.querySelector(".service5").addEventListener("mouseout",()=>{
    document.querySelector(".service5").classList.toggle("backColor") 
})

document.querySelector(".service6").addEventListener("mouseover",()=>{
    document.querySelector(".service6").classList.toggle("backColor") 
})
document.querySelector(".service6").addEventListener("mouseout",()=>{
    document.querySelector(".service6").classList.toggle("backColor") 
})
