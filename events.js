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


tabbar_div.addEventListener('click', function(e){
	// if (hasClass(e.target,"pmm-title")) {
	// 	toggleContentVis(e.target);
	// } else if (hasClass(e.target,"pmm-item-count") || 
	// 	hasClass(e.target,"pmm-item-id") ||
	// 	hasClass(e.target,"pmm-item-name")) {
	// 	build(e.target.getAttribute("data-pmm"), e.target.getAttribute("data-pmm-item"), 1);
	// } else if (hasClass(e.target,"pmm-item-auto-build") && e.target.type==="checkbox") {
	// 	autoBuild( e.target.getAttribute("data-pmm"), e.target.getAttribute("data-pmm-item"), e.target.checked);
	// } else if (hasClass(e.target,"pmm-enable-pm") && e.target.type==="checkbox") {
	// 	handlePerpetualMotion( e.target.getAttribute("data-pmm"), e.target.checked );
	// }
	if (hasClass(e.target, "tab-item")) {
		console.log(e.target.innerText, e.target.id);
		handleTabSelection(e.target.id);
	} else {
		console.log("unhandled event:", e.target);
	}


});

function handleTabSelection(elem_id){
	if (elem_id === "calculator-tab") {
		setVisible( document.getElementById("equiv_div"), true);
		setVisible( document.getElementById("table_div"), false);
	} else if (elem_id === "table-tab") {
		setVisible( document.getElementById("equiv_div"), false);
		setVisible( document.getElementById("table_div"), true);
	}



}
