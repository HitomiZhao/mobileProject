$(function () {
    var productid = getSearch();
    console.log(productid);

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid: productid[1]
        },
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            var htmlStr = template("detailTpl", info);
            $(".product").html(htmlStr);
            renderComment();
        }
    })

    function renderComment() {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getproductcom',
            data: {
                productid: productid[1]
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template("commentTpl", info);
                $(".mmm_comment ul").html(htmlStr);

            }
        })
    }

    var name = productid[0];
    $(".name").text(name);
})