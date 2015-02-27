

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  return _.flatten(getElementsByClassNameHelper(className, document.body));
};

// Make a helper function that is recursive
var getElementsByClassNameHelper = function(className, root) {
	var myChildren = [];
	if (root.classList !== undefined && root.classList.contains(className))
		myChildren.push(root);
	for (var i=0; i<root.childNodes.length; i++) {
		myChildren.push(getElementsByClassNameHelper(className, root.childNodes[i]));
	}
	return myChildren;
}