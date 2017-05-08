
$(document).ready(function(){

var score = 0;

$("#body").keydown(function(event){
var left = $("#box").offset().left
var right = $("#p").offset().left
var left2 =$("#p").offset().left + $("#p").width()
var right2 = $("#box").offset().left + $("#box").width()

        if (event.which === 37) {
            if (left > right){
                $("#box").css("left", $("#box").offset().left - 10);
                }
            else if (event.which === 39) {
                $("#box").css("left", $("#box").offset().left + 10);
                }
        }
        else if (event.which === 39) {
            if(right2 < left2){
                $("#box").css("left", $("#box").offset().left + 15);
                }
            else if (event.which === 37){
            $("#box").css("left", $("#box").offset().left - 15);
                }
        }
        else {
            return;
            }
});

setInterval(function(){

var rando = Math.random() * $("#p").width();
var object = $(".fall");
var bot = $(".fall").offset().top;
var top1 = $("#box").offset().top - $(".fall").height();
    
    if (bot < top1){
        object.css("top", object.offset().top + 10);
        //fix for falling object
    } else{
        object.css("left", rando);
        object.css("top", 0);
    }    
    
var botdiv = $(".fall").offset().top + $(".fall").height();
var top = $("#box").offset().top;

    if (botdiv >= top){
        score += 1;
        $("#total").html("Score: " + score);
    }
    
    }, 100);
});
