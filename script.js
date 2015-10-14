function selectText(element) {
    var doc = document;
    var text = doc.getElementById(element);    

    if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();            
        var range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

var list = document.getElementById("boxes");
var active_color = null;

for (var i = 0; i < colors.length; i++) {
	var li = document.createElement("li");

	if (colors[i] == "separator") {
		li.setAttribute("class", "separator");
	} else {
		li.setAttribute("class", "color");
		li.style.backgroundColor = colors[i];
		li.id = colors[i];
		li.innerHTML = colors[i];

		li.onclick = function(e) {
			document.body.style.backgroundColor = e.target.id;

			if (active_color != null) {
				active_color.setAttribute("class", "color");
			}
			active_color = e.target;
			e.target.setAttribute("class", "color active");

			selectText(e.target.id);
		};
	}

	list.appendChild(li);
};