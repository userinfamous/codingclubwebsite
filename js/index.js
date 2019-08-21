$(document).ready(function () {
  //Animate.js +
  //Animate Scroll JQuery +
  //JQuery +
  //Start at the top of the page, always
  $(window).on('beforeunload', function(){
      $(window).scrollTop(0);
  });
  //DO NOT DELETE THESE ABOVE CODE

  $('#typewriter').delay(2000).promise().done(function(){
    $('#title').slideDown(500);
    $('#title').promise().done(function(){
      $('#learn-more').animate({opacity: 1}, 1000);
      $('#learn-more').promise().done(function(){
        $('#github').animate({opacity: 1}, 1000);
        $('#github').promise().done(function(){
          $('#email').animate({opacity: 1}, 1000);
          $('body').css('overflowY', 'auto');
        });
      });
    });
  });

  //Learn more
  $('#learn-more').click(function() {
      $('html,body').animate({
          scrollTop: $('.section-1').offset().top},
          'slow');
  });

  //Visualize Button 1\\
  $('.button1-1').click(function() {
    $('.button1-1').hide();
    $('.button1-2').show();
    $('#image1').slideDown(500);
  })
  $('.button1-2').click(function() {
    $('.button1-2').hide();
    $('.button1-1').show();
    $('#image1').slideUp(500);
  })

  //Visualize Button 2\\
  $('.button2-1').click(function() {
    $('.button2-1').hide();
    $('.button2-2').show();
    $('#image3').slideDown(500);
    $('#image3').promise().done(function(){
      $('#image2').slideDown(500);
    });
  })

  $('.button2-2').click(function() {
    $('.button2-2').hide();
    $('.button2-1').show();
    $('#image2').slideUp(500);
    $('#image2').promise().done(function(){
      $('#image3').slideUp(500);
    });
  })

  //Visualize Button 3\\
  $('.button3-1').click(function() {
    $('.button3-1').hide();
    $('.button3-2').show();
    $('#image6').slideDown(500);
    $('#image6').promise().done(function(){
      $('#image5').slideDown(500);
      $('#image5').promise().done(function(){
        $('#image4').slideDown(500);
      });
    });
  })

  $('.button3-2').click(function() {
    $('.button3-2').hide();
    $('.button3-1').show();
    $('#image4').slideUp(500);
    $('#image4').promise().done(function(){
      $('#image5').slideUp(500);
      $('#image5').promise().done(function(){
        $('#image6').slideUp(500);
      });
    });
  })

  //Visualize Button 4\\
  $('.button4-1').click(function() {
    $('.button4-1').hide();
    $('.button4-2').show();
    $('#image7').slideDown(500);
  })
  $('.button4-2').click(function() {
    $('.button4-2').hide();
    $('.button4-1').show();
    $('#image7').slideUp(500);
  })

  ScrollReveal().reveal('.section-1', {
    distance:'100px',
    afterReveal: revealSections
   });
  ScrollReveal().reveal('.section-2', {
     distance:'150px'
   });
  ScrollReveal().reveal('.section-timeline', {
    distance:'200px'
  });
  ScrollReveal().reveal('.section-people', {
    distance:'50px',
    afterReveal: revealPeople
  });

//end of document
});

//Callback functions for reveal
function revealSections(element) {
  $('.section-1 h1').animate({opacity: 1}, 800);
  $('.section-1 h1').promise().done(function(){
    $('.section-1 p').animate({opacity: 1}, 800);
    $('.section-1 p').promise().done(function(){
      $('.section-2 h1').animate({opacity: 1}, 800);
      $('.section-2 h1').promise().done(function(){
        $('.section-2 p').animate({opacity: 1}, 800);
        $('.section-2 p').promise().done(function(){
          $('.section-timeline h1').animate({opacity: 1}, 800);
          $('.section-timeline h1').promise().done(function(){
            $('.section-timeline p').animate({opacity: 1}, 800);
            $('.section-timeline p').promise().done(function(){
              revealTimeline();
            });
          });
        });
      });
    });
  });
}

//Revealing the timeline only after reavealing the 2 sections above
function revealTimeline(element) {
  $('#timeline').animate({opacity: 1}, 800);
  $('#timeline').promise().done(function(){
    $('#item-1').animate({opacity: 1}, 800);
    $('#item-1').promise().done(function(){
      $('#item-2').animate({opacity: 1}, 800);
      $('#item-2').promise().done(function(){
        $('#item-3').animate({opacity: 1}, 800);
        $('#item-3').promise().done(function(){
          $('#item-4').animate({opacity: 1}, 800);
          $('#item-4').promise().done(function(){
            $('#item-5').animate({opacity: 1}, 800);
          });
        });
      });
    });
  });
}

function revealPeople(element) {
  $('.section-people h1').animate({opacity: 1}, 800);
  $('.section-people h1').promise().done(function(){
    $('.section-people p').animate({opacity: 1}, 800);
    $('.section-people p').promise().done(function(){
      $('.section-people .container-fluid').animate({opacity: 1}, 800);
    });
  });
}

function copy(selector){
  var $temp = $("<div>");
  $("body").append($temp);
  $temp.attr("contenteditable", true)
       .html($(selector).html()).select()
       .on("focus", function() { document.execCommand('selectAll',false,null) })
       .focus();
  document.execCommand("copy");
  $temp.remove();
}
