/* src/js/greeting.js */

var Greeting = (function() {

  var DOM = {},
    names = [
      'handsome',
      'smarty pants',
      'good looking',
      'classy',
      'ace',
      'Mr Roboto'
    ],
    dummy = selectName();


  /* =================== private methods ================= */

  // cache DOM elements
  function cacheDom() {
    DOM.$greeting = $('#greeting');
  }


  // pick a name from names array
  function selectName() {
    var ind = Math.floor(Math.random() * names.length);

    return names[ind];
  }


  // assemble time-based greeting message
  function makeMessage() {
    var timeOfDay,
        theDate = new Date(),
        theHour = theDate.getHours();

    if (theHour < 12) {
      timeOfDay = "morning";
    } else if (theHour >= 12 && theHour < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "evening";
    }

    return `Good ${timeOfDay}, ${dummy}.`;   // :D
  }


  // render DOM
  function displayMessage() {
    DOM.$greeting
      .text(makeMessage());
  }


  /* =================== public methods ================== */

  // main init method
  function init() {
    cacheDom();
  }


  /* =============== export public methods =============== */
  return {
    init: init,
    displayMessage: displayMessage
  };

}());
