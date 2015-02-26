// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === undefined)
  	return 'undefined';
  if (obj === null)
  	return 'null';
  if (typeof obj === 'number')
  	return obj.toString();
  if (typeof obj === 'boolean')
  	return obj.toString();
  if (typeof obj === 'string')
  	return '"' + obj + '"';
  if (Array.isArray(obj)) {
  	var text = '[';
  	for (var i=0; i<obj.length; i++) {
  		text += stringifyJSON(obj[i]);
  		if (i != obj.length-1)
  			text += ',';
  	}
  	text += ']';
  	return text;
  }
};
