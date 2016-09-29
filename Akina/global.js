/**
 * global js
 */
//show comments
$('.comments-hidden').click(function(){
		$('.comments-main').slideDown(500);
		$('.comments-hidden').hide();
	});
//gotop	

$(document).ready(function($){

	var offset = 100,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});	
//nav show/hidden
$(function(){
	var h1 = 0;
	var h2 = 50;
	var ss = $(document).scrollTop();
	$(window).scroll(function(){
		var s = $(document).scrollTop();
		if(s== h1){
			$('.site-header').removeClass('yya');
		}if(s > h1){
			$('.site-header').addClass('yya');
		}if(s > h2){
			$('.site-header').addClass('gizle');
			if(s > ss){
				$('.site-header').removeClass('sabit');
			}else{
				$('.site-header').addClass('sabit');
			}
			ss = s;
		}


	});
	
});

//show searchbox
$(function () {
      $('.js-toggle-search').on('click', function () {
          $('.js-toggle-search').toggleClass('is-active');
          $('.js-search').toggleClass('is-visible');
      });
}); 
//achives
$(document).ready(function($){
	$('.archives').hide();
	$('.archives:first').show();
	$('#archives-temp h3').click(function() {
		$(this).next().slideToggle('fast');
		return false;
	});
});
//pagenav-ajax
$("#pagination a").on("click", function(){
        $(this).addClass("loading").text("");
        $.ajax({
    type: "POST",
            url: $(this).attr("href") + "#main",
            success: function(data){
                result = $(data).find("#main .post");
                nextHref = $(data).find("#pagination a").attr("href");
                // 渐显新内容
                $("#main").append(result.fadeIn(300));
                $("#pagination a").removeClass("loading").text("加载更多");
                if ( nextHref != undefined ) {
                    $("#pagination a").attr("href", nextHref);
                } else {
                // 若没有链接，即为最后一页，则移除导航
                    $("#pagination").remove();
				
                }
            }
        });
        return false;
    });




