// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === undefined)
  	return undefined;
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
  	if (text[text.length-1]===',')
  		text = text.slice(0,text.length-1); // Deletes superfluous comma
  	text += ']';
  	return text;
  }
  if (typeof obj === 'object') {
  	var text = '{';
  	for (var key in obj) {
  		var stringifiedValue = stringifyJSON(obj[key]);
  		if (stringifiedValue !== undefined)
  			text += stringifyJSON(key)+":"+stringifiedValue+',';
  	}
  	if (text[text.length-1]===',')
  		text = text.slice(0,text.length-1); // Deletes superfluous comma
  	text += '}';
  	return text;
  }
};
