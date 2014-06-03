$(document).ready(function () {

    var pause = false;
    var toNext = function () {
        active = $('.js-background .active');
        images = $('.js-background .js-carousel');
        if (active.next().length > 0) {
            next = active.next();
        } else {
            next = images.first();
        }
        active.animate({
            opacity: 0
        }, 1500);
        active.removeClass('active');
        next.animate({
            opacity: 1
        }, 1500);
        next.addClass('active');
    };

    var toPrev = function () {
        active = $('.js-background .active');
        images = $('.js-background .js-carousel');
        if (active.prev().length > 0) {
            prev = active.prev();
        } else {
            prev = images.last();
        }
        active.animate({
            opacity: 0
        }, 1500);
        active.removeClass('active');
        prev.animate({
            opacity: 1
        }, 1500);
        prev.addClass('active');
    };
    var autoRotate = function () {
        if (!pause) {
            toNext();
            rotateOn = setTimeout(autoRotate, 10000);
        }
    };
    $(document).on('click', '.js-right-arr', function () {
        pause = true;
        clearTimeout(rotateOn);
        toNext();
        pause = false;
        rotateOn = setTimeout(autoRotate, 10000);
    });
    $(document).on('click', '.js-left-arr', function () {
        pause = true;
        clearTimeout(rotateOn);
        toPrev();
        pause = false;
        rotateOn = setTimeout(autoRotate, 10000);
    });
    var rotateOn = setTimeout(autoRotate, 10000);
});