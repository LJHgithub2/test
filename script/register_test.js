
$(".terms_bar_img").click(function(){
	$(".term_text").toggle();
	var src= $(this).attr('src') === '../image/arrow_bottom_down_icon.png' ? '../image/arrow_top_up_icon.png':'../image/arrow_bottom_down_icon.png';
	$(this).attr('src',src);
});

function validation(){
	console.log("값들:",$("#name").val(),$("#pwd").val(),$("#pwd").val(),$("#phone").val(),$("#terms").is(':checked'));
	if(checkPhoneNum($("#phone").val())){	
		return
	}
	if(!$("#name").val()){
		alert("이름을입력해주세요");
		return;
	}
	if(checkpwd($("#pwd").val())){
		return;
	}
	if($("#pwd").val()!=$("#pwd_cfm").val()){
		alert("비밀번호가 다릅니다");
		return;
	}
	if($("#pwd").val()!=$("#pwd_cfm").val()){
		alert("비밀번호가 다릅니다");
		return;
	}
	if(!$("#terms").is(':checked')){
		alert("이용약관에 동의해주십시요.");
		return;
	}
	alert("회원가입 성공");
	$("#form1").submit();
}

function checkPhoneNum(phone){
	//if(!checkExistData(phone)) return false;
	if(phone=="") {
		alert("전화번호를 입력해주세요");
		return true;
	};
	var phoneRegExp=/^[0-9]{11}$/;
	if(!phoneRegExp.test(phone)){
		alert("전화번호는 '-'없이 11자리숫자여야합니다")
		return true;
	}
	return false;
}
function checkpwd(pwd){
	if(pwd=="") {
		alert("비밀번호를 입력해주세요");
		return true;
	};
	var pwdRegExp=/^[a-z]{7}$/;
	if(!pwdRegExp.test(pwd)){
		alert("비밀번호는 소문자 7자리숫자입니다");
		return true;
	}
	return false;
}
