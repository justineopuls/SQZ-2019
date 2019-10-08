$(document).ready(function(){
    $(".division").hide();
    $(".high-school").hide();
    $(".college").hide();

    $('#sqz-logo').click(function() {
        $(".logo-container").fadeToggle('fast');
        $('.division').show('slow');
    });

    $('#high-school-main').click(function() {
        $("#college-main").fadeToggle('fast');
        $("#high-school-main").fadeToggle('fast');
        $('.high-school').show('slow');
    });

    $('#college-main').click(function() {
        $("#college-main").fadeToggle('fast');
        $("#high-school-main").fadeToggle('fast');
        $('.college').show('slow');
    });

    var isFullscreen = false;

    $('.hs-quiz-bee').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ // MAXIMIZATION
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{ // MINIMIZATION            
            d.width = "50%";
            d.height = "70%";            
            isFullscreen = false;
            $(".logo-header").slideDown(speed);
        }
        $(".hs-quiz-bee").animate(d,speed); 
    });

    $('.hs-workshop').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ // MAXIMIZATION
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{ // MINIMIZATION            
            d.width = "50%";
            d.height = "70%";            
            isFullscreen = false;
            $(".logo-header").slideDown(speed);
        }
        $(".hs-workshop").animate(d,speed); 
    });

    $('.college-quiz-bee').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ // MAXIMIZATION
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{ // MINIMIZATION            
            d.width = "33%";
            d.height = "70%";            
            isFullscreen = false;
            $(".logo-header").slideDown(speed);
        }
        $(".college-quiz-bee").animate(d,speed); 
    });

    $('.tech-de-con').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ // MAXIMIZATION
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{ // MINIMIZATION            
            d.width = "33%";
            d.height = "70%";            
            isFullscreen = false;
            $(".logo-header").slideDown(speed);
        }
        $(".tech-de-con").animate(d,speed); 
    });

    $('.ckt-sprint').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ // MAXIMIZATION
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{ // MINIMIZATION            
            d.width = "33%";
            d.height = "70%";            
            isFullscreen = false;
            $(".logo-header").slideDown(speed);
        }
        $(".ckt-sprint").animate(d,speed); 
    });
});