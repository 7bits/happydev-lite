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
  var randomOpinions = getRandom(opinions, 3);
  for(var i = 0; i < randomOpinions.length; i++) {
    $(randomOpinions[i]).removeClass('hide');
  }

  // $(function(){
  //   var slideHeight = 200; // px    
  //   var defHeight = $('#wrap').height();
  //   if(defHeight >= slideHeight){
  //     $('#wrap').css('height' , slideHeight + 'px');
  //     $('#read-more').append('<a href="#">Click to Read More</a>');
  //     $('#read-more a').click(function(){
  //       var curHeight = $('#wrap').height();
  //       if(curHeight == slideHeight){
  //         $('#wrap').animate({
  //           height: defHeight
  //         }, "normal");
  //         $('#read-more a').html('Close');
  //         $('#gradient').fadeOut();
  //       }else{
  //         $('#wrap').animate({
  //           height: slideHeight
  //         }, "normal");
  //         $('#read-more a').html('Click to Read More');
  //         $('#gradient').fadeIn();
  //       }
  //       return false;
  //     });
  //   }
  // });
  $('.js-content').readmore({
    speed: 500,
    moreLink: '<a href="">Показать полностью</a>',
    lessLink: '<a href="">Скрыть</a>'
  });
  // console.log(opinions);
  // console.log(randomOpinions);
});