$(function(){


    $('.item-trigger').on('click',function() {
        $(this).next('.item-show').slideToggle();
    });

});