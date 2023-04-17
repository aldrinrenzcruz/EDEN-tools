// //Disable page refresh using F5
// function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
// $(document).on("keydown", disableF5);

//Prompt alert upon closing of browser
window.onbeforeunload = function(evt) {
    var message = 'Changes you made may not be saved.';
    if (typeof evt == 'undefined') {
        evt = window.event;
    }
    if (evt) {
        evt.returnValue = message;
    }

    return message;
}

//Prevent links from being dragged
$('a').mousedown(function(e) {
    e.preventDefault();
});