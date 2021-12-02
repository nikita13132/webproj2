$(document).ready(function(){
    $('.header__burg').click(function(event){
            $('.header__burg, .header__nav, .header__ul-item, .header__ul-item').toggleClass('active');
            $('body').toggleClass('lock');
    });
    $('.header__ul-cart, .header__cart, .cart__close, #btn__shop').click(function(event){
        $('.cart').toggleClass('active');
        $('.header__burg').toggleClass('lock')
    });
});