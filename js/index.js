/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-12-14 21:05:48
 * @version $Id$
 */


$(function(){
     /*========= 案例 =============*/
     (function(){
        var $tab = $('.case .tab li');
        var $content = $('.case .content ul');
        var num = 1;
        $tab.click(function(){
            $tab.eq(num).removeClass('on');
            $content.eq(num).removeClass('on');
            num = $(this).index();
            $tab.eq(num).addClass('on');
            $content.eq(num).addClass('on');
        })
     })();

    /*========= 新闻动态 =============*/

    (function(){
        var num = 1;
        var $aNews = $('.news .content ul li');
        $('.news .content ul li').click(function(){
            $aNews.eq(num).removeClass('on');
            num = $(this).index();
            $aNews.eq(num).addClass('on');

        });
    })();

    /*=========== 设计日志 栏目页 =============*/

    (function(){
        var num = 1;
        var $aNews = $('.design .content ul li');
        $aNews.click(function(){
            $aNews.eq(num).removeClass('on');
            num = $(this).index();
            $aNews.eq(num).addClass('on');

        });
    })();




})

