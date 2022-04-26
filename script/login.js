var oldVal="";
$("#phone").on("propertychange change keyup paste input", function(){
	var currentVal = $(this).val();
	var temp="";
	if(currentVal.length>0){
		$("#label_span").attr("class",'label_span_filled');
	}
	if(currentVal.length==0){
		$("#label_span").attr("class",'label_span');
	}
	if(currentVal == oldVal){
		return;
	}	
	oldVal = currentVal;
	if(currentVal.length==3 || currentVal.length==8){
		temp=currentVal+"-";
		$(this).val(temp);
	}
	
});