/*###### Form Display & Other Element Script ######*/
/* Navigation Menu & Other Element */
$(function() {
	$("#lava_menu").lavaLamp({
		fx: "backout",
		speed: 700
	});
	$("#registration").hide();
	$(".cnx").hide();
	document.forms[0].code.focus();
	$(":focus").css("border", "1px solid red");
});
/* Online Msg Script: Taken from val_ctrl_script because of the double "onload" event */
function weAreOnlineTextUs() {
	var onlineCanvas=document.getElementById("weAreOnlineBox"), onlineContext=onlineCanvas.getContext("2d"), msgBox;
	msgBox=new Image();
	msgBox.src="images/msg_icon.png";
	msgBox.width="50";
	msgBox.height="50";
	msgBox.onload=function() {
		var cercledMsgBox=onlineContext.createPattern(msgBox, "no-repeat");
		onlineContext.fillStyle=cercledMsgBox;
		onlineContext.beginPath();
		onlineContext.arc(25, 25, 25, 0, Math.PI*2);
		onlineContext.fill();
	};
}
weAreOnlineTextUs();
(function() {
	function sign() {
		var createAccount=document.getElementById("createAccount"), downRegistration=document.getElementById("downRegistration"), accountMenu=document.getElementById("accountMenu");
		createAccount.onclick=function() {
			$(".fadeOnClick, #illustration_fig").fadeOut("slow", function() {
				$("#registration:hidden").fadeIn("slow");
				$(".create_account_button").fadeOut("slow", function() {
					$(".cnx:hidden").fadeIn("slow");
				});
			});
		};
		downRegistration.onclick=function() {
			$(".fadeOnClick, #illustration_fig").fadeOut("slow", function() {
				$("#registration:hidden").fadeIn("slow");
				$(".create_account_button").fadeOut("slow", function() {
					$(".cnx:hidden").fadeIn("slow");
				});
			});
		};
		accountMenu.onclick=function(e) {
			e.preventDefault();
			this.style.cursor="default";
			hideOverlay();
			var myAccount=document.getElementById("myAccount");
			myAccount.style.display="block";
			document.getElementById("doc_scroll_bar").style.overflow="hidden";
		};
	}
	sign();
	function displayOverlay() {
		var overlayContact=document.getElementById("overlay_contact");
		overlayContact.style.display="block";
		document.getElementById("doc_scroll_bar").style.overflow="hidden";
	}
	function hideOverlay() {
		var overlayContact=document.getElementById("overlay_contact");
		overlayContact.style.display="none";
	}
	function contact() {
		var contact=document.getElementById("contact"), abort, downContact=document.getElementById("downContact"), footerContact=document.getElementById("footerContact");
		contact.onclick=function(e) {
			e.preventDefault();
			var myAccount=document.getElementById("myAccount");
			myAccount.style.display="none";
			displayOverlay();
			this.className="current_menu";
		};
		downContact.onclick=function() {
			displayOverlay();
		};
		footerContact.onclick=function() {
			displayOverlay();
		};
		abort=document.getElementById("abort");
		abort.onclick=function() {
			var overlayContact=document.getElementById("overlay_contact");
			overlayContact.style.display="none";
			contact.className="";
			document.getElementById("doc_scroll_bar").style.overflow="visible";
		};
	}
	contact();
	// To control the GoBack or quit to homepage after reading a notiifcation popup;
	function goBackToHomePage() {
		var goBack=document.getElementById("goBack"), notification_popup=document.getElementById("notification_popup");
		goBack.onclick=function() {
			notification_popup.style.display="none";
			doc_scroll_bar.style.overflow="visible";
		};
	}
	goBackToHomePage();
	function redirectToMerchantSite() {
		var payButton=document.getElementById("pay_button");
		payButton.onclick=function() {
			window.history.go(-1);
		}
	}
	redirectToMerchantSite();
})();
