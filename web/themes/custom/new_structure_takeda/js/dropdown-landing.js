(function($, Drupal){
    Drupal.behaviors.dropdownForLandings={
        attach: function(context, settings){
            $('.landing-title').click(function(){
                $(this).parent().find('.landing-sites').toggleClass('closed');
                $(this).toggleClass('active-landing');
                if($('body').width() < 992){
                  var rel = $(this).attr('rel-data');
                  $('#'+rel).toggleClass('open');
                  $(this).parents('.landing').toggleClass('active');
                }

              //// Adding white area when dropdown menu open
                 if( ($('.landing-title').hasClass('active-landing'))){
                     $('#block-choose-a-therapeutic-area').height (300);
                 } else {
                     $('#block-choose-a-therapeutic-area').height(178);
                 }
            });
            $('.disabled a').click(function () {
              return false;
            });
            $('.menu--footer li:nth-child(2) a').attr('target','_blank');
        }
    };
})(jQuery, Drupal);
