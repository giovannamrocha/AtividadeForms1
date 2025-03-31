function salvarUsuario() {
    var id = document.getElementById('id').value;
    var nome = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var time = document.getElementById('time').value;
    
    if (id === "" || nome === "" || dataNascimento === "" || time === "") {
        alert("Preencha todos os campos.");
        return;
    }
    
    var usuario = { id: id, nome: nome, dataNascimento: dataNascimento, time: time };
    var chave = "usuario" + id;
    
    localStorage.setItem(chave, JSON.stringify(usuario));
    alert("Usuário salvo com sucesso.");
}

function consultarUsuario() {
    var numero = prompt("Digite o número do usuário (1-5):");
    if (numero === "" || numero === null) {
        return;
    }
    
    var chave = "usuario" + numero;
    var dados = localStorage.getItem(chave);
    
    if (dados !== null) {
        var usuario = JSON.parse(dados);
        document.getElementById('id').value = usuario.id;
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('dataNascimento').value = usuario.dataNascimento;
        document.getElementById('time').value = usuario.time;
    } else {
        alert("Usuário não encontrado.");
    }
    
}