(function() {
  'use strict';

  angular
    .module('ss.form', ['ss.form.numpericinput']);

})();


(function() {
  'use strict';


  $ssFormNumericinput.$inject = [];
  function $ssFormNumericinput() {

  }


  angular
    .module('ss.form.numericinput')
    .factory('$ssFormNumericinput', $ssFormNumericinput);

})();

