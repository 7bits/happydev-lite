function excerpt(str, nwords) {
  var words = str.split(' ');
  words.splice(nwords, words.length-1);
  return words.join(' ') +(words.length !== str.split(' ').length ? '&hellip;' : '');
}

$(document).ready(function() {
	var opinions = $('.js-content');
	for (var i = 0; i < opinions.length; i++){
		var someText = $(opinions[i]).text();
		console.log(someText);
		someText = excerpt(someText,100);
		console.log(someText);
	}
});
