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
  $('article').readmore({
    speed: 500,
    moreLink: '<a href="">Показать полностью</a>',
    lessLink: '<a href="">Скрыть</a>'
  });
  // console.log(opinions);
  // console.log(randomOpinions);
});