function mostrarOla() {
	var nome = document.getElementById("nome").value;
	document.getElementById("reposta").textContent = "Olá " + nome;	
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);