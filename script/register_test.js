
$(".terms_bar_img").click(function(){
	$(".term_text").toggle();
	var src= $(this).attr('src') === '../image/arrow_bottom_down_icon.png' ? '../image/arrow_top_up_icon.png':'../image/arrow_bottom_down_icon.png';
	$(this).attr('src',src);
});
$("#name").change(function(){
	validation();
});
$("#phone").change(function(){
	validation();
});
$("#pwd").change(function(){
	validation();
});
$("#pwd_cfm").change(function(){
	validation();
});
$("#terms").change(function(){
	validation();
});
function validation(){
	clear_span_text();
	if(!$("#name").val()){
		$("#input_name span").text("이름을입력해주세요");
		$("#name").focus();
		$("#submit_btn").attr("disabled",true);
		return;
	}
	if(checkPhoneNum($("#phone").val())){	
		$("#input_phone span").text("전화번호는 '-'없이 11자리숫자여야합니다");
		$("#phone").focus();
		$("#submit_btn").attr("disabled",true);
		return
	}
	if(checkpwd($("#pwd").val())){
		$("#input_pwd span").text("비밀번호는 7자리 이상으로 설정해주세요");
		$("#pwd").focus();
		$("#submit_btn").attr("disabled",true);
		return;
	}
	if($("#pwd").val()!=$("#pwd_cfm").val()){
		$("#input_pwd span").text("비밀번호가 다릅니다");
		$("#pwd_cfm").focus();
		$("#submit_btn").attr("disabled",true);
		return;
	}
	$("#input_pwd span").text("");
	if(!$("#terms").is(':checked')){
		$("#submit_btn").attr("disabled",true);
		return;
	}
	$("#submit_btn").attr("disabled",false);
}
function clear_span_text(){
	$("#input_name span").text("");
	$("#input_phone span").text("");
	$("#input_pwd span").text("");
}
function checkPhoneNum(phone){
	//if(!checkExistData(phone)) return false;
	if(phone=="") {
		console.log("전화번호를 입력해주세요");
		return true;
	};
	var phoneRegExp=/^[0-9]{11}$/;
	if(!phoneRegExp.test(phone)){
		console.log("전화번호는 '-'없이 11자리숫자여야합니다")
		return true;
	}
	return false;
}
function checkpwd(pwd){
	if(pwd=="") {
		console.log("비밀번호를 입력해주세요");
		return true;
	};
	var pwdRegExp=/^[a-zA-Z0-9]{7,15}$/;
	if(!pwdRegExp.test(pwd)){
		console.log("비밀번호는 7자리 이상으로 설정해주세요");
		return true;
	}
	return false;
}
