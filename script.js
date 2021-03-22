$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    // toggle menu/navbar 
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});

//typing animation script
var typed = new Typed(".typing", {
    strings: ["Computer Engineer", "Web Designer", "Graphic Designer", "crypto lover"],
    tpyeSpeed: 100,
    backSpeed:60,
    loop: true
} )

var typed = new Typed(".typing2", {
    strings: ["Computer Engineer", "Web Designer", "Graphic Designer"],
    tpyeSpeed: 100,
    backSpeed:60,
    loop: true
} )
