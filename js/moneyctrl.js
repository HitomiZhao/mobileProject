$(function () {
    var pageid = 0;
    render();
    var size;

    function render() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getmoneyctrl',
            data: {
                pageid: pageid
            },
            dataType: "json",
            async: false, // 同步操作
            success: function (info) {
                console.log(info);
                var htmlStr = template("recommendTpl", info);
                $(".mmm_productList ul").html(htmlStr);

                size = Math.ceil(info.totalCount / info.pagesize);
            }
        })
        // console.log(size);
        return size;

    }

    for (var i = 1; i <= size; i++) {
        var options = $('<option value="' + i + '">' + i + '/' + size + '</option>');
        $("#selected").append(options);
    }


    // 点击上下箭头,切换页码,渲染页面
    $(".prev button").on("click", function () {
        pageid--;
        if (pageid < 0) {
            pageid = 0;
            return;
        }
        render();
        $('#selected').val(pageid + 1)
    })

    // 点击下一页箭头,切换页码,渲染页面
    $(".next button").on("click", function () {
        pageid++;
        if (pageid >= size) {
            pageid = size - 1;
            return;
        }
        render();
        $('#selected').val(pageid + 1)
    })

    // 点击select中的option,切换页面
    var changeOpt = $("#selected option");

    $("#selected").change(function () {
        console.dir(this)
        pageid = this.value - 1;
        render();
    })
})