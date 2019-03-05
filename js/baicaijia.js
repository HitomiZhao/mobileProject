$(function () {

    var id = 0;
    render(id);
    // 导航栏
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var htmlStr = template("navTpl", info);
            $("#wrapper ul").html(htmlStr);

            var ul = $("#wrapper ul");
            var sum = 0;
            // 判断是不是第一个文本,如果是,加上下划线
            if (ul.find("li:first-child span").text() == "全部") {
                ul.find("li:first-child span").addClass("current");
            }
            ul.on("click", "li", function () {
                id = $(this).data("id");
                render(id);
                var width = $(this).width();
                sum += width;
                // console.log(sum);

                // 判断点击li时的span有没有current类,如果有,就移除,没有就添加
                if ($(this).find("span").hasClass("")) {
                    $(this).find("span").addClass("current");
                    $(this).siblings().find("span").removeClass("current");
                }
            })

            // ul.width("20.54rem");
            // // 动态计算每个li的宽度,设置给ul
            new IScroll('#wrapper', {
                scrollX: true
            })

        }
    })


    // 内容区域渲染列表
    function render(id) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data: {
                titleid: id
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                var htmlStr = template("listTpl", info);
                $(".mmm_productList ul").html(htmlStr);
            }
        })
    }
})
// // // 点击top按钮,返回顶部
// var top ;
// $(window).on("scroll", function () {
//     top = $(window).scrollTop();
//     console.log(top);
//     $(".mmm_top").on("click", function () {
//         top = 0;
//     })
// })