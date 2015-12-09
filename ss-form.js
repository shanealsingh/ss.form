(function() {
  'use strict';

  angular
    .module('ss.form', ['ss.form.numericinput']);

})();


(function() {
  'use strict';


  $ssFormNumericinput.$inject = ['$document'];
  function $ssFormNumericinput($document) {

  	function link($scope, $element, $attr, ctrl) {
		  var regExp = /^\d+$/;

		  var allowedKeyCodes = [];
		  allowedKeyCodes.push(8);    // backspace
		  allowedKeyCodes.push(39);   // right arrow
		  allowedKeyCodes.push(37);   // left arrow
		  allowedKeyCodes.push(46);   // delete key
		  allowedKeyCodes.push(9);    // tab key
		  allowedKeyCodes.push(13);   // enter key

		  // Add keyCodes for numbers ex. 0-9
		  for(var i = 48; i <= 57; i++) {
		    allowedKeyCodes.push(i);
		  }

		  $element.bind('keydown', function(e) {
		    var keyCode = e.which || e.charCode || e.keyCode;

		    // Allow paste event to fire
		    if((e.ctrlKey || e.metaKey || keyCode === 91) || (e.ctrlKey || e.metaKey || keyCode === 91 && keyCode === 86)) {
		      return true;
		    }

		    if(allowedKeyCodes.indexOf(keyCode) === -1 || allowedKeyCodes.indexOf(keyCode) && e.shiftKey) {
		      e.preventDefault();
		      return false;
		    }
		  });

		  $document.bind('paste', function(e) {
		    var data = (e.originalEvent || e).clipboardData.getData('text/plain');

		    if($element[0] === e.target && !data.match(regExp)) {
		      e.preventDefault();
		      return false;
		    }
		  });

		  if(ctrl) {
		    // Validate the model
		    ctrl.$validators.dtvNumericInput = function(value) {
		      return (value && (value.toString()).match(regExp)) ? true : false;
		    };

		    // Convert modelValue to viewValue
		    // In case the modelValue is set programitically and it is invalid, then set it to undefined and remove from input
		    ctrl.$formatters.push(function(value) {
		      if(value && (value.toString()).match(regExp)) {
		        return value;
		      } else {
		        return undefined;
		      }
		    });
		  }
  	}

  	return {
  		restrict: 'AE',
  		require: '?ngModel',
  		link: link
  	};
  }


  angular
    .module('ss.form.numericinput', [])
    .directive('ssNumericinput', $ssFormNumericinput);

})();

