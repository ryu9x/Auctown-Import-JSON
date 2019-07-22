var fetchJSONData = new Object();

$(document).ready(function() {
	init();
	loadSummernote();
});

function init() {
	$("#lisShippingForm").html($("#ship_name")[0].outerHTML);
}

function updateJSONData(){
	try {
		fetchJSONData = JSON.parse($("#json-data-text").val());
		fetchData();
	}
	catch(err) {
	  fetchJSONData = new Object();
	}
	console.log(fetchJSONData);
}

function fetchData(){

	//Tieu de
	$("#txtTitle").val(fetchJSONData.titleModule.subject);
	$("#title").val(fetchJSONData.titleModule.subject);

	//tinh trang san pham
	$("input[type='radio'][name='status']").val([$("input[name='goodsStatusRadio']:checked").val().toString()]);

	//Mo ta
	$.get(fetchJSONData.descriptionModule.descriptionUrl,function(responseHTML){
	$("#easyWebEditor_description_copy_iframe").contents().find("body").html(responseHTML);
	});

	//anh
	for (var i = 1; i <=10 ; i++) {
		$("#registImage"+i).attr("src",fetchJSONData.imageModule.imagePathList[i]);
		$("#image"+i).val(fetchJSONData.imageModule.imagePathList[i]);
	}

	//auction type
	$("#auctionPrice").click();

	//price
	$("#start_price").val(fetchJSONData.priceModule.maxAmount.value * 2);

	//so luong
	$("#quantity").val(1);

	//Thoi han dang
	$("#duration").val([3]);//3 ngay

	//gio ket thuc
	$("#closing_time").val([20]);//8-9h toi

	//Khong hoan tra 
	$("input[name='retpolicy'][value='no']").click();
	

	$("#min_bid_rating").attr("checked",true)
	$("#bad_rating_ratio").attr("checked",true)
	$("#bid_credit_limit").attr("checked",true)
	$("#auto_extension").attr("checked",true)
	$("#close_early").attr("checked",true)

	//So lan tu dong dang lai
	$("#num_resubmit").val([3]);
	//giam gia khi dang lai
	$("#change_price_ratio_resubmit").val([0]);//khong giam gia

	$("#ship_name").val($("#lisShippingForm>#ship_name").val());
	$("#ship_name").change();
}  

alert("B");