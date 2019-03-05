$(function () {
    var productid = getSearch();
    console.log(productid);
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getdiscountproduct',
        data: {
            productid: productid[1]
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template("inlandTpl", info);
            $(".productDetail").html(htmlStr);
            var comm = info.result[0].productComment;
            $(".mmm_comment").html(comm);
        }
    })
})