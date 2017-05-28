function fotos() {
	var container = document.getElementById('fotos');

	function image(name) {
		this.name = name;
		this.img = new Image();
		this.img.src = 'assets/img/' + name + '.jpg';
		this.closeBtn = function() {
			var btn = document.createElement('button');
			var btnTxt = document.createTextNode('X');
			btn.classList.add('btn', 'close');
			btn.setAttribute('alt', this.name);
			btn.appendChild(btnTxt);
			btn.onclick = function() {
				btn.parentElement.style.display = 'none';
				return false;
			}
			return btn;
		};
		this.show = function() {
			var imgBox = document.createElement('div');
			imgBox.classList.add('caja');
			imgBox.appendChild(this.img);
			imgBox.appendChild(this.closeBtn());
			container.appendChild(imgBox);
		};
		//this.close = 
	};
	var img1 = new image('a1');
	var img2 = new image('a2');
	var img3 = new image('a3');
	var img4 = new image('a4');

	function mostrarFotos() {
		img1.show();
		img2.show();
		img3.show();
		img4.show();	
	}
	document.getElementById('restaurar').onclick = function() {
		mostrarFotos();
		return false;
	}
	mostrarFotos();
}

function textos() {
	document.getElementById('origen').onclick = function() {
		document.getElementsByClassName('izq')[0].classList.toggle("hidden");
		return false;
	}
	document.getElementById('extincion').onclick = function() {
		document.getElementsByClassName('der')[0].classList.toggle("hidden");
		return false;
	}
}