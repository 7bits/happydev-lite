// $(document).ready(function() {
//   Array.prototype.shuffle = function( b )
//     {
//      var i = this.length, j, t;
//      while( i ) 
//      {
//       j = Math.floor( ( i-- ) * Math.random() );
//       t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
//       this[i] = this[j];
//       this[j] = t;
//      }

//      return this;
//     };
//   var opinions = $('.js-opinion');
//   var shuffledOpinions = [];
//   for(var opinion in opinions) {
//     shuffledOpinions.push(opinion);
//   };
//   shuffledOpinions.shuffle();
//   console.log(opinions);
//   console.log(shuffledOpinions);
// });