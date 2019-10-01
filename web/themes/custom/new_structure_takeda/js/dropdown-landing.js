(function($, Drupal){
    Drupal.behaviors.dropdownForLandings={
        attach: function(context, settings){
            
            $('.landing-title').click(function(){
                $(this).parent().find('.landing-sites').toggleClass('closed');
                $(this).toggleClass('active-landing');
/*                var  blockHeight = $(this).parent().height();
                console.log(blockHeight);*/
               /* if(! ($('.takeda-sites').find('.closed').length==1)){
                   $('.landing').toggleClass('open');
                } */
            });            
        }
    };
})(jQuery, Drupal);