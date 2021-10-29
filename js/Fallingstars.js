


$(document).ready(function(){
    // 点击切换搜素引擎
    // bing.com
    $("span.bing").click(function(){
        $('.searchform').attr("action","http://cn.bing.com/search?q=%s");
        $('span.bing').addClass('baco');
    });
    //baidu.com
    $("span.baidu").click(function(){
        $('.searchform').attr("action","https://www.baidu.com/s");
        $('span.baidu').addClass('baco');
    });
    // Google.com
    $("span.google").click(function(){
        $('.searchform').attr("action","https://www.google.com/search");
        $('span.google').addClass('baco');
    });
});
