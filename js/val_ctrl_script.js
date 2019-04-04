(function() {
	// To remove the "No Number" paragraph in case there is a new number saved into the table;
	var tr=document.getElementsByTagName("tr"), trLength=tr.length;
	if (trLength>2) {
		for (var i=0; i<trLength; i++) {
			if (tr[i].className=="noNumberSaved") {
				tr[i].style.display="none";
			}
		}
	}
	// Script to make active the Edit Profile Button;
	var inputs=document.getElementsByTagName("input"), inputsLength=inputs.length, save_profile_button=document.getElementById("save_profile_button");
	function editingActive() {
		for (var i=0; i<inputsLength; i++) {
			if (inputs[i].id=="edit_profile_button") {
				(function(currentI) {
					inputs[currentI].style.color="#fff";
					inputs[currentI].style.background="#3ece90";
					inputs[currentI].style.border="#3ece90";
					inputs[currentI].style.cursor="pointer";
				})(i);
			}
		}
	}
	editingActive();
	// Function To control the operator type selection;
	function ControlProfileValues() {
		function selectOpereator() {
			var msisdn=document.getElementById("msisdn"), telProfileInput=document.getElementById("telProfileInput"), associate_tel_button=document.getElementById("associate_tel_button");
			telProfileInput.style.display="none";
			msisdn.onchange=function() {
				if (this.options[this.selectedIndex].className=="mtn" || this.options[this.selectedIndex].className=="moov") {
					telProfileInput.style.display="block";
					associate_tel_button.type="submit";
					associate_tel_button.style.color="#fff";
					associate_tel_button.style.background="rgb(255, 175, 75)";
					associate_tel_button.style.border="1px solid rgb(255, 175, 75)";
					associate_tel_button.style.cursor="pointer";
				}
				else {
					telProfileInput.style.display="none";
					associate_tel_button.style.color="";
					associate_tel_button.style.background="";
					associate_tel_button.style.border="";
					associate_tel_button.style.cursor="";
					associate_tel_button.type="button";
				}
			}
		}
		selectOpereator();
	}
	ControlProfileValues();
})();
