$(function () {
    var obj = {
        shopid: 0,
        areaid: 1
    };
    render(obj);

    // 店铺信息
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getgsshop',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var htmlStr = template("shopTpl", info);
            $(".popShop ul").html(htmlStr);
        }
    })


    // 区域渲染
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getgsshoparea',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var htmlStr = template("areaTpl", info);
            $(".popArea ul").html(htmlStr);
        }
    })


    // 点击每一个li的时候下拉菜单显示与隐藏

    var $lis = $(".filter li:not(:last-child)");
    var popbox = $(".popbox");
    $lis.each(function (i, e) {
        $(e).on("click", function () {

            $(popbox[i]).hasClass("none") ? $(popbox[i]).removeClass("none").addClass("block") : $(popbox[i]).removeClass("block").addClass("none");

        })
    })



    // 点击下拉菜单中的某一个,给商铺标题赋值
    var $span = $(".filter li:first-child span");
    $(".popShop").on("click", "li", function () {
        var txt = $(this).text();
        $span.text(txt);
        $(".popShop").hasClass("none") ? $(".popShop").removeClass("none").addClass("block") : $(".popShop").removeClass("block").addClass("none");

        var shopId = $(this).data("id");
        obj.shopid = shopId;
        console.log(obj);
        render(obj);

    })

    // 点击下拉菜单中的某一个,给商铺标题赋值
    var $spans = $(".filter li:nth-child(2) span");
    $(".popArea").on("click", "li", function () {
        var txt = $(this).text().slice(0, 2);
        $spans.text(txt);
        $(".popArea").hasClass("none") ? $(".popArea").removeClass("none").addClass("block") : $(".popArea").removeClass("block").addClass("none");

        var areaId = $(this).data("index");
        obj.areaid = areaId;
        console.log(obj);
        render(obj);

    })



    // 店铺商品列表
    function render(obj) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsproduct',
            data: obj,
            dataType: "json",
            success: function (info) {
                console.log(info);
                var htmlStr = template("productTpl", info);
                $(".mmm_productList ul").html(htmlStr);
            }
        })
    }


})