// (function(){
  $(".content>ul>li").click(function(){
    $(this).css({"background":"#4787be"}).children().css("color","#fff").parent().siblings().css({"background":""}).children().css("color","rgba(51,122,183,0.9)");
  })
  $(window).scroll(function(e){
    // console.log($(".content>ul").css("top"))
    // $(".content>ul").css("top")
    if($(window).scrollTop()>350){
      $(".content>ul").css({"position":"fixed","top":"50px"});
    }else{
      $(".content>ul").css({"position":"","top":""});
    }
    // console.log($(window).scrollTop())
  })
  $(".item>div>.pc>li").click(function(){
    switch($(this).index()){
      case 0:
            // location.href="http://localhost:8080/#/login";
            window.open("https://binyuailly.github.io/XiaoMi/dist/#/");
            break;
    }
    
  })
  // $("body,html").animate({scrollTop:$("#PC").offset().top},500)
// })