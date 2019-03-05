$(function () {
    // 导航栏nav渲染
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template("navTpl", info);
            $(".mmm_nav ul ").html(htmlStr);
        }
    })



    // 折扣列表渲染
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var htmlStr = template("recommendTpl", info);
            $(".mmm_productList ul").html(htmlStr);
        }
    })


    // 点击nav中的更多按钮,隐藏的盒子显示
    $('.mmm_nav').on("click", 'li[data-index="7"]', function () {

        if ($(".mmm_nav li").hasClass("none")) {
            $(".mmm_nav li.none").toggleClass("block");
        }

    })
})