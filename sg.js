$(document).ready(function()
{

$("#body").keydown(function(event) {
    console.log("pressed key");
    if (event.which === 37) {
        $("#box").css("left", $("#box").offset().left - 20);
    }
    
    else if (event.which === 39) {
        $("#box").css("left", $("#box").offset().left + 20);
    } 
    else {
        return;
    }
});

setInterval(function(){
    
var rando = Math.random() * $("#p").width();
var object = $(".fall");
console.log(object)
var bot = $(".fall").offset().top;
var top1 = $("#box").offset().top - $(".fall").height();
    
    if (bot < top1){
        object.css("top", object.offset().top + 20);
        //fix for falling object
    } else{
        
        object.css("left", rando);
        object.css("top", 0);
    }    

    }, 100);
    });
