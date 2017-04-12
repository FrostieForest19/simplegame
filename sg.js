$(document).ready(function()
{


$("#body").keydown(function(event) {
    console.log("pressed key");
    if (event.which === 37) {
        $("#box").css("left", $("#box").offset().left - 10);
    }
    
    else if (event.which === 39) {
        $("#box").css("left", $("#box").offset().left + 10);
    } 
    else {
        return;
    }
});


});