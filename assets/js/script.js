function fotos() {
	var container = document.getElementById('fotos');

	function image(name) {
		this.name = name;
		this.img = new Image();
		this.img.src = 'assets/img/' + name + '.jpg';
		this.show = function() {
			container.appendChild(this.img);
		};
		//this.close = 
	};
	var img1 = new image('a1');
	var img2 = new image('a2');
	var img3 = new image('a3');
	var img4 = new image('a4');

	img1.show();
	img2.show();
	img3.show();
	img4.show();
}

function textos() {
	var izq = document.getElementsByClassName('caja')[0];
	var der = document.getElementsByClassName('caja')[1];

	document.getElementById('origen').onclick = function() {
		document.getElementsByClassName('caja')[0].classList.toggle("hidden");
		return false;
	}
	document.getElementById('extincion').onclick = function() {
		document.getElementsByClassName('caja')[1].classList.toggle("hidden");
		return false;
	}
}