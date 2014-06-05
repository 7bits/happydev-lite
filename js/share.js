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
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        socialShare.popup(url);
    },
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
    fbCount: function(container){
        $.getJSON('http://api.facebook.com/restserver.php?method=links.getStats&callback=?&urls=' + escape(pageuri) + '&format=json', function(data) {
            // вставляем в DOM
            $('p', container).text(data[0].share_count);
        });
    },
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
    socialCounters.fbCount('.js-fb-counter');
    socialCounters.vkCount('.js-vk-counter');
    socialCounters.twCount('.js-tw-counter');


    $('js-fb-share').on('touchend', function(e) {
    var o = e.originalEvent;
    var isTouch = o instanceof TouchEvent && o.changedTouches.length === 1;

    if (isTouch) {
        $(this).toggleClass('is-on');
    }
});

    $(document).on('click', '.js-fb-share', function () {
        socialShare.facebook('URL','TITLE','IMG_PATH','DESC');
    });
    $(document).on('click', '.js-vk-share', function () {
        socialShare.vkontakte('URL','TITLE','IMG_PATH','DESC');
    });
    $(document).on('click', '.js-tw-share', function () {
        socialShare.twitter('URL','TITLE');
    });
});