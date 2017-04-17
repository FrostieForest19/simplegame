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

var object = $(".fall");
setInterval(function(){
var bot = $(".fall").offset().top;
var top1 = $("#box").offset().top - $(".fall").height();
    if (bot < top1){
        object.css("top", object.offset().top + 20);
        //fix for falling object
        
    } else{
        object.css("top", 0);
    }    
    

    }, 100);
    });




/** //sets element to the variable $pic
var $pic = $("#pic"); 

$pic.click(function(){
    setInterval(function(){

var bot = $("#pic").offset().top;
var top1 = $("#ground").offset().top - $("#pic").height();
        console.log(bot);
        console.log(top1);
    if (bot < top1){
        $pic.css("top", $("#pic").offset().top + 20);
    } else{
        $pic.css("height", $("#pic").height() - 10);
    }    
    

    }, 100);
    });
**/