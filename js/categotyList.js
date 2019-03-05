$(function () {
    var pageid = 1;
    var arr = getSearch();

    var size = 0;
    render();

    function render() {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid: arr[1],
                pageid: pageid
            },
            async: false,
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                var htmlStr = template("recommendTpl", info);
                $(".mmm_productList ul").html(htmlStr);

                // 算出总共可以分几页
                size = Math.ceil(info.totalCount / info.pagesize);

            }
        })
        return size;
    }

    // 根据size的值,动态的创建option
    for (var i = 1; i <= size; i++) {
        var options = $('<option value="' + i + '">' + i + '/' + size + '</option>');
        $("#selected").append(options);
    }

    // 点击上一页时,切换到上一页
    $(".prev button").on("click", function () {
        pageid--;
        if (pageid <= 0) {
            pageid = 1;
            return;
        }
        render();
        $("#selected").val(pageid);
    })


    // 点击下一页的时候切换到下一页
    $(".next button").on("click", function () {
        pageid++;
        // console.log(pageid, size);
        if (pageid > size) {
            pageid = size;
            return;
        }
        render();
        $("#selected").val(pageid);
    })

    // 当点击option的项时,切换到下一页
    $("#selected").on("change", function () {
        // console.dir(this);
        pageid = this.value;
        render();
    })


    var name = arr[0];
    $(".productName").text(name);

})