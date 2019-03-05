var scrollTop;
$(window).on("scroll", function () {
    scrollTop = $(window).scrollTop();
    $(".backTop").on("click", function () {
        scrollTop = 0;
    })
})

function getSearch() {
    // 获取地址栏参数
    var str = location.search; // 如果有中文, 是需要解码的

    // 进行中文解码
    str = decodeURI(str); // ?key=匡威&name=pp&age=18

    // 去掉问号
    // str.slice(start, end);  // 包括start, 不包括end
    // str.slice(start);  // 表示从 start 开始截取到最后
    str = str.slice(1); // key=匡威&name=pp&age=18

    var arr = str.split('&'); // ["key=匡威", "name=pp", "age=18"]

    var obj = {};

    arr.forEach(function (v, i) { // v => age=18
        var key = v.split('=')[0]; // age
        var value = v.split('=')[1]; // 18
        // 将属性添加到 obj 中
        obj[key] = value;
    })

    var arr = [];
    for (var key in obj) {
        arr.push(key, obj[key]);
        // console.log(arr);
    }

    return arr;
}

function isScroll() {
    $('.container').height();
    new IScroll('.container', {
        scrollX: false,
        scrollY: true
    })
}