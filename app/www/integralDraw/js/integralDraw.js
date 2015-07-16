var IntegralDraw = {
	scroll : null,
	storage : window.localStorage,
	userId: "1",
	buildingId: "",
	roomId: "",
	projectId: "",
	showMask : function(theme, msg) {
		$.mobile.showPageLoadingMsg(theme,msg);
		$(".mask_div").css("display", "block");
	},
	hideMask : function(theme, msg) {
		$.mobile.hidePageLoadingMsg(theme,msg);
		$(".mask_div").css("display", "none");
	},
	bindEvent : function() {
		$("#choose_house").bind("click",function(){
			if($("#house_list").css("display") == "none"){
				$("#house_list").show();
			}else{
				$("#house_list").hide();
			}
		});
		$("#link_submit").bind("click", function() {
			window.location.href = "submitPage.html?serviceType=advisory";
		});
	},
	init : function() {
		/*
		var str = $("#upside_div").html();
		alert(str);
		var strpart = String(str).substring(3,8);
		alert(strpart);
		str = str.replace(strpart,"*****");
		alert(str);
		$("#upside_div").html(str);
		*/
		IntegralDraw.getTotalPoints();
		IntegralDraw.getWinnerList();
		IntegralDraw.getMyRecord();
		
	},
	
	getTotalPoints : function() { 
		IntegralDraw.showMask("c","正在加载...");
		if ($.M.openAjax) {
			$.M.post({
				method : "/findCommonPointStatisticsByObjId",
				params : {
					"mobileNum" : "15995837571"
				},
				success : function(data) {
					IntegralDraw.hideMask("c", "正在加载...");
					var totalPoints = data.data.tradePoints;
					$("#total_points").text(totalPoints);
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					IntegralDraw.hideMask("c", "正在加载...");
				}
			}, "0");
		}
	},
	getWinnerList : function() { 
		var html = "";
		IntegralDraw.showMask("c","正在加载...");
		if ($.M.openAjax) {
			$.M.post({
				method : "/lottery/searchAllLottery",
				params : {},
				success : function(data) {
					IntegralDraw.hideMask("c", "正在加载...");
					if(data.length != 0){
						for(i=0;i<data.length;i++){
							var str = data[i].userId;
							var strpart = String(str).substring(3,8);
							str = str.replace(strpart,"*****");
							
							html = html + '<span id="list_' + i +'">' + str + '</span><span>&nbsp;&nbsp;</span>';
							
						};
						$('#list').append(html).trigger('create');
					}else{
						html = "";
						$('#list').append(html).trigger('create');
					}
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					IntegralDraw.hideMask("c", "正在加载...");
				}
			}, "1");
		}
	},
	getMyRecord : function() { 
		var html = "";
		IntegralDraw.showMask("c","正在加载...");
		if ($.M.openAjax) {
			$.M.post({
				method : "/lottery/searchByUser",
				params : {
					"userId" : "15950325786"
				},
				success : function(data) {
					IntegralDraw.hideMask("c", "正在加载...");
					if(data.length != 0){
						for(i=0;i<data.length;i++){
							
							html = html + '<div class="list-item"><div class="item-content">恒大主场球票</div><div class="item-date"><span>' 
							+ data[i].doingDate + '</span></div></div>';
							
						};
						$('#record_list').append(html).trigger('create');
					}else{
						html = "";
						$('#record_list').append(html).trigger('create');
					}
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					IntegralDraw.hideMask("c", "正在加载...");
				}
			}, "1");
		}
	}	
};
$(document).bind("pageshow", function(e) {
	var id = e.target.id;
	if ("integral_draw_page" == id) {
		if (!IntegralDraw.scroll) {
			IntegralDraw.scroll = new iScroll("integral_draw_content", {
				useTransition: true,
				checkDOMChanges : true,
				hScrollbar : false,
				vScrollbar : false
			});
		}
		
		IntegralDraw.init();
	}
});
/*
function convertStyle(obj)
{
	if(obj.length)
	{
		for (var i=0; i<obj.length; i++)
		{
			obj[i].style.left=obj[i].offsetLeft+'px';
			obj[i].style.top=obj[i].offsetTop+'px';
		}
		for (var i=0; i<obj.length; i++)
		{
			obj[i].style.position='absolute';
			obj[i].style.margin=0;
		}		
	}
	else
	{
		obj.style.left=obj.offsetLeft+'px';
		obj.style.top=obj.offsetTop+'px';
		obj.style.position='absolute';
		obj.style.margin=0;
	}
};

function shake(obj)
{
	var posData=[obj.offsetLeft,obj.offsetTop];
	obj.onclick=function()
	{
		var i=0;
		clearInterval(timer);
		var timer=setInterval(function()
		{
			i++;
			obj.style.left=posData[0]+((i%2)>0?-2:2)+'px';
			obj.style.top=posData[1]+((i%2)>0?-2:2)+'px';
			if(i>=30)
			{
				clearInterval(timer);
				obj.style.left=posData[0]+'px';
				obj.style.top=posData[1]+'px';
			}
		}, 30);
	}
};

window.onload=function()
{
	var oBox1=document.getElementById('choice_1');
	convertStyle(oBox1);
	shake(oBox1);
	
	var oBox2=document.getElementById('choice_2');
	convertStyle(oBox2);
	shake(oBox2);

	var oBox3=document.getElementById('choice_3');
	convertStyle(oBox3);
	shake(oBox3);	
};*/
