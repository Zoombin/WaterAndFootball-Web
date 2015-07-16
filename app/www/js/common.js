var Common = {
	storage : window.localStorage,
	showMask : function(theme, msg) {
		$.mobile.showPageLoadingMsg(theme,msg);
		$(".mask_div").css("display", "block");
	},
	hideMask : function(theme, msg) {
		$.mobile.hidePageLoadingMsg(theme,msg);
		$(".mask_div").css("display", "none");
	},
	bindEvent : function() {
		
	},
	checkIsExist : function(objEl) {
		if (objEl != undefined && objEl != null && objEl.length > 0) {
			return true;
		} else {
			return false;
		}
	},
	getQueryString : function(paramName) {
		var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2]);
		} else {
			return "";
		}
	},
	init : function() {
		Common.bindEvent();
		Common.geTip();
	},
	geTip : function() {
		if (Common.checkIsExist($(".pop-up-tip")) == true) {
			var tipHtml = '<div class="bg">'
					+ '<span></span>'
					+ '</div>';
			$(".pop-up-tip").html(tipHtml);
		}
	},
	showMessage : function(message) {
		$(".pop-up-tip .bg span").html(message);
		$(".pop-up-tip").show();
		$(".pop-up-tip-mask").show();
		setTimeout('$(".pop-up-tip").hide();',2000);
		setTimeout('$(".pop-up-tip-mask").hide();',2000);
	}
}

$(document).bind("pageshow", function(e) {
	var id = e.target.id;
	Common.init();
});