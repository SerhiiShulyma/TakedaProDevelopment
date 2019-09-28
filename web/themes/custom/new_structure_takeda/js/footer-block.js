(function ($, Drupal){
    Drupal.behaviors.footerBlock={
        attach: function (context, settings){
            if($('.site-footer').find('.footer-info').length==1){
                return false;             
            } else {
                $('#block-footer-copywrite, #block-footer').wrapAll('<div class="footer-info" />');
            }
        }
    };
})(jQuery, Drupal);