$(window).on("scroll", function(){  
        let links = document.querySelectorAll('.nav-link');
   if( $(this).scrollTop() > ($("#about").offset().top - $("#nav").height())){
    $("#nav").css("cssText",`
            background-color: rgba(0,0,0,0.5) !important;
            
    `);
   }else{
    $("#nav").css("cssText",`
            background-color: white 
    `);
   }
   if( $("#nav").css("backgroundColor") ==  "rgba(0, 0, 0, 0.5)"){
        $(".navbar-brand ,#nav .nav-link").css("color","white");
        
        links.forEach(link => {
                link.style.setProperty("--color","white")
        });
        
        }else{
                $(".navbar-brand ,#nav .nav-link").css("color","black")
                links.forEach(link => {
                        link.style.setProperty("--color","black")
                });
                
        }
})
$(".nav-link").on("click",function(e){
        e.preventDefault()
        let offset =$( `${$(e.target).attr("href")}`).offset().top;
            $("html , body").animate({scrollTop:offset} , 1000);
});
$(document).ready(function(){
        $(".loader").fadeOut(2000, function(){
                $(".loading").slideUp(1000,function(){
                        $("body").css("overflow","auto");
                        $("body , html").scrollTop(0);
                });
        });
});
$("aside i").on("click",function(){
        $(".sideBox").animate({
                width:"toggle"
        },1000);
});
$(".ineerSide .colors span").each(function(){
       let red=Math.floor(Math.random()*255);
       let green=Math.floor(Math.random()*255);
       let blue=Math.floor(Math.random()*255);
        $(this).css("cssText",`
                background-color: rgb(${red},${green},${blue})
        `)
       
})
$(".ineerSide .colors span").on("click", function(e){
        console.log($(e.target).css("backgroundColor"))
        $("h2,p").css("cssText",`
                color : ${$(e.target).css("backgroundColor")}   !important
        `)
})

