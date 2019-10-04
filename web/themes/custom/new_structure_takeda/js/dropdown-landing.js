(function($, Drupal){
    Drupal.behaviors.dropdownForLandings={
        attach: function(context, settings){
            $('.landing-title').click(function(){
                $(this).parent().find('.landing-sites').toggleClass('closed');
                $(this).toggleClass('active-landing');

            //// Adding white area when dropdown menu open    
                 if( ($('.landing-title').hasClass('active-landing'))){
                     $('#block-choose-a-therapeutic-area').height (300);
                 } else {
                     $('#block-choose-a-therapeutic-area').height(178);
                 };    
            });    
        }
    };
})(jQuery, Drupal);