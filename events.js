function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return(str.indexOf(testCls) != -1) ;
};

function setVisible(element, visible) {
    if (element === null)
        return;
    if (visible) 
        element.removeAttribute("data-visible");
    else
        element.setAttribute("data-visible", "false");
}


var tabbar_div = document.getElementById("tab_bar_div");

// prevents text select when clicking
tabbar_div.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);

tabbar_div.addEventListener('click', function(e) {
	if (hasClass(e.target, "tab-item")) {
		handleTabSelection(e.target);
	} else {
		//console.log("unhandled event:", e.target);
	}
});

var calc_div = document.getElementById("calculator-tab-div");
calc_div.addEventListener('click', function(e) {
	if (hasClass(e.target, "calc-button")) {
		checkData();
	} else {
		console.log("unhandled event:", e.target);
	}
});