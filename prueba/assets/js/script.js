$(function () {
    $('[data-toggle="tooltip"]').tooltip();

$("a").click(function(event){
     if (this.hash !=="");{
         event.preventdefault();

         var gato = this.hash;
         $("html, body").animate({
             scrolltop: $(gato).offset().top 
             }, 900, function(){
                 window.location.hash = gato;
             });
     }
    });

    $('nav a').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });
    