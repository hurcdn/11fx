var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
        window.location.href = 'http://huahuo.vzai.net/index.php?mod=isie';
        // return 7;
    } else if (fIEVersion == 8) {
        window.location.href = 'http://huahuo.vzai.net/index.php?mod=isie';
        // return 8;
    } else if (fIEVersion == 9) {
        window.location.href = 'http://huahuo.vzai.net/index.php?mod=isie';
        // return 9;
    } else if (fIEVersion == 10) {
        // return 10;
    } else {
        window.location.href = 'http://huahuo.vzai.net/index.php?mod=isie';
        //return 6; //IE版本<=7
    }
} else if (isEdge) {
    //return 'edge'; //edge
} else if (isIE11) {
    //return 11; //IE11
} else {
    //return -1; //不是ie浏览器
}
$(function () {
    $("#user").mouseenter(function () {
        $("#service").show();
    })
    $("#service").mouseleave(function () {
        $(this).hide();
    })
    $(".menu li a").click(function () {
        $(this).addClass("on").parent().siblings("li").children("a").removeClass("on");
    })
    $(".tab-bar li a").click(function () {
        $(this).addClass("on").parent().siblings("li").children("a").removeClass("on");
    })
    $(".navbar li a").click(function () {
        $(this).addClass("on").parent().siblings("li").children("a").removeClass("on");
    })
    $(".filter li a").click(function () {
        $(this).addClass("on").parent().siblings("li").children("a").removeClass("on");
    })
    $(".showAccount").click(function () {
        $(".account").show();
        $(".mobile").hide();
    })
    $(".showMobile").click(function () {
        $(".mobile").show();
        $(".account").hide();
    })
    $(".intr-title").click(function () {
        var x = $("#intr").offset().top - 199;
        $("body,html").scrollTop(x);
    })
    $(".income-title").click(function () {
        var x = $("#income").offset().top - 199;
        $("body,html").scrollTop(x);
    })
    $(".arrange-title").click(function () {
        var x = $("#arrange").offset().top - 199;
        $("body,html").scrollTop(x);
    })
    $(".feedback-title").click(function () {
        var x = $("#feedback").offset().top - 199;
        $("body,html").scrollTop(x);
    })
    $(".problem-title").click(function () {
        var x = $("#problem").offset().top - 199;
        $("body,html").scrollTop(x);
    })
    $(".hypa").hover(function () {
        $(".hypa img").attr('src', 'http://www.myhuahuo.com/template/index/images/hover.png');
    }, function () {
        $(".hypa img").attr('src', 'http://www.myhuahuo.com/template/index/images/refresh.png');
    })
    if ($(window).width() < 1200 || $(window).height() < window.screen.height - 200 || $('.left-panel').height() < $('.right-list').height()) {
        $(".right-list").css({
            'position': 'static',
            'margin': '0',
        });
    }
    $(window).resize(function () {
        var w = $(window).width();
        var h = $(window).height();
        if (w < 1200 || $(window).height() < window.screen.height - 200 || $('.left-panel').height() < $('.right-list').height()) {
            $('.right-list').css({
                'position': 'static',
                'margin': '0',
            })
        } else {
            $('.right-list').css({
                'position': 'fixed',
                'left': '50%',
                'margin-left': '271px',
            });

        }
    });
});
$('.icon-menu').on('click', function () {
    $("#service").hide();
    if ($('.icon-menu').hasClass('active')) {
        $('.menu').removeClass('menu-mobile');
        $('.icon-menu').removeClass('active');
    } else {
        $('.menu').addClass('menu-mobile');
        $('.icon-menu').addClass('active');
    }
});
$(window).scroll(function () {
    if ($('.icon-menu').hasClass('active')) {
        $('.menu').removeClass('menu-mobile');
        $('.icon-menu').removeClass('active');
    }
    $("#service").hide();
});
$("#user").click(function (e) {
    e.preventDefault();
    if ($('.icon-menu').hasClass('active')) {
        $('.menu').removeClass('menu-mobile');
        $('.icon-menu').removeClass('active');
    }
    $("#service").show();
})
