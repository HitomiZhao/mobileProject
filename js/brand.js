$(function () {
    var str = location.search;
    var arr = str.split("=");
    var brandtitleid = parseInt(arr[1]);
    var productid = 0;
    comRender(productid);


    // 给brand每个标题赋值
    var name = getSearch();
    $(".mmm_brandTop .title").text(name[3]);
    $(".mmm_sale .title").text(name[3]);
    $(".mmm_saleCom .title").text(name[3]);

    // 十大排行榜
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrand',
        data: {
            brandtitleid: brandtitleid,
        },
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var htmlStr = template("brandTpl", info);
            $(".categoryList ul").html(htmlStr);
            isScroll();

        }
    })

    // 十大排行展示的具体详情

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrandproductlist',
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template("saleTpl", info);
            $(".mmm_saleNum ul").html(htmlStr);
            $(".mmm_saleNum ul").on("click", "li", function () {
                productid = $(this).data("id");
                console.log(productid);
                comRender(productid);
            })
        }
    })

    // 评论的详情

    function comRender(productid) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getproductcom',
            data: {
                productid: productid
            },
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                var htmlStr = template("commentTpl", info);
                $(".mmm_comment ul").html(htmlStr);
            }
        })
    }
})