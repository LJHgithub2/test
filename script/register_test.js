$(".terms_bar_img").click(function(){
	$(".term_text").toggle();
	var src= $(this).attr('src') === '../image/arrow_bottom_down_icon.png' ? '../image/arrow_top_up_icon.png':'../image/arrow_bottom_down_icon.png';
	$(this).attr('src',src);
});