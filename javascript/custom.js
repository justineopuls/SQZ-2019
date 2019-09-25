jQuery(document).ready(function($){

    $(".confirmDiv").hide();
    $(".generalForm").hide();
    $(".team").hide();

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
        if ($("#division").val() == "Highschool") {
            $(".generalForm").show();
            $("#highschoolFormDiv").show();
            $("#highschoolFormDiv").css("opacity", "1");
            $("#collegeFormDiv").hide();
            $("#collegeFormDiv").css("opacity", "0");
            $("#sprintFormDiv").hide();
            $("#sprintFormDiv").css("opacity", "0");
            $("#expoFormDiv").hide();
            $("#expoFormDiv").css("opacity", "0");
            $("#summitFormDiv").hide();
            $("#summitFormDiv").css("opacity", "0");
        } else if ($("#division").val() == "College") {
            $(".generalForm").show();
            $("#highschoolFormDiv").hide();
            $("#highschoolFormDiv").css("opacity", "0");
            $("#collegeFormDiv").show();
            $("#collegeFormDiv").css("opacity", "1");
            $("#sprintFormDiv").hide();
            $("#sprintFormDiv").css("opacity", "0");
            $("#expoFormDiv").hide();
            $("#expoFormDiv").css("opacity", "0");
            $("#summitFormDiv").hide();
            $("#summitFormDiv").css("opacity", "0");
        } else if ($("#division").val() == "Circuit Sprint") {
            $(".generalForm").show();
            $("#highschoolFormDiv").hide();
            $("#highschoolFormDiv").css("opacity", "0");
            $("#collegeFormDiv").hide();
            $("#collegeFormDiv").css("opacity", "0");
            $("#sprintFormDiv").show();
            $("#sprintFormDiv").css("opacity", "1");
            $("#expoFormDiv").hide();
            $("#expoFormDiv").css("opacity", "0");
            $("#summitFormDiv").hide();
            $("#summitFormDiv").css("opacity", "0");
        } else if ($("#division").val() == "Expo") {
            $(".generalForm").show();
            $("#highschoolFormDiv").hide();
            $("#highschoolFormDiv").css("opacity", "0");
            $("#collegeFormDiv").hide();
            $("#collegeFormDiv").css("opacity", "0");
            $("#sprintFormDiv").hide();
            $("#sprintFormDiv").css("opacity", "0");
            $("#expoFormDiv").show();
            $("#expoFormDiv").css("opacity", "1");
            $("#summitFormDiv").hide();
            $("#summitFormDiv").css("opacity", "0");
        } else if ($("#division").val() == "Summit") {
            $(".generalForm").show();
            $("#highschoolFormDiv").hide();
            $("#highschoolFormDiv").css("opacity", "0");
            $("#collegeFormDiv").hide();
            $("#collegeFormDiv").css("opacity", "0");
            $("#sprintFormDiv").hide();
            $("#sprintFormDiv").css("opacity", "0");
            $("#expoFormDiv").hide();
            $("#expoFormDiv").css("opacity", "0");
            $("#summitFormDiv").show();
            $("#summitFormDiv").css("opacity", "1");
        } else {
            $(".generalForm").hide();
            $("#highschoolFormDiv").css("opacity", "0");
            $("#collegeFormDiv").css("opacity", "0");
            $("#sprintFormDiv").css("opacity", "0");
            $("#expoFormDiv").css("opacity", "0");
            $("#summitFormDiv").css("opacity", "0");
        }
    });

    $(document).on("change", "#hteamNumber", function(){
        if ($("#hteamNumber").val() == 1) {
            updateRequiredFields("#hteamNumber", 1);
            $(".team").show();
            $("#hst1").show();
            $("#hst1").css("opacity", "1");
            $("#hst2").hide();
            $("#hst2").css("opacity", "0");
            $("#hst3").hide();
            $("#hst3").css("opacity", "0");
        } else if ($("#hteamNumber").val() == 2) {
            updateRequiredFields("#hteamNumber", 2);
            $(".team").show();
            $("#hst1").show();
            $("#hst1").css("opacity", "1");
            $("#hst2").show();
            $("#hst2").css("opacity", "1");
            $("#hst3").hide();
            $("#hst3").css("opacity", "0");
        } else if ($("#hteamNumber").val() == 3) {
            updateRequiredFields("#hteamNumber", 3);
            $(".team").show();
            $("#hst1").show();
            $("#hst1").css("opacity", "1");
            $("#hst2").show();
            $("#hst2").css("opacity", "1");
            $("#hst3").show();
            $("#hst3").css("opacity", "1");
        } else {
            $(".team").hide();
            $("#hst1").css("opacity", "0");
            $("#hst2").css("opacity", "0");
            $("#hst3").css("opacity", "0");
        }
    });

    $(document).on("change", "#cteamNumber", function(){
        if ($("#cteamNumber").val() == 1) {
            updateRequiredFields("#cteamNumber", 1);
            $(".team").show();
            $("#ct1").show();
            $("#ct1").css("opacity", "1");
            $("#ct2").hide();
            $("#ct2").css("opacity", "0");
            $("#ct3").hide();
            $("#ct3").css("opacity", "0");
        } else if ($("#cteamNumber").val() == 2) {
            updateRequiredFields("#cteamNumber", 2);
            $(".team").show();
            $("#ct1").show();
            $("#ct1").css("opacity", "1");
            $("#ct2").show();
            $("#ct2").css("opacity", "1");
            $("#ct3").hide();
            $("#ct3").css("opacity", "0");
        } else if ($("#cteamNumber").val() == 3) {
            updateRequiredFields("#cteamNumber", 3);
            $(".team").show();
            $("#ct1").show();
            $("#ct1").css("opacity", "1");
            $("#ct2").show();
            $("#ct2").css("opacity", "1");
            $("#ct3").show();
            $("#ct3").css("opacity", "1");
        } else {
            $(".team").hide();
            $("#ct1").css("opacity", "0");
            $("#ct2").css("opacity", "0");
            $("#ct3").css("opacity", "0");
        }
    });

    $(document).on("change", "#steamNumber", function(){
        if ($("#steamNumber").val() == 1) {
            updateRequiredFields("#steamNumber", 1);
            $(".team").show();
            $("#st1").show();
            $("#st1").css("opacity", "1");
            $("#st2").hide();
            $("#st2").css("opacity", "0");
        } else if ($("#steamNumber").val() == 2) {
            updateRequiredFields("#steamNumber", 2);
            $(".team").show();
            $("#st1").show();
            $("#st1").css("opacity", "1");
            $("#st2").show();
            $("#st2").css("opacity", "1");
        } else if ($("#steamNumber").val() == 3) {
            updateRequiredFields("#steamNumber", 3);
            $(".team").show();
            $("#st1").show();
            $("#st1").css("opacity", "1");
            $("#st2").show();
            $("#st2").css("opacity", "1");
            $("#st3").show();
            $("#st3").css("opacity", "1");
        } else {
            $(".team").hide();
            $("#st1").css("opacity", "0");
            $("#st2").css("opacity", "0");
        }
    });

    $(document).on("change", "#dteamNumber", function(){
        if ($("#dteamNumber").val() == 1) {
            updateRequiredFields("#dteamNumber", 1);
            $(".team").show();
            $("#dt1").show();
            $("#dt1").css("opacity", "1");
            $("#dt2").hide();
            $("#dt2").css("opacity", "0");
            $("#dt3").hide();
            $("#dt3").css("opacity", "0");
        } else if ($("#dteamNumber").val() == 2) {
            updateRequiredFields("#dteamNumber", 2);
            $(".team").show();
            $("#dt1").show();
            $("#dt1").css("opacity", "1");
            $("#dt2").show();
            $("#dt2").css("opacity", "1");
            $("#dt3").hide();
            $("#dt3").css("opacity", "0");
        } else if ($("#dteamNumber").val() == 3) {
            updateRequiredFields("#dteamNumber", 3);
            $(".team").show();
            $("#dt1").show();
            $("#dt1").css("opacity", "1");
            $("#dt2").show();
            $("#dt2").css("opacity", "1");
            $("#dt3").show();
            $("#dt3").css("opacity", "1");
        } else {
            $(".team").hide();
            $("#dt1").css("opacity", "0");
            $("#dt2").css("opacity", "0");
            $("#dt3").css("opacity", "0");
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