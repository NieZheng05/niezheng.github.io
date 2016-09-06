$("#main").children("div").eq(0).siblings().hide();
// 白云移动
Movingyun($("#moving-yun"))
function Movingyun($node){
    setInterval(function(){
        $node.animate({right: '100%'},50000,function(){
            $node.css({right: '-18%'});
        })
    },2000)
}
//tab页面切换,背景和实体内容分开
function tab(){
    this.$fixTab = $("#fix-tab")
    this.$fixTabLi = this.$fixTab.find("li");
    this.$main = $("#main");
    this.$mainDiv = this.$main.children("div");
    this.$mainBg = $("#bg").children("div");
    // this.$mainDiv.eq(0).siblings().hide();
    this.bind();
}
tab.prototype = {
    bind: function(){
        var me = this,
            idx = 0,
            isPlaying = false;
        console.log(this.$mainDiv[1]);
        $("#window-height").height($(window).height())
        this.$fixTab.on("click","li",function(){
            idx = me.$fixTabLi.index($(this));
            $(this).css({background: "grey"});
            showNextOrPre(idx);
        })
        // $(window).on("resize",function(){
        //     $("#window-height").height($(window).height())
        //     console.log($("#window-height").height())
        // })
        $(window).on("mousewheel",function(event,delta,deltaX,deltaY){
            next(delta);
        })
        function next(delta){
            if(isPlaying){
                return;
            }
            isPlaying = true;
            if(delta>0){
                idx -= 1;
            }if(delta<0){
                idx += 1;
            }if(idx == 5){
                idx = 0;
            }if(idx == -1){
                idx = 4;
            }
            showNextOrPre(idx);
            setTimeout(function(){
                isPlaying = false;
            },1500)
        }
        function showNextOrPre(idx){
            // this.$mainBg.animate();
            me.$fixTabLi.eq(idx).css({background: "grey"});
            me.$fixTabLi.eq(idx).siblings().css({background: "white"});
            me.$mainDiv.siblings().fadeOut();
            me.$mainDiv.eq(idx).fadeIn();
            me.$mainBg.siblings().fadeOut();
            me.$mainBg.eq(4-idx).fadeIn();
        }
    }
}
var t = new tab();

//skill页面的tab,稍微封装了一下
function tab2($father,$nav,$card){
    this.$father = $father;
    this.$nav = $nav;
    this.$card = $card;
    this.$navLi = $nav.children("li");
    this.bind();
}
tab2.prototype = {
    bind: function(){
        var me = this;
        this.$nav.on("click","li",function(){
            var idx = me.$navLi.index($(this));
            $(this).siblings("li").removeClass("active")
            $(this).addClass("active");
            me.$card.eq(idx).siblings(".card").removeClass("active")
            me.$card.eq(idx).addClass("active")
        })
    }
}
var t2 = new tab2($("#main2"),$(".nav"),$(".card"));


// 页面二的小圆框个人信息
function Im($node){
    this.$main1 = $("#main1");
    this.$main1Li = $("#main1").find("li");
    this.bind();
}
Im.prototype = {
    bind: function(){
        this.$main1Li.on("mouseover",function(){
            console.log(this)
            $(this).children("div").show();
        })
        this.$main1Li.on("mouseleave",function(){
            console.log(this)
            $(this).children("div").hide();
        })
    }
}
var im = new Im();

// fix-header
function Resume(){
    this.header = $("#fix-header")
    this.resume = $("#fix-header").find("p").eq(1);
    this.bind();
}
Resume.prototype = {
    bind: function(){
        var me = this;
        this.header.on("mouseover",function(){
            me.resume.text("个人简历")
        })
        this.header.on("mouseleave",function(){
            me.resume.text("前端开发")
        })
    }
}
var resume = new Resume()