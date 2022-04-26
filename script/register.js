var serverip="http://118.67.128.124:8080";
$("html").ready(function(){
	set_terms();
	/*$.ajax({
		async: true,
		type : 'GET',
		url : serverip+"/v1/user/terms",
		dataType : "json",
		success:function(data){
			set_terms(data);
		}
	});*/
});
$("#phone").change(function(){
	checkAll();
	/*if(checkPhoneNum($("#phone").val())){
		$.ajax({
			async: true,
			type : 'POST',
			url : serverip+"/v1/user",
			data:  {"phone":$(this).val()},
			dataType : "json",
			success:function(data){
				$("#check_text").text("사용가능한 번호입니다");
			},
			error : function(error){
				$("#check_text").text("중복된 번호입니다");
			}
		});
	}*/
});
$("#birth").change(function(){
	checkAll();
});
$("#name").change(function(){
	checkAll();
});
$("#terms_checkbox").change(function(){
	checkAll();
});
$("#content").scroll(function(){
	var scrT = $("#content").scrollTop();
	if($("#content")[0].scrollHeight-$("#content").height()<=scrT){
		$("#terms_checkbox").attr("disabled",false);
	};
});
function set_terms(){
	var terms ={"title":"'애도' 개인정보 고유식별번호 등의 이용약관","sub_title":"'애도'부고 작성 및 화환 구매(이하 통칭하여 '서비스'라 함)를 제공하기 위하여 아래와 같이 이용자의 고유식별정보를 수집, 이용하고 있습니다.","first":"1. 개인정보를 제공받는 자 : 통신사(에스케이텔레콤㈜, ㈜케이티, LG유플러스 등), PG사(㈜다날, ㈜케이에스넷)","second":"2. 개인정보를 제공받는 자의 개인정보 이용 목적 : 연계정보(CI)/중복가입확인정보(DI) 생성 및 제공","third":"3. 제공하는 개인정보 항목: 주민등록번호, 외국인등록번호, 휴대폰번호","fourth":"4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 연계정보(CI)/중복가입확인정보(DI) 생성 후 즉시 폐기","fifth":"5.본인은 동의를 거부할 권리가 있으며, 동의하지 않으실 경우 서비스를 이용하실 수 없습니다."}
	var index=0;
	for(x in terms){
		if(index==0) {
			$("#title h3").append(terms[x]);
		}
		if(index==1) $("#subtitle").text(terms[x]);
		if(index>1){
			$("#content").append(terms[x]);
			$("#content").append("<br>");
		}
		index++;
	}

}
function checkAll(){
	if(checkPhoneNum($("#phone").val())){
		if(!$("#birth").val()){
			$("#submit").attr("disabled",true);
			return;
		}
		if(!$("#name").val()){
			$("#submit").attr("disabled",true);
			return;
		}
		console.log(($("#terms_checkbox").is(":checked")==true));
		if(!($("#terms_checkbox").is(":checked")==true)){
			$("#submit").attr("disabled",true);
			return;
		}
		$("#submit").attr("disabled",false);
		return;
	}
	$("#submit").attr("disabled",true);
	return;
}

function checkPhoneNum(phone){
	//if(!checkExistData(phone)) return false;
	if(phone=="") return false;
	var phoneRegExp=/^[0-9]{11}$/;
	if(!phoneRegExp.test(phone)){
		$("#check_text").text("전화번호는 11개의 숫자로 입력해야합니다");
		return false;
	}
	return true;
}
