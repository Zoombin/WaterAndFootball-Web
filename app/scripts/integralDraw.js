var IntegralDraw = {
	scroll : null,
	houseScroll: null,
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
		
		
		
	},
	getRooms : function() { 
		var html = "";
		IntegralDraw.showMask("c","正在加载...");
		if ($.M.openAjax) {
			$.M.post({
				method : "/baseInfo/rooms",
				params : {},
				success : function(data) {
					IntegralDraw.hideMask("c", "正在加载...");

				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					IntegralDraw.hideMask("c", "正在加载...");
				}
			}, "0");
		}
	},
	getNodes : function(projectId,roomId,buildingId) { 
		var html = "";
		$("#projectList").html(html).trigger('create');
		IntegralDraw.showMask("c","正在加载...");
		if ($.M.openAjax) {
			$.M.post({
				method : "/baseInfo/nodes",
				params : {
					"buildingId" : buildingId,
					"projectId" : projectId,
					"roomId" : roomId
				},
				success : function(data) {
					IntegralDraw.hideMask("c", "正在加载...");
	
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					IntegralDraw.hideMask("c", "正在加载...");
				}
			}, "0");
		}
	}	
};
$(document).bind("pageshow", function(e) {
	var id = e.target.id;
	if ("integral_draw_page" == id) {
		/*if (!IntegralDraw.scroll) {
			IntegralDraw.scroll = new iScroll("underpart_div_scorll", {
				useTransition: true,
				checkDOMChanges : true,
				hScrollbar : false,
				vScrollbar : false
			});
		}*/
		
		IntegralDraw.init();
	}
});

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
};
