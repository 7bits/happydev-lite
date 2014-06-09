$(document).ready ->
    rotate =
        on: ->
            @.timer = setTimeout(autoRotate, 6000)
        off: ->
            clearTimeout(@.timer)
        timer:0
    animate = (element, active) ->
        animationTime = 1500
        activeClass = 'active'
        active.animate({opacity: 0}, animationTime)
        active.removeClass(activeClass)
        element.animate({opacity: 1}, animationTime)
        element.addClass(activeClass)
    toNext = () ->
        active = $('.js-background .active')
        images = $('.js-background .js-carousel')
        if active.next().length > 0
            next = active.next()
        else
            next = images.first()
        animate(next, active)
    toPrev = () ->
        active = $('.js-background .active')
        images = $('.js-background .js-carousel')
        if active.prev().length > 0
            prev = active.prev()
        else
            prev = images.last()
        animate(prev, active)
    autoRotate = () ->
        toNext()
        rotate.on()
    $(document).on('click', '.js-right-arr', ->
        rotate.off()
        toNext()
        rotate.on()
    )
    $(document).on('click', '.js-left-arr', ->
        rotate.off()
        toPrev()
        rotate.on()
    )
    rotate.on()