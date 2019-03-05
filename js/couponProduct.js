$(function () {
    var couponid = getSearch();

    // console.log(couponid);

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcouponproduct',
        data: {
            couponid: couponid[1]
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template("couProTpl", info);
            $(".mmm_productList ul").html(htmlStr);
        }
    })


    // 点击每一个li弹出模态框
    $(".mmm_productList ul").on("click", "li", function () {
        $("#myModal").modal("show");
        // 获取图片的src,赋值给模态框中的img
        // var img = $(this).find("img");
        // var src = img.attr('src');
        var imgsLength = $(".mmm_productList img").length;
        for (var i = 0; i < imgsLength; i++) {
            var htmlStr = $('<div class="swiper-slide"> <img src = ""alt = "" ></div>');
            $(".swiper-wrapper").append(htmlStr);
        }

        var lis = $(".mmm_productList ul").find("li");
        // // 获取所有的图片
        for (var i = 0; i < lis.length; i++) {

            // console.log($(lis[i]).data("img"));
            var imgs = $(lis[i]).data("img");
            console.log(imgs);
            $("#myModal .modal-body").append(imgs);
        }


        // // 获取模态框的img
        // var modalImg = $("#myModal img");
        // modalImg.each(function (i, e) {
        //     $(e).attr("src", src);
        // })



        // var mySwiper = new Swiper('.swiper-container', {
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
        //     autoplay: true,
        // });



    })
})