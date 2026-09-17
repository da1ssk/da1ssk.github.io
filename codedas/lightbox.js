// Click a screenshot in the row to see it large. One overlay, reused for
// every shot; the large file is only fetched when a shot is clicked.
document.addEventListener('DOMContentLoaded', function () {
	var shots = document.querySelectorAll('.shots .shot');
	if (!shots.length) return;

	var overlay = document.createElement('div');
	overlay.className = 'shot-overlay';
	overlay.hidden = true;
	var large = document.createElement('img');
	overlay.appendChild(large);
	document.body.appendChild(overlay);

	function close() {
		overlay.hidden = true;
	}

	shots.forEach(function (shot) {
		shot.addEventListener('click', function () {
			var thumb = shot.querySelector('img');
			large.src = shot.dataset.large;
			large.alt = thumb.alt;
			overlay.hidden = false;
		});
	});

	overlay.addEventListener('click', close);
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') close();
	});
});
