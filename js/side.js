/**
 * Created by donpage on 8/6/14.
 */


(function () {


    var overlay = document.querySelector('.overlay');
    var overlay2 = document.querySelector('.overlay2');

    var openMod = document.querySelector('.open-cart');
    var addingItemMod = document.querySelector('.add-item-to-shop');
    var closeMod = document.querySelector('.close-mod');
    var closeaddMod = document.querySelector('.close-add-mod');





    closeMod.addEventListener('click', function(){
        overlay.style.visibility = 'hidden';
    });

    openMod.addEventListener('click', function(){
       overlay.style.visibility = 'visible';
    });

    closeaddMod.addEventListener('click', function(){
        overlay2.style.visibility = 'hidden';
    });

    addingItemMod.addEventListener('click', function(){
        overlay2.style.visibility = 'visible';
    });



    $(window).scroll(function (e) {
        if ($(this).scrollTop() < 90) {
            $('#fixed-nav').removeClass('open');
        } else {
            $('#fixed-nav').addClass('open');

        }
    });
    $('.open-cart').on('click', function(){
        $('.overlay').css('visibility', 'visible');
    });

    $('.add-item-to-shop').on('click', function(){
        $('.overlay2').css('visibility', 'visible');
    })


})();
