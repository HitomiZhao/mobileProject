$(function () {
    var id;
    var name;

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrandtitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template("brandTitleTpl", info);
            $(".categoryList ul").html(htmlStr);

            $(".categoryList ul").on("click", "li", function () {
                id = $(this).data("id");
                name = $(this).data("name")
                location.href = 'brand.html?id=' + id + '&name=' + name + '';
                isScroll();
            })
        }
    })

})