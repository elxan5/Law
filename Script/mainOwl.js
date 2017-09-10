$(document).ready(function() {
   /*Our team*/
  $('.aboutProfile').hide();
  $('.aboutAllView').mouseover (function(){
      var team=$('.aboutAllView').index(this);
         $(this).css({
            'top':-84+'px'
         });
         $('.aboutProfile:eq(' + team + ')').show();
      })
  $('.aboutAllView').mouseout (function(){
     var team=$('.aboutAllView').index(this);
        $('.aboutProfile:eq('+team+')').slideDown();     
           $('.aboutAllView').css({
            'top':0
        });
    });
 
 /*Our team*/
    $(".owl-carousel").owlCarousel({
        margin: 15,
        items:4,
        nav: true,
        autoHeight: true,
        autoplay :true,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:false
            },
            480:{
                items:2,
                nav:true
            },
            768:{
                items:3,
                nav:true,
                loop:true
            },
             1192:{
                items:4,
                nav:true,
           
            }
        }
        })
})