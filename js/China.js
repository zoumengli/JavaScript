/**
 * Created by Administrator on 2016/8/10.
 */
//头部显示隐藏
$(function () {
    $(".navdisp").bind({
        mouseover: function () {
            $(this).children().children(".navShow").show();
        },
        mouseout: function () {
            $(this).children().children(".navShow").hide();
        }
    });
});
//头部窗帘
$(function () {
    $(".header-curtain").slideDown(2000);
    $(".header-curtain>img").click(function () {
        $(".header-curtain").slideUp(2000);
    });
});
//头部省份显示隐藏
$(function () {
    $(".provinceDisp").hover(function () {
        $(".provinceShow").show();
    },
        function (){
            $(".provinceShow").hide();

        }
    );
});
//头部搜索框切换
$(function () {
    var $input=$("input[type='search']");
    var $val=$input.val();//取值
    $input.focus(function (){
        $(this).val(""); //获得焦点清空val
    });
    $(".header-middle2>ul>li:first").click(function (){
        $(this).css({background:"#ff8201",color:"white"});
        $(".header-middle2>ul>li:last").css({background:"white",color:"#777777"});
        $input.val($val);
    });
    $(".header-middle2>ul>li:last").click(function (){
        $(this).css({background:"#ff8201",color:"white"});
        $(".header-middle2>ul>li:first").css({background:"white",color:"#777777"});
        $input.val("");
    });
});

//头部自动切换功能
$(function () {
    var show= function () {
        $(".topscorll").animate({marginTop:"-40px"},1000, function () {
            $(this).css("marginTop","0px").find("p:first").appendTo(this);
        })
    };
    setInterval(show,8000);
});

//banner左边产品显示隐藏
$(function () {
    $(".productDisp").hover(function () {
            $(this).children(".productShow").show();
            //背景图片改变
            //var y=$(this).prev().css("background-position-y");
            //$(this).prev().css("background-position-y","-56px");
        },
        function (){
            $(this).children(".productShow").hide();
        }
    );
});

//图片轮播
window.onload= function () {
    var index=1;
    var show=function(){
        var imgs=document.getElementsByClassName("imgs");
        for(var i=0;i<imgs.length;i++) {
            if(i==index){
                imgs[i].style.display="block";
            }
            else{
                imgs[i].style.display="none";
            }
        }
        if(index==(imgs.length-1)){
            index=0;
        }
        else{
            index++;
        }
    };
    var time=setInterval(show,2000);
    var btns=document.getElementsByClassName("btns");
    for(var j=0;j<btns.length;j++){
        btns[j].onclick= function () {
            clearInterval(time);
            index=this.rel;
            show();
            time=setInterval(show,2000);
        }
    }
};


//右边单选按钮选中变颜色
$(function () {
    $("input[type='radio']:checked").next().css("color"," #FF8201");
    $("input[type='radio']").click(function () {
        $(this).next().css("color"," #FF8201");
        $(this).parent().siblings().children("label").css("color"," #777777");
    });
});

/*右边金额显示隐藏*/
$(function () {
    $(".moneyDisp").hover(function () {
        $(".moneyShow").stop();
        $(".moneyShow").slideDown(300);
    },
        function () {
            $(".moneyShow").stop();
            $(".moneyShow").slideUp(300);
        }
    );
    //点击金额赋值文本框
    $(".moneyShow>li").click(function () {
        var $value=$(this).val();
        $("#money").val($value);
        $(".moneyShow").slideUp(300);
    });
});

//右边选项卡切换
$(function () {
    //欢享服务|超值购
    $(".bannerFiXRight1-menu>li:first-child").mouseover(function () {
        $(this).css({color:"#ff8201",backgroundPosition:" -216px -217px"});
        $(this).siblings().css({color:"#777777",backgroundPosition:" -216px -288px"});
        $(".happyBox").show();
        $(".shoppingBox").hide();//另外一个个隐藏
    });
    $(".bannerFiXRight1-menu>li:last-child").mouseover(function () {
        $(this).css({color:"#ff8201",backgroundPosition:" -217px -324px"});
        $(this).siblings().css({color:"#777777",backgroundPosition:" -216px -253px"});
        $(".shoppingBox").show();
        $(".happyBox").hide();
    });
    //左右按钮点击
    var a=0;
    if($(".happyBox").css("display")=="block") {
        $(".prev").click(function () {
            $(".happyService").eq(a).animate({left: "0px"}, 0);
            $(".happyService").eq(a).siblings().animate({left: "-225px"}, 0);
            $(".happyService").eq(a).animate({left: '225px'}, 200);
            $(".happyService").eq(a).siblings().animate({left: '0px'}, 200);
            if (a == 1) {
                a = 0;
            }
            else {
                a++;
            }
        });
        $(".next").click(function () {
            $(".happyService").eq(a).animate({left: "0px"}, 0);
            $(".happyService").eq(a).siblings().animate({left: "225px"}, 0);
            $(".happyService").eq(a).animate({left: '-225px'}, 200);
            $(".happyService").eq(a).siblings().animate({left: '0px'}, 200);
            if (a == 1) {
                a = 0;
            }
            else {
                a++;
            }
        });

        var i=0
        $(".prev").click(function () {
            if ($(".happyBox").css("display") == "none") {
                $(".shopping").eq(i).animate({left: "0px"}, 0);
                $(".shopping").eq(i).siblings().animate({left: "-225px"}, 0);
                $(".shopping").eq(i).animate({left: '225px'}, 200);
                $(".shopping").eq(i).siblings().animate({left: '0px'}, 200);
                if (i == 1) {
                    i = 0;
                }
                else {
                    i++;
                }
            }


        });
        $(".next").click(function () {
            if ($(".happyBox").css("display") == "none") {
                $(".shopping").eq(i).animate({left: "0px"}, 0);
                $(".shopping").eq(i).siblings().animate({left: "225px"}, 0);
                $(".shopping").eq(i).animate({left: '-225px'}, 200);
                $(".shopping").eq(i).siblings().animate({left: '0px'}, 200);
                if (i == 1) {
                    i = 0;
                }
                else {
                    i++;
                }
            }
        });
    }
});

//腰带点击按钮
 $(function (){
    $(".leftBtn").click(function () {
        clearInterval(time);
        $(".slide").find("li:last").prependTo('.slide');//最后一个前置加到前面
        $(".slide").find("li:first").css("marginLeft","-1010px");
        $(".slide").find("li:first").animate({marginLeft:"0"},200);
        time=setInterval(slide,8000);

    });

    $(".rightBtn").click(function () {
        clearInterval(time);
            $(".slide").animate({marginLeft:"-1010px"},200, function () {
                $(this).find("li:eq(0)").appendTo(this);
                $(this).css("marginLeft","0");
            });
        time=setInterval(slide,8000);
    });
     //八秒自动滑动一次
    var slide= function () {
        $(".slide").animate({marginLeft:"-1010px"},1000, function () {
            $(this).find("li:eq(0)").appendTo(this);
            $(this).css("marginLeft","0");
        });
    };
    var time=setInterval(slide,8000);
});

//底部选项卡切换
$(function () {
    $(".bottomMenu>li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");//切换变样式，其他不变
        var index=$(this).index();//获取被按下按钮的索引值，从0开始
        $(".tab-box").children().eq(index).show().siblings().hide();
    });
});