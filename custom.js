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
		var customDesc = "";
		customDesc += $("#summernote_desc").val($('#summernote_temp_desc').val().replace("#desc-body",responseHTML));
		customDesc += $('#summernote_temp_shipping').val();
		customDesc += $('#summernote_temp_payment').val();
		customDesc += $('#summernote_temp_note').val();

		$("#easyWebEditor_description_copy_iframe").contents().find("body").html(customDesc);
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

function loadSummernote(){

 $('#summernote_temp_desc').val('<table width="100%" cellspacing="0" cellpadding="10" border="0"><tbody><tr><th><div id="desc-heading"></div></th></tr><tr><td bgcolor="#60992e"><strong> <span style="COLOR: #FFFFFF;">出品物</span> </strong></td></tr><tr><td><div id="desc-note"></div></td></tr><tr><td><div id="desc-body"></div></td></tr></tbody></table>');
 $('#summernote_temp_shipping').val('<table width="100%" cellspacing="0" cellpadding="10" border="0"><tbody><tr><td bgcolor="#75a749"><strong><span style="COLOR: RGB(255,255,255);">発送</span></strong></td></tr><tr><td><p><span style="COLOR: #FF0000;">入金を確認してから １５～３０日で発送。</span></p><p><font face="Helvetica" color="#333333">※同梱を希望される場合</font></p><p><span style="COLOR: RGB(51,51,51);"><font face="Helvetica">同梱は可能ですが、送料は１点ずつの記載送料のお支払いをお願い致します。</font></span></p><p><span style="COLOR: RGB(51,51,51);">例：２点落札の場合&nbsp;</span><span style="COLOR: RGB(51,51,51);">&nbsp;</span></p><p><font face="Helvetica"><font color="#333333">１点目　</font><span style="COLOR: RGB(51,51,51);">落札金額＋送料　＝　A</span></font></p><p><font face="Helvetica" color="#333333">２点目　落札金額＋送料　＝　B</font></p><p><font face="Helvetica"><span style="COLOR: RGB(51,51,51);">&nbsp;</span><span style="COLOR: RGB(51,51,51);">&nbsp;A＋B　＝　お支払い金額</span></font></p><p><font face="Helvetica"><span style="COLOR: RGB(51,51,51);">※送料のご相談や交渉は、受け付けていませんのでご了承ください。&nbsp;</span><span style="COLOR: RGB(51,51,51);">&nbsp;</span></font></p></td></tr></tbody></table>');
 $('#summernote_temp_payment').val('<table width="100%" cellspacing="0" cellpadding="10" border="0"><tbody><tr><td bgcolor="#75a749"><strong><span style="COLOR: RGB(255,255,255);">支払方法</span></strong><br></td></tr><tr><td><ol><li>●　Yahoo!かんたん</li><li><span>●　</span>Yahoo!マネー/預金払い</li><li><span>●　</span>クレジットカード</li><li><span>●　</span>インターネットバンキング</li><li><span>●　</span>コンビニ支払い</li></ol><p><span style="COLOR: RGB(255,0,0);">　※直接の銀行振込は受け付けておりません。落札後はすべて、かんたん決済（銀行振込は不可、銀行振込以外の支払い方法を選択してください。）にてお支払いをお願いします。</span></p></td></tr></tbody></table>');
 $('#summernote_temp_note').val('<table width="100%" cellspacing="0" cellpadding="10" border="0"><tbody><tr><td bgcolor="#75a749"><strong> <span style="COLOR: #FFFFFF;">備考</span> </strong></td></tr><tr><td><div><font size="3"><br></font></div><ol><li><font size="3">●　ご入金は落札後の3日以内にお願い致します。</font></li><li><font size="3">●　振込手数料は落札者様がご負担ください。</font></li><li><font size="3">●　落札後の返品、交換はお受けできません。</font></li><li><font size="3">●　故意による破損の返品、交換もお受けできません。</font></li><li><font size="3">●　商品を受け取る前に商品が紛失、受領されていない場合（40日以内にご連絡ください。ご連絡を受けた日から１週間以内にご返金致します</font>。）</li><li><font size="3">●　故意によるものではない破損の場合（3日以内にご連絡くだささい。ご返金または交換致します。）</font></li><li><font size="3">●　お使いのモニターによっては、実物との色合いが異なる場合がございます。ご了承ください。</font></li></ol></td></tr></tbody></table>');


 // $("#summernote_desc").summernote();
}
