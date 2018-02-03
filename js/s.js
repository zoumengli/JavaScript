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
        $(".provinceShow").slideDown(300);
    },
        function (){
            $(".provinceShow").slideUp(300);

        }
    );
});
//头部搜索框切换
$(function () {
    var $input=$("input[type='search']");
    var $val=$input.val();//取值
    $input.focus(function (){
        //alert("aaa");
        //获得焦点清空val
        $(this).val("");
    });
    $(".header-middle2>ul>li:first").click(function (){
        //背景颜色切换
        $(this).css({background:"#ff8201",color:"white"});
        $(".header-middle2>ul>li:last").css({background:"white",color:"#777777"});
        $input.val($val);

    });
    $(".header-middle2>ul>li:last").click(function (){
        //背景颜色切换
        $(this).css({background:"#ff8201",color:"white"});
        $(".header-middle2>ul>li:first").css({background:"white",color:"#777777"});
        $input.val("");
    });
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
    setInterval(show,2000);
    var btns=document.getElementsByClassName("btns");
    for(var j=0;j<btns.length;j++){
        btns[j].onclick= function () {
            index=this.rel;
            show();
        }
    }
};


//右边单选按钮选中变颜色
$(function () {
    $("input:checked").next().css("color"," #FF8201");
    $("input[type='radio']").click(function () {
        if( $(this)[0].checked==true){
           $(this).next().css("color"," #FF8201");
        }
    });
    //$("input:not(input[type='radio']:checked)").css("color"," #777777");

});

/*右边金额显示隐藏*/
 $(function () {
    $("input[name='money']").hover(function () {
            $(".moneyShow").slideDown(1000, function () {
                /*
                $(".moneyShow").hover(function () {
                        $(this).show();
                    },
                    function () {
                        $(this).hidden();
                    }
                );*/
            });
    },
        function () {
            $(".moneyShow").slideUp();
        }
    );

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
            alert("aa");
            $(".happyService").eq(a).animate({left: "0px"}, 0);
            $(".happyService").eq(a).siblings().animate({left: "-225px"}, 0);
            $(".happyService").eq(a).animate({left: '225px'}, 2000);
            $(".happyService").eq(a).siblings().animate({left: '0px'}, 2000);
            if (a == 1) {
                a = 0;
            }
            else {
                a++;
            }

        });

        $(".next").click(function () {
            alert("aa");
            $(".happyService").eq(a).animate({left: "0px"}, 0);
            $(".happyService").eq(a).siblings().animate({left: "225px"}, 0);
            $(".happyService").eq(a).animate({left: '-225px'}, 2000);
            $(".happyService").eq(a).siblings().animate({left: '0px'}, 2000);
            if (a == 1) {
                a = 0;
            }
            else {
                a++;
            }
        });
    }




});