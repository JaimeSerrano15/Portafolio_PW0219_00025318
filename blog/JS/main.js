window.onload = function(){
    var days = document.querySelectorAll("span");
    days[0].addEventListener("click",()=>{
        document.querySelector("article.one").classList.toggle("off");
        for(let i=0; i<5;i++){
            if(i!=0)
                days[i].classList.toggle("off");
        }
    });
    days[1].addEventListener("click",()=>{
        document.querySelector("article.two").classList.toggle("off");
        for(let i=0; i<5;i++){
            if(i!=1)
                days[i].classList.toggle("off");
        }
    });
    days[2].addEventListener("click",()=>{
        document.querySelector("article.three").classList.toggle("off");
        for(let i=0; i<5;i++){
            if(i!=2)
                days[i].classList.toggle("off");
        }
    });
    days[3].addEventListener("click",()=>{
        document.querySelector("article.four").classList.toggle("off");
        for(let i=0; i<5;i++){
            if(i!=3)
                days[i].classList.toggle("off");
        }
    });
    days[4].addEventListener("click",()=>{
        document.querySelector("article.five").classList.toggle("off");
        for(let i=0; i<5;i++){
            if(i!=4)
                days[i].classList.toggle("off");
        }
    });
}