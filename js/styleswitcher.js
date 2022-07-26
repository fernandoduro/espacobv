/*
* Theme Name: Tangram
* File name:styleswitcher.js
*/


window.console = window.console || function () {
    var e = {};
    e.log = e.warn = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function () {};
    return e
}();
$(document).ready(function () {
    var e = ' 	<h2>Style Switcher <a href="#"><i class="fa fa-bars"></i></a></h2>     <div class="content2">     <div class="switcher-box">     <a id="red" class="styleswitch color current"></a>     <a id="orange" class="styleswitch color"></a>   <a id="yellow" class="styleswitch color"></a> 	<a id="turquoise" class="styleswitch color"></a>     <a id="green" class="styleswitch color"></a>     <a id="blue" class="styleswitch color"></a> <a id="purple" class="styleswitch color"></a>  <a id="grey" class="styleswitch color"></a>  <a id="brown" class="styleswitch color"></a> <a id="violet" class="styleswitch color"></a>  </div><!-- End switcher-box -->     <div class="clear"></div>    <div class="clear"></div>     <br> <!--	<a id="reset" class="dark-style">Reset Styles</a>     </div> End content --> 	';
    $(".switcher").prepend(e)
});
$(document).ready(function () {
    function t(t) {
        $.cookie(e, t);
        $("head link[name=layout]").attr("href", "css/skin/" + t + ".css")
    }
   

});


$(document).ready(function () {
    function t(t) {
        $.cookie(e, t);
        $("head link[name=colors]").attr("href", "css/skin/" + t + ".css")
    }
    var e = "red";
    if ($.cookie(e)) {
        t($.cookie(e))
    }
    $("#red").click(function () {
        $;
        t("red");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
    $("#orange").click(function () {
        $;
        t("orange");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
	$("#yellow").click(function () {
        $;
        t("yellow");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
    $("#green").click(function () {
        $;
        t("green");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
    $("#blue").click(function () {
        $;
        t("blue");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
	$("#brown").click(function () {
        $;
        t("brown");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
	$("#violet").click(function () {
        $;
        t("violet");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
	 $("#purple").click(function () {
        $;
        t("purple");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
	$("#grey").click(function () {
        $;
        t("grey");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
    $("#turquoise").click(function () {
        $;
        t("turquoise");
        $(".styleswitch").removeClass("current");
        $(this).addClass("current")
    });
    $("#reset").click(function () {
        $;
        t("red");
        $(".styleswitch").removeClass("current");
        $("#red").addClass("current")
    })
});
$(document).ready(function () {
    $(".switcher").animate({
        left: "-160px"
    });
    $(".switcher h2 a").click(function (e) {
        e.preventDefault();
        var t = $(".switcher");
        console.log(t.css("left"));
        if (t.css("left") === "-160px") {
            $(".switcher").animate({
                left: "0px"
            })
        } else {
            $(".switcher").animate({
                left: "-160px"
            })
        }
    })
})