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