$(document).ready(function () {

	var hoverOn = function(element) {
			$(element).addClass('share-hovered');
			$(element).find('.js-hide-on-hover').addClass('hided');
			$(element).find('.js-show-on-hover').addClass('inline');
		};
	var hoverOff = function(element) {
			$(element).removeClass('share-hovered');
			$(element).find('.js-hide-on-hover').removeClass('hided');
			$(element).find('.js-show-on-hover').removeClass('inline');
		};

	if (!('ontouchstart' in document)) {

		$('.js-tw-hover').hover(function(){
			hoverOn(this);
		}, function(){
			hoverOff(this);
		});

		$('.js-vk-hover').hover(function() {
			hoverOn(this);
		}, function(){
			hoverOff(this);
		});

		$('.js-fb-hover').hover(function() {
			hoverOn(this);
		}, function(){
			hoverOff(this);
		});
	}else {
		//off hover effect for touchscreen devices
		hoverOn('.js-share-for-touch');
	}

});
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

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
}


$(document).ready(function() {
  var opinions = $('.js-opinion');
  var randomOpinions = getRandom(opinions, 2);
  for(var i = 0; i < randomOpinions.length; i++) {
    $(randomOpinions[i]).removeClass('hide');
  }

  // $('.js-content').readmore({
  //   speed: 500,
  //   moreLink: '<a href="">Показать полностью</a>',
  //   lessLink: '<a href="">Скрыть</a>'
  // });
  // console.log(opinions);
  // console.log(randomOpinions);
});
var socialShare = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        socialShare.popup(url);
    },
    // facebook: function(purl, ptitle, pimg, text) {
    //     url  = 'http://www.facebook.com/sharer.php?s=100';
    //     url += '&p[title]='     + encodeURIComponent(ptitle);
    //     url += '&p[summary]='   + encodeURIComponent(text);
    //     url += '&p[url]='       + encodeURIComponent(purl);
    //     url += '&p[images][0]=' + encodeURIComponent(pimg);
    //     socialShare.popup(url);
    // },
    twitter: function(purl, ptitle) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        socialShare.popup(url);
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};

var socialCounters = {

    // получаем счетчик facebook
    // fbCount: function(container){
    //     $.getJSON('http://api.facebook.com/restserver.php?method=links.getStats&callback=?&urls=' + escape(pageuri) + '&format=json', function(data) {
    //         // вставляем в DOM
    //         $('p', container).text(data[0].share_count);
    //     });
    // },
    // получаем счетчик vkontakte
    // паучьим чутьем чую, что тут какой-то косяк
    vkCount: function(container){
        VK = {};
        VK.Share = {};
        VK.Share.count = function(index, count){
            // вставляем в DOM
            $('p', container).text(count);
        };
        $.getJSON('http://vkontakte.ru/share.php?act=count&index=1&url=' + pageuri + '&format=json&callback=?');
    },
    // получаем счетчик twitter
    twCount: function(container){
        $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url=' + pageuri + '&callback=?', function(data) {
            // вставляем в DOM
            $('p', container).text(data.count);
        });
    }
};

$(document).ready(function () {
    pageuri = $(location).attr('href');
    // socialCounters.fbCount('.js-fb-counter');
    // socialCounters.vkCount('.js-vk-counter');
    // socialCounters.twCount('.js-tw-counter');

    var getCounters = function (){
        socialCounters.vkCount('.js-vk-counter');
        socialCounters.twCount('.js-tw-counter');
        setTimeout(getCounters,5000);
    };


//     $('js-fb-share').on('touchend', function(e) {
//     var o = e.originalEvent;
//     var isTouch = o instanceof TouchEvent && o.changedTouches.length === 1;

//     if (isTouch) {
//         $(this).toggleClass('is-on');
//     }
// });

    // $(document).on('click', '.js-fb-share', function () {
    //     socialShare.facebook('URL','TITLE','IMG_PATH','DESC');
    // });
    $(document).on('click', '.js-vk-share', function () {
        socialShare.vkontakte('http://happydev-lite.ru/','Большая конференция для студентов и школьников HappyDev-lite! #happydev-lite','../img/for-post-vk.jpg','Узнай о регистрации первым! Подпишись на рассылку на сайте: http://happydev-lite.ru');
        socialCounters.vkCount('.js-vk-counter');
    });
    $(document).on('click', '.js-tw-share', function () {
        socialShare.twitter('URL','Большая конференция для студентов и школьников HappyDev-lite: http://happydev-lite.ru Узнай о регистрации первым! #happydev-lite');
        socialCounters.twCount('.js-tw-counter');
    });
    getCounters();
});
$(document).ready(function() {
				var email = $('.js-email');
				var validationResult = $('.js-validation-result');
				var fildDanger = 'has-danger';
				var fildWarning = 'has-warning';
				var textDanger = 'text-danger';
				var textWarning = 'text-warning';
				var textDone = 'text-done';


		$(document).on('focus', '.js-email', function () {
				validationResult.text('');
				email.val('');
				email.removeClass(textDanger);
				email.removeClass(fildDanger);
				email.removeClass(textWarning);
				email.removeClass(fildWarning);
				email.removeClass(textDone);
		});

		$(document).on('click', '.js-submit', function () {
				var emailValue = email.val();
				if (emailValue!=='') {
					var regExp = /.+@.+\..+/i;

					if(regExp.test(emailValue)){
						email.removeClass(fildDanger);
						email.removeClass(textDanger);
						$.ajax({
                url: "https://docs.google.com/a/7bits.it/forms/d/1LMeVrPoJar9pBP3O0QSlOjAMaKGjH4_5jD253iESATs/formResponse",
                data: {"entry.1926142699" : emailValue},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
                        //Success message
                        validationResult.text('Ура! Подписка оформлена!');
                        validationResult.addClass(textDone);
                    },
                    200: function (){
                        //Success Message
                    }
                }
            });
					} else {
						validationResult.text('Некорректный e-mail');
						validationResult.addClass(textDanger);
						email.addClass(textDanger);
						email.addClass(fildDanger);
					}
		} else {
			validationResult.text('Поле не заполнено.. Ай-я-яй..');
			validationResult.addClass(textWarning);
			email.addClass(fildWarning);
		}
	});

});