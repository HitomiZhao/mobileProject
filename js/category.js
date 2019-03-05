// 发送ajax,获取每个li的标题,渲染页面
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    dataType: 'json',
    success: function (info) {
        // console.log(info);

        var htmlStr = template("firstTpl", info);
        $(".content").html(htmlStr);


        var $ol = $(".first ul li").parent().siblings();
        for (var i = 0; i < info.result.length; i++) {
            render(info.result[i].titleId, $($ol[i]));
        }

    }
})

function render(titleid, ol) {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategory',
        data: {
            titleid: titleid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template("secondTpl", info);
            ol.html(htmlStr);

        }
    })
}

// 点击控制二级分类与隐藏
var $content = $(".content");
// console.log($content);
$content.on("click", ".arrow", function () {
    var ol = $(this).parent().parent().parent().siblings();
    if (ol.hasClass("none")) {
        ol.toggleClass("block");
    }
})


