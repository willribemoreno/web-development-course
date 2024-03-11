// Waits for jQuery gets ready for usage. It should be used only if you put the scripts in the head section of the HTML file
// If it's placed right before the closing tag for body, then, it should not be necessary to check if jQuery is ready
// You only need to ensure that you're defining the Google CDN for jQuery before defining the scripts tag for your JS file. 
// Otherwise, it will display an error on browser console telling you that the $ variable is not defined
// $(document).ready(function() {
//     $("h1").css("color", "red");
// });

// Once I'm using the scripts for jQuery and JS right before the closing tag of body, then I can use the simplified way...
// $("h1").addClass("big-title margin-50");

$("body").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
})