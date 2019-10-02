jQuery(document).ready(function($){
    // Constants
    var CHANGE_DURATION = 250;

    // Hide everything at the start
    $(".team").hide();
    $(".confirmDiv").hide();
    $(".generalForm").hide();

    $(".divSelector").css("opacity", "1");

    $("#highschoolForm").submit(function(){
        $(".generalForm").hide();
        $(".confirmDiv").show();
        $(".confirmDiv").css("opacity", "1");
    });

    $("#collegeForm").submit(function(){
        $(".generalForm").hide();
        $(".confirmDiv").show();
        $(".confirmDiv").css("opacity", "1");
    });

    $("#sprintForm").submit(function(){
        $(".generalForm").hide();
        $(".confirmDiv").show();
        $(".confirmDiv").css("opacity", "1");
    });

    $("#conventionForm").submit(function(){
        $(".generalForm").hide();
        $(".confirmDiv").show();
        $(".confirmDiv").css("opacity", "1");
    });

    $("#deconForm").submit(function(){
        $(".generalForm").hide();
        $(".confirmDiv").show();
        $(".confirmDiv").css("opacity", "1");
    });
    
    $(document).on("change", "#division", function(){
        $("#hteamNumber").val("None");
        $("#steamNumber").val("None");
        $("#cteamNumber").val("None");
        $("#dteamNumber").val("None");    
        $(".generalForm").hide(CHANGE_DURATION);
        if ($("#division").val() == "Highschool") {
            $("#highschoolFormDiv").show(CHANGE_DURATION);
        } else if ($("#division").val() == "College") {
            $("#collegeFormDiv").show(CHANGE_DURATION);
        } else if ($("#division").val() == "Circuit Sprint") {
            $("#sprintFormDiv").show(CHANGE_DURATION);
        } else if ($("#division").val() == "Expo") {
            $("#expoFormDiv").show(CHANGE_DURATION);
        } else if ($("#division").val() == "Summit") {
            $("#summitFormDiv").show(CHANGE_DURATION);
        }
    });

    $(document).on("change", "#hteamNumber", function(){
        if ($("#hteamNumber").val() == "None") {
            $(".team").hide(CHANGE_DURATION);
        } else {
            $(".team").show(CHANGE_DURATION);
        }
        if ($("#hteamNumber").val() >= 1) {
            $("#hst1").show(CHANGE_DURATION);
        } else {
            $("#hst1").hide(CHANGE_DURATION);
        }
        if ($("#hteamNumber").val() >= 2) {
            $("#hst2").show(CHANGE_DURATION);
        } else {
            $("#hst2").hide(CHANGE_DURATION);
        }
        if ($("#hteamNumber").val() >= 3) {
            $("#hst3").show(CHANGE_DURATION);
        } else {
            $("#hst3").hide(CHANGE_DURATION);
        }
        if ($("#hteamNumber").val() == 1) {
            updateRequiredFields("#hteamNumber", 1);
        } else if ($("#hteamNumber").val() == 2) {
            updateRequiredFields("#hteamNumber", 2);
        } else if ($("#hteamNumber").val() == 3) {
            updateRequiredFields("#hteamNumber", 3);
        }
    });

    $(document).on("change", "#cteamNumber", function(){
        if ($("#cteamNumber").val() == "None") {
            $(".team").hide(CHANGE_DURATION);
        } else {
            $(".team").show(CHANGE_DURATION);
        }
        if ($("#cteamNumber").val() >= 1) {
            $("#ct1").show(CHANGE_DURATION);
        } else {
            $("#ct1").hide(CHANGE_DURATION);
        }
        if ($("#cteamNumber").val() >= 2) {
            $("#ct2").show(CHANGE_DURATION);
        } else {
            $("#ct2").hide(CHANGE_DURATION);
        }
        if ($("#cteamNumber").val() >= 3) {
            $("#ct3").show(CHANGE_DURATION);
        } else {
            $("#ct3").hide(CHANGE_DURATION);
        }
        if ($("#cteamNumber").val() == 1) {
            updateRequiredFields("#cteamNumber", 1);
        } else if ($("#cteamNumber").val() == 2) {
            updateRequiredFields("#cteamNumber", 2);
        } else if ($("#cteamNumber").val() == 3) {
            updateRequiredFields("#cteamNumber", 3);
        } 
    });

    $(document).on("change", "#steamNumber", function(){
        if ($("#steamNumber").val() == "None") {
            $(".team").hide(CHANGE_DURATION);
        } else {
            $(".team").show(CHANGE_DURATION);
        }
        if ($("#steamNumber").val() >= 1) {
            $("#st1").show(CHANGE_DURATION);
        } else {
            $("#st1").hide(CHANGE_DURATION);
        }
        if ($("#steamNumber").val() >= 2) {
            $("#st2").show(CHANGE_DURATION);
        } else {
            $("#st2").hide(CHANGE_DURATION);
        }
        if ($("#steamNumber").val() >= 3) {
            $("#st3").show(CHANGE_DURATION);
        } else {
            $("#st3").hide(CHANGE_DURATION);
        }
        if ($("#steamNumber").val() == 1) {
            updateRequiredFields("#steamNumber", 1);
        } else if ($("#steamNumber").val() == 2) {
            updateRequiredFields("#steamNumber", 2);
        } else if ($("#steamNumber").val() == 3) {
            updateRequiredFields("#steamNumber", 3);
        } 
    });

    $(document).on("change", "#dteamNumber", function(){
        if ($("#dteamNumber").val() == "None") {
            $(".team").hide(CHANGE_DURATION);
        } else {
            $(".team").show(CHANGE_DURATION);
        }
        if ($("#dteamNumber").val() >= 1) {
            $("#dt1").show(CHANGE_DURATION);
        } else {
            $("#dt1").hide(CHANGE_DURATION);
        }
        if ($("#dteamNumber").val() >= 2) {
            $("#dt2").show(CHANGE_DURATION);
        } else {
            $("#dt2").hide(CHANGE_DURATION);
        }
        if ($("#dteamNumber").val() >= 3) {
            $("#dt3").show(CHANGE_DURATION);
        } else {
            $("#dt3").hide(CHANGE_DURATION);
        }
        if ($("#dteamNumber").val() == 1) {
            updateRequiredFields("#dteamNumber", 1);
        } else if ($("#dteamNumber").val() == 2) {
            updateRequiredFields("#dteamNumber", 2);
        } else if ($("#dteamNumber").val() == 3) {
            updateRequiredFields("#dteamNumber", 3);
        }
    });

    function updateRequiredFields(id, val) {
        if (id == "#hteamNumber"){
            if (val == 1) {
                $("#hname2A").attr("required", false);
                $("#hyear2A").attr("required", false);
                $("#hnum2A").attr("required", false);
                $("#hemail2A").attr("required", false);
                $("#hname2B").attr("required", false);
                $("#hyear2B").attr("required", false);
                $("#hnum2B").attr("required", false);
                $("#hemail2B").attr("required", false);
                $("#hname2C").attr("required", false);
                $("#hyear2C").attr("required", false);
                $("#hnum2C").attr("required", false);
                $("#hemail2C").attr("required", false);
                $("#hname2D").attr("required", false);
                $("#hyear2D").attr("required", false);
                $("#hnum2D").attr("required", false);
                $("#hemail2D").attr("required", false);

                $("#hname3A").attr("required", false);
                $("#hyear3A").attr("required", false);
                $("#hnum3A").attr("required", false);
                $("#hemail3A").attr("required", false);
                $("#hname3B").attr("required", false);
                $("#hyear3B").attr("required", false);
                $("#hnum3B").attr("required", false);
                $("#hemail3B").attr("required", false);
                $("#hname3C").attr("required", false);
                $("#hyear3C").attr("required", false);
                $("#hnum3C").attr("required", false);
                $("#hemail3C").attr("required", false);
                $("#hname3D").attr("required", false);
                $("#hyear3D").attr("required", false);
                $("#hnum3D").attr("required", false);
                $("#hemail3D").attr("required", false);
            } else if (val == 2) {
                $("#hname2A").attr("required", true);
                $("#hyear2A").attr("required", true);
                $("#hnum2A").attr("required", true);
                $("#hemail2A").attr("required", true);
                $("#hname2B").attr("required", true);
                $("#hyear2B").attr("required", true);
                $("#hnum2B").attr("required", true);
                $("#hemail2B").attr("required", true);
                $("#hname2C").attr("required", true);
                $("#hyear2C").attr("required", true);
                $("#hnum2C").attr("required", true);
                $("#hemail2C").attr("required", true);
                $("#hname2D").attr("required", true);
                $("#hyear2D").attr("required", true);
                $("#hnum2D").attr("required", true);
                $("#hemail2D").attr("required", true);

                $("#hname3A").attr("required", false);
                $("#hyear3A").attr("required", false);
                $("#hnum3A").attr("required", false);
                $("#hemail3A").attr("required", false);
                $("#hname3B").attr("required", false);
                $("#hyear3B").attr("required", false);
                $("#hnum3B").attr("required", false);
                $("#hemail3B").attr("required", false);
                $("#hname3C").attr("required", false);
                $("#hyear3C").attr("required", false);
                $("#hnum3C").attr("required", false);
                $("#hemail3C").attr("required", false);
                $("#hname3D").attr("required", false);
                $("#hyear3D").attr("required", false);
                $("#hnum3D").attr("required", false);
                $("#hemail3D").attr("required", false);
            } else if (val ==  3) {
                $("#hname2A").attr("required", true);
                $("#hyear2A").attr("required", true);
                $("#hnum2A").attr("required", true);
                $("#hemail2A").attr("required", true);
                $("#hname2B").attr("required", true);
                $("#hyear2B").attr("required", true);
                $("#hnum2B").attr("required", true);
                $("#hemail2B").attr("required", true);
                $("#hname2C").attr("required", true);
                $("#hyear2C").attr("required", true);
                $("#hnum2C").attr("required", true);
                $("#hemail2C").attr("required", true);
                $("#hname2D").attr("required", true);
                $("#hyear2D").attr("required", true);
                $("#hnum2D").attr("required", true);
                $("#hemail2D").attr("required", true);

                $("#hname3A").attr("required", true);
                $("#hyear3A").attr("required", true);
                $("#hnum3A").attr("required", true);
                $("#hemail3A").attr("required", true);
                $("#hname3B").attr("required", true);
                $("#hyear3B").attr("required", true);
                $("#hnum3B").attr("required", true);
                $("#hemail3B").attr("required", true);
                $("#hname3C").attr("required", true);
                $("#hyear3C").attr("required", true);
                $("#hnum3C").attr("required", true);
                $("#hemail3C").attr("required", true);
                $("#hname3D").attr("required", true);
                $("#hyear3D").attr("required", true);
                $("#hnum3D").attr("required", true);
                $("#hemail3D").attr("required", true);
            }
        }
        if (id == "#cteamNumber"){
            if (val == 1) {
                $("#cname2A").attr("required", false);
                $("#cyear2A").attr("required", false);
                $("#cnum2A").attr("required", false);
                $("#cemail2A").attr("required", false);
                $("#cname2B").attr("required", false);
                $("#cyear2B").attr("required", false);
                $("#cnum2B").attr("required", false);
                $("#cemail2B").attr("required", false);
                $("#cname2C").attr("required", false);
                $("#cyear2C").attr("required", false);
                $("#cnum2C").attr("required", false);
                $("#cemail2C").attr("required", false);
                $("#cname2D").attr("required", false);
                $("#cyear2D").attr("required", false);
                $("#cnum2D").attr("required", false);
                $("#cemail2D").attr("required", false);

                $("#cname3A").attr("required", false);
                $("#cyear3A").attr("required", false);
                $("#cnum3A").attr("required", false);
                $("#cemail3A").attr("required", false);
                $("#cname3B").attr("required", false);
                $("#cyear3B").attr("required", false);
                $("#cnum3B").attr("required", false);
                $("#cemail3B").attr("required", false);
                $("#cname3C").attr("required", false);
                $("#cyear3C").attr("required", false);
                $("#cnum3C").attr("required", false);
                $("#cemail3C").attr("required", false);
                $("#cname3D").attr("required", false);
                $("#cyear3D").attr("required", false);
                $("#cnum3D").attr("required", false);
                $("#cemail3D").attr("required", false);
            } else if (val == 2) {
                $("#cname2A").attr("required", true);
                $("#cyear2A").attr("required", true);
                $("#cnum2A").attr("required", true);
                $("#cemail2A").attr("required", true);
                $("#cname2B").attr("required", true);
                $("#cyear2B").attr("required", true);
                $("#cnum2B").attr("required", true);
                $("#cemail2B").attr("required", true);
                $("#cname2C").attr("required", true);
                $("#cyear2C").attr("required", true);
                $("#cnum2C").attr("required", true);
                $("#cemail2C").attr("required", true);
                $("#cname2D").attr("required", true);
                $("#cyear2D").attr("required", true);
                $("#cnum2D").attr("required", true);
                $("#cemail2D").attr("required", true);

                $("#cname3A").attr("required", false);
                $("#cyear3A").attr("required", false);
                $("#cnum3A").attr("required", false);
                $("#cemail3A").attr("required", false);
                $("#cname3B").attr("required", false);
                $("#cyear3B").attr("required", false);
                $("#cnum3B").attr("required", false);
                $("#cemail3B").attr("required", false);
                $("#cname3C").attr("required", false);
                $("#cyear3C").attr("required", false);
                $("#cnum3C").attr("required", false);
                $("#cemail3C").attr("required", false);
                $("#cname3D").attr("required", false);
                $("#cyear3D").attr("required", false);
                $("#cnum3D").attr("required", false);
                $("#cemail3D").attr("required", false);
            } else if (val ==  3) {
                $("#cname2A").attr("required", true);
                $("#cyear2A").attr("required", true);
                $("#cnum2A").attr("required", true);
                $("#cemail2A").attr("required", true);
                $("#cname2B").attr("required", true);
                $("#cyear2B").attr("required", true);
                $("#cnum2B").attr("required", true);
                $("#cemail2B").attr("required", true);
                $("#cname2C").attr("required", true);
                $("#cyear2C").attr("required", true);
                $("#cnum2C").attr("required", true);
                $("#cemail2C").attr("required", true);
                $("#cname2D").attr("required", true);
                $("#cyear2D").attr("required", true);
                $("#cnum2D").attr("required", true);
                $("#cemail2D").attr("required", true);

                $("#cname3A").attr("required", true);
                $("#cyear3A").attr("required", true);
                $("#cnum3A").attr("required", true);
                $("#cemail3A").attr("required", true);
                $("#cname3B").attr("required", true);
                $("#cyear3B").attr("required", true);
                $("#cnum3B").attr("required", true);
                $("#cemail3B").attr("required", true);
                $("#cname3C").attr("required", true);
                $("#cyear3C").attr("required", true);
                $("#cnum3C").attr("required", true);
                $("#cemail3C").attr("required", true);
                $("#cname3D").attr("required", true);
                $("#cyear3D").attr("required", true);
                $("#cnum3D").attr("required", true);
                $("#cemail3D").attr("required", true);
            }
        }
        if (id == "#steamNumber"){
            if (val == 1) {
                $("#sname2A").attr("required", false);
                $("#syear2A").attr("required", false);
                $("#snum2A").attr("required", false);
                $("#semail2A").attr("required", false);
                $("#sname2B").attr("required", false);
                $("#syear2B").attr("required", false);
                $("#snum2B").attr("required", false);
                $("#semail2B").attr("required", false);
                $("#sname2C").attr("required", false);
                $("#syear2C").attr("required", false);
                $("#snum2C").attr("required", false);
                $("#semail2C").attr("required", false);
                $("#sname2D").attr("required", false);
                $("#syear2D").attr("required", false);
                $("#snum2D").attr("required", false);
                $("#semail2D").attr("required", false);

                $("#sname3A").attr("required", false);
                $("#syear3A").attr("required", false);
                $("#snum3A").attr("required", false);
                $("#semail3A").attr("required", false);
                $("#sname3B").attr("required", false);
                $("#syear3B").attr("required", false);
                $("#snum3B").attr("required", false);
                $("#semail3B").attr("required", false);
                $("#sname3C").attr("required", false);
                $("#syear3C").attr("required", false);
                $("#snum3C").attr("required", false);
                $("#semail3C").attr("required", false);
                $("#sname3D").attr("required", false);
                $("#syear3D").attr("required", false);
                $("#snum3D").attr("required", false);
                $("#semail3D").attr("required", false);
            } else if (val == 2) {
                $("#sname2A").attr("required", true);
                $("#syear2A").attr("required", true);
                $("#snum2A").attr("required", true);
                $("#semail2A").attr("required", true);
                $("#sname2B").attr("required", true);
                $("#syear2B").attr("required", true);
                $("#snum2B").attr("required", true);
                $("#semail2B").attr("required", true);
                $("#sname2C").attr("required", true);
                $("#syear2C").attr("required", true);
                $("#snum2C").attr("required", true);
                $("#semail2C").attr("required", true);
                $("#sname2D").attr("required", true);
                $("#syear2D").attr("required", true);
                $("#snum2D").attr("required", true);
                $("#semail2D").attr("required", true);

                $("#sname3A").attr("required", false);
                $("#syear3A").attr("required", false);
                $("#snum3A").attr("required", false);
                $("#semail3A").attr("required", false);
                $("#sname3B").attr("required", false);
                $("#syear3B").attr("required", false);
                $("#snum3B").attr("required", false);
                $("#semail3B").attr("required", false);
                $("#sname3C").attr("required", false);
                $("#syear3C").attr("required", false);
                $("#snum3C").attr("required", false);
                $("#semail3C").attr("required", false);
                $("#sname3D").attr("required", false);
                $("#syear3D").attr("required", false);
                $("#snum3D").attr("required", false);
                $("#semail3D").attr("required", false);
            } else if (val == 3) {
                $("#sname2A").attr("required", true);
                $("#syear2A").attr("required", true);
                $("#snum2A").attr("required", true);
                $("#semail2A").attr("required", true);
                $("#sname2B").attr("required", true);
                $("#syear2B").attr("required", true);
                $("#snum2B").attr("required", true);
                $("#semail2B").attr("required", true);
                $("#sname2C").attr("required", true);
                $("#syear2C").attr("required", true);
                $("#snum2C").attr("required", true);
                $("#semail2C").attr("required", true);
                $("#sname2D").attr("required", true);
                $("#syear2D").attr("required", true);
                $("#snum2D").attr("required", true);
                $("#semail2D").attr("required", true);

                $("#sname3A").attr("required", true);
                $("#syear3A").attr("required", true);
                $("#snum3A").attr("required", true);
                $("#semail3A").attr("required", true);
                $("#sname3B").attr("required", true);
                $("#syear3B").attr("required", true);
                $("#snum3B").attr("required", true);
                $("#semail3B").attr("required", true);
                $("#sname3C").attr("required", true);
                $("#syear3C").attr("required", true);
                $("#snum3C").attr("required", true);
                $("#semail3C").attr("required", true);
                $("#sname3D").attr("required", true);
                $("#syear3D").attr("required", true);
                $("#snum3D").attr("required", true);
                $("#semail3D").attr("required", true);
            }
        }
        if (id == "#dteamNumber"){
            if (val == 1) {
                $("#dname2A").attr("required", false);
                $("#dyear2A").attr("required", false);
                $("#dnum2A").attr("required", false);
                $("#demail2A").attr("required", false);
                $("#dname2B").attr("required", false);
                $("#dyear2B").attr("required", false);
                $("#dnum2B").attr("required", false);
                $("#demail2B").attr("required", false);
                $("#dname2C").attr("required", false);
                $("#dyear2C").attr("required", false);
                $("#dnum2C").attr("required", false);
                $("#demail2C").attr("required", false);
                $("#dname2D").attr("required", false);
                $("#dyear2D").attr("required", false);
                $("#dnum2D").attr("required", false);
                $("#demail2D").attr("required", false);

                $("#dname3A").attr("required", false);
                $("#dyear3A").attr("required", false);
                $("#dnum3A").attr("required", false);
                $("#demail3A").attr("required", false);
                $("#dname3B").attr("required", false);
                $("#dyear3B").attr("required", false);
                $("#dnum3B").attr("required", false);
                $("#demail3B").attr("required", false);
                $("#dname3C").attr("required", false);
                $("#dyear3C").attr("required", false);
                $("#dnum3C").attr("required", false);
                $("#demail3C").attr("required", false);
                $("#dname3D").attr("required", false);
                $("#dyear3D").attr("required", false);
                $("#dnum3D").attr("required", false);
                $("#demail3D").attr("required", false);
            } else if (val == 2) {
                $("#dname2A").attr("required", true);
                $("#dyear2A").attr("required", true);
                $("#dnum2A").attr("required", true);
                $("#demail2A").attr("required", true);
                $("#dname2B").attr("required", true);
                $("#dyear2B").attr("required", true);
                $("#dnum2B").attr("required", true);
                $("#demail2B").attr("required", true);
                $("#dname2C").attr("required", true);
                $("#dyear2C").attr("required", true);
                $("#dnum2C").attr("required", true);
                $("#demail2C").attr("required", true);
                $("#dname2D").attr("required", true);
                $("#dyear2D").attr("required", true);
                $("#dnum2D").attr("required", true);
                $("#demail2D").attr("required", true);

                $("#dname3A").attr("required", false);
                $("#dyear3A").attr("required", false);
                $("#dnum3A").attr("required", false);
                $("#demail3A").attr("required", false);
                $("#dname3B").attr("required", false);
                $("#dyear3B").attr("required", false);
                $("#dnum3B").attr("required", false);
                $("#demail3B").attr("required", false);
                $("#dname3C").attr("required", false);
                $("#dyear3C").attr("required", false);
                $("#dnum3C").attr("required", false);
                $("#demail3C").attr("required", false);
                $("#dname3D").attr("required", false);
                $("#dyear3D").attr("required", false);
                $("#dnum3D").attr("required", false);
                $("#demail3D").attr("required", false);
            } else if (val ==  3) {
                $("#dname2A").attr("required", true);
                $("#dyear2A").attr("required", true);
                $("#dnum2A").attr("required", true);
                $("#demail2A").attr("required", true);
                $("#dname2B").attr("required", true);
                $("#dyear2B").attr("required", true);
                $("#dnum2B").attr("required", true);
                $("#demail2B").attr("required", true);
                $("#dname2C").attr("required", true);
                $("#dyear2C").attr("required", true);
                $("#dnum2C").attr("required", true);
                $("#demail2C").attr("required", true);
                $("#dname2D").attr("required", true);
                $("#dyear2D").attr("required", true);
                $("#dnum2D").attr("required", true);
                $("#demail2D").attr("required", true);

                $("#dname3A").attr("required", true);
                $("#dyear3A").attr("required", true);
                $("#dnum3A").attr("required", true);
                $("#demail3A").attr("required", true);
                $("#dname3B").attr("required", true);
                $("#dyear3B").attr("required", true);
                $("#dnum3B").attr("required", true);
                $("#demail3B").attr("required", true);
                $("#dname3C").attr("required", true);
                $("#dyear3C").attr("required", true);
                $("#dnum3C").attr("required", true);
                $("#demail3C").attr("required", true);
                $("#dname3D").attr("required", true);
                $("#dyear3D").attr("required", true);
                $("#dnum3D").attr("required", true);
                $("#demail3D").attr("required", true);
            }
        }
    }
    
});