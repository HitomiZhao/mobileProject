$(function () {
    var id;
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcoupon',
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("couponTpl", info);
            $(".mmm_productList ul").html(htmlStr);

            $(".mmm_productList ul").on("click", "li", function () {
                id = $(this).data("id");
                location.href = "couponProduct.html?id=" + id;
            })
        }
    })
})