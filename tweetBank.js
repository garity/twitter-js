var _ = require('lodash');

var data = [];

let id = 0;

function add(name, content){
  id++;
  data.push({ name: name, content: content, id: id});
}

// function add (name, content) {
//   let id = 0;
//   function addIn(){
//     id++;
//     data.push({ name: name, content: content, id: id});
//   }
//   return addIn;
// }

// console.log("data = " + data);
// function add (name, content) {
//   let id = 0;
//   return function addIn(){
//     function() {
//       id++;
//     data.push({ name: name, content: content, id: id});
//   }();
//   }
  
// }

function list () {
  return _.cloneDeep(data);
}


function find (properties) {
  return _.cloneDeep(_.filter(data, function(tweet) {
    return tweet.name === properties.name;
  }));
}

module.exports = { add: add, list: list, find: find };


var randArrayEl = function(arr) {

  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  // var nameWeKnow = 'Dave Dunderproto';
  // return nameWeKnow;
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

// var addFunc = add( getFakeName(), getFakeTweet())
// // console.log("add func = " addFunc);
// console.log(addFunc());

for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
//addIn() => id = 1 push(name, content, id 1)
//addIn() => id = 2 push(name, content, id 2)

console.log("data = " + data);
