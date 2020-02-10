console.log();

/*  페이지가 로드되었을때*/
$(function(){
    $(".feed_wrap.type1  .bt_more ").click(function(){
        $(this).parent().find("+ .detail").slideToggle();
    });
});

$(function(){
    $(".feed_wrap.type2  .bt_more ").click(function(){
        $(this).parent().parent().find("+ .detail").slideToggle();
    });
});










