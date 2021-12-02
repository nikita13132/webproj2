$(document).ready(function(){
    $('.header__burg').click(function(event){
            $('.header__burg, .header__nav, .header__ul-item, .header__ul-item').toggleClass('active');
            $('body').toggleClass('lock');
    });
    $('.header__ul-cart, .header__cart, .cart__close, #btn__shop').click(function(event){
        $('.cart').toggleClass('active');
        $('.header__burg').toggleClass('lock')
    });
    $('#cart__btn-plus').click(function() {
        let count = $('#cart__input');
        
        count.val(parseInt(count.val())+1);
    });
    $('#cart__btn-minus').click(function() {
        let count = $('#cart__input');
        
        count.val(parseInt(count.val())-1);
    });
    $('#cart__btn-plus1').click(function() {
        let count = $('#cart__input1');
        
        count.val(parseInt(count.val())+1);
    });
    $('#cart__btn-minus1').click(function() {
        let count = $('#cart__input1');
        
        count.val(parseInt(count.val())-1);
    });
    $('#cart__btn-plus2').click(function() {
        let count = $('#cart__input2');
        
        count.val(parseInt(count.val())+1);
    });
    $('#cart__btn-minus2').click(function() {
        let count = $('#cart__input2');
        
        count.val(parseInt(count.val())-1);
    });
    $('#main__btn-plus').click(function() {
        let count = $('#main__input');
        
        count.val(parseInt(count.val())+1);
    });
    $('#main__btn-minus').click(function() {
        let count = $('#main__input');
        
        count.val(parseInt(count.val())-1);
    });
});