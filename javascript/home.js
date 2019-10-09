$(document).ready(function(){
    $(".division").hide();
    $(".high-school").hide();
    $(".college").hide();
    $(".logo-header").hide();
    $(".college-main").hide();
    $(".high-school-main").hide();
    $(".mechanics").hide();

    var selectionScreen = 0;
    var engaged = false;

    $('#sqz-logo').click(function() {
        if (selectionScreen == 0) {
            $(".college-main").fadeToggle('fast');
            $(".high-school-main").fadeToggle('fast');
        }
        $(".logo-container").fadeToggle('fast');
        $(".logo-header").fadeToggle('slow');
        $('.division').show('slow');
        selectionScreen = 1;
    });

    $('.high-school-main').click(function() {
        $(".college-main").fadeToggle('fast');
        $(".high-school-main").fadeToggle('fast');
        $('.high-school').show('slow');
        selectionScreen = 2;
    });

    $('.college-main').click(function() {
        $(".college-main").fadeToggle('fast');
        $(".high-school-main").fadeToggle('fast');
        $('.college').show('slow');
        selectionScreen = 3;
    });

    $('.logo-header').click(function() {
        if (selectionScreen == 1) {
            $(".high-school-main").fadeToggle('fast');
            $(".college-main").fadeToggle('fast');
            $(".logo-header").fadeToggle('fast');
            $(".logo-container").fadeToggle('slow');
        }
        if (selectionScreen == 2) {
            $(".logo-header").fadeToggle('fast');
            $(".high-school").fadeToggle('fast');
            $(".logo-container").fadeToggle('slow');
        }
        if (selectionScreen == 3) {
            $(".logo-header").fadeToggle('fast');
            $(".college").fadeToggle('fast');
            $(".logo-container").fadeToggle('slow');
        }
        selectionScreen = 0;
    });

    var isFullscreen = false;

    $('.hs-quiz-bee').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ 
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
            $(".hsqb").fadeToggle('slow');
        }
        else{             
            d.width = "50%";
            d.height = "70%";            
            isFullscreen = false;
            $(".hsqb").fadeToggle('fast');
            $(".logo-header").slideDown(speed);
        }
        $(".hs-quiz-bee").animate(d,speed); 
    });

    $('.hs-workshop').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ 
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
            $(".hsw").fadeToggle('slow');
        }
        else{             
            d.width = "50%";
            d.height = "70%";            
            isFullscreen = false;
            $(".hsw").fadeToggle('fast');
            $(".logo-header").slideDown(speed);
        }
        $(".hs-workshop").animate(d,speed); 
    });

    $('.college-quiz-bee').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ 
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{             
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
        if(!isFullscreen){ 
            d.width = "100%";
            d.height = "100%";
            d.left = "0";
            d.position = "absolute";
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{             
            d.width = "33%";
            d.height = "70%";
            d.left = "33%";
            d.position = "inline block";            
            isFullscreen = false;
            $(".logo-header").slideDown(speed);
        }
        $(".tech-de-con").animate(d,speed); 
    });

    $('.ckt-sprint').click(function() {
        var d = {};
        var speed = 300;
        if(!isFullscreen){ 
            d.width = "100%";
            d.height = "100%"; 
            isFullscreen = true;
            $(".logo-header").slideUp(speed);
        }
        else{             
            d.width = "33%";
            d.height = "70%";            
            isFullscreen = false;
            $(".logo-header").slideDown(speed);
        }
        $(".ckt-sprint").animate(d,speed); 
    });
});