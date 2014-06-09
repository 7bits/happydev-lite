$(document).ready(function() {
  var animate, autoRotate, rotate, toNext, toPrev;
  rotate = {
    on: function() {
      return this.timer = setTimeout(autoRotate, 6000);
    },
    off: function() {
      return clearTimeout(this.timer);
    },
    timer: 0
  };
  animate = function(element, active) {
    var activeClass, animationTime;
    animationTime = 1500;
    activeClass = 'active';
    active.animate({
      opacity: 0
    }, animationTime);
    active.removeClass(activeClass);
    element.animate({
      opacity: 1
    }, animationTime);
    return element.addClass(activeClass);
  };
  toNext = function() {
    var active, images, next;
    active = $('.js-background .active');
    images = $('.js-background .js-carousel');
    if (active.next().length > 0) {
      next = active.next();
    } else {
      next = images.first();
    }
    return animate(next, active);
  };
  toPrev = function() {
    var active, images, prev;
    active = $('.js-background .active');
    images = $('.js-background .js-carousel');
    if (active.prev().length > 0) {
      prev = active.prev();
    } else {
      prev = images.last();
    }
    return animate(prev, active);
  };
  autoRotate = function() {
    toNext();
    return rotate.on();
  };
  $(document).on('click', '.js-right-arr', function() {
    rotate.off();
    toNext();
    return rotate.on();
  });
  $(document).on('click', '.js-left-arr', function() {
    rotate.off();
    toPrev();
    return rotate.on();
  });
  return rotate.on();
});
