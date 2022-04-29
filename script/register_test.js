$(".terms_detail").click(function(){
	var chk = $(this).is(":checked");
	if(chk) $(this).parent().parent().parent().closest("div").attr("heiht","200px");
});