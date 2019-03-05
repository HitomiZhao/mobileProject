$(function () {
    var productid = getSearch();
    console.log(productid);

    render(productid);

    function render(productid) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
            data: {
                productid: productid[1]
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template("detailTpl", info);
                $(".productDetail").html(htmlStr);
                // console.log(info.result[0].productComment);
                var comm = info.result[0].productComment;
                $(".mmm_comment").html(comm);
            }
        })

    }
})