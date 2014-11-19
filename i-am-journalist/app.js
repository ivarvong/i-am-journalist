var upgrade = function() {
	document.body.innerHTML = document.body.innerHTML.replace(/ournalists/ig, 'ournalist');
}

setTimeout(function() {
	if(document.body.innerText.search(/journalists/ig)) {
		upgrade();
	}
}, 1000);

upgrade();
