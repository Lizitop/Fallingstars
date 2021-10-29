


$(document).ready(function(){
    // 点击切换搜素引擎
    // bing.com
    $("span.bing").click(function(){
        $('.searchform').attr("action","https://cn.bing.com/search");
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

    $("span.Wtclik").click(function(){
        $('div.Wtdiv').addClass('Wtddivs');
    });

});