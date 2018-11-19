 $(document).ready(function () {

        var i = 0;

        var clone = $(".banner ul li").first().clone();//克隆第一张图片
        $(".banner ul").append(clone);                //复制到列表最后
        var size = $(".banner ul li").size();         //返回匹配元素的数量
        // console.log(size);

        /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
        for (var j = 0; j < size-1; j++) {
            $(".banner .num").append("<li></li>");
        }

        $(".banner .num li").first().addClass("on");

        /*自动轮播*/

        var t = setInterval(function () {
            i++;
            move();
            },2000);

        /*鼠标悬停事件*/

        $(".banner").hover(function () {
            clearInterval(t);//鼠标悬停时清除定时器
        }, function () {
            t = setInterval(function () {
                i++;
                move();
                }, 2000); //鼠标移出时开始定时器
        });




        /*鼠标滑入原点事件*/

        $(".banner .num li").hover(function () {

            var index = $(this).index();//获取当前索引值
            i = index;
            $(".banner .img").stop().animate({ left: -index * 1920 }, 500);
            $(this).addClass("on").siblings().removeClass("on");
        });



        /*向左按钮*/
        $(".banner .btn-left").click(function () {
            i--;
            move();
        })


        /*向右按钮*/
        $(".banner .btn-right").click(function () {
            i++;
            move();
        })

        /*移动事件*/
        function move() {
            if (i == size) {
                $(".banner ul").css({ left: 0 });
                i = 1;
            }
            if (i == -1) {
                $(".banner ul").css({ left: -(size - 1) * 100+"%" });
                i = size - 2;
            }
            $(".banner ul").stop().animate({ left: -i * 100+'%' }, 660);

            if (i == size - 1) {
                $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }
		
		$(".cotainer-box1-conter-box1-xu-bottom a").hover(function  () {
			$(".cotainer-box1-conter-box1-xu-bottom a").attr("class","")
			$(this).attr("class","cotainer-box1-conter-box1-xu-active")
			
			
		},function  () {
			$(".cotainer-box1-conter-box1-xubox").css("display","none")
			$(".cotainer-box1-conter-box1-xubox").eq($(this).index()).css("display","block")
		})
		
		$(".news-nav a").hover(function  () {
			$(".news-nav a").attr("class","")
			$(this).attr("class","cotainer-box1-conter-box1-xu-active")
			
			
		},function  () {
			$(".cotainer-box1-conter-box2-xubox").css("display","none")
			$(".cotainer-box1-conter-box2-xubox").eq($(this).index()).css("display","block")
		})
		
		// $(".notice-hide").animate({marginLeft:"-59461px"},50000,"linear")
		// console.log($(".notice-hide"))
		
		
		$(".newss-nav a").hover(function  () {
			$(".newss-nav a").attr("class","")
			$(this).attr("class","newss-nav-active")
			
			
		},function  () {
			$(".cotainer-box1-right-box2-xubox").css("display","none")
			$(".cotainer-box1-right-box2-xubox").eq($(this).index()).css("display","block")
		})
		
		$(".cotainer-box1-right-box3-ul li").hover(function  () {
			$(".cotainer-box1-right-box3-ul li").attr("class","")
			$(this).attr("class","cotainer-box1-conter-box1-xu-active")
			
			
		},function  () {
			$(".cotainer-box1-right-box3-xubox").css("display","none")
			$(".cotainer-box1-right-box3-xubox").eq($(this).index()).css("display","block")
		})
		
    });