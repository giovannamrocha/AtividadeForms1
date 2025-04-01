// Função para salvar as informações do usuário no LocalStorage
function salvarUsuario() { 
    // Obtendo os valores dos campos do formulário
    var id = document.getElementById('id').value;  // ID do usuário
    var nome = document.getElementById('nome').value;  // Nome do usuário
    var dataNascimento = document.getElementById('dataNascimento').value;  // Data de nascimento
    var time = document.getElementById('time').value;  // Time favorito

    // Verifica se algum campo do formulário está vazio
    if (id === "" || nome === "" || dataNascimento === "" || time === "") {
        // Se algum campo estiver vazio, exibe um alerta pedindo para preencher todos os campos
        alert("Preencha todos os campos.");
        return;  // Interrompe a execução da função
    }

    // Cria um objeto 'usuario' com as informações preenchidas pelo usuário
    var usuario = { 
        id: id, 
        nome: nome, 
        dataNascimento: dataNascimento, 
        time: time 
    };
    
    // Define a chave do LocalStorage
    var chave = "usuario" + id;
    
    // Salva o objeto 'usuario' no LocalStorage, convertendo-o para uma string JSON
    localStorage.setItem(chave, JSON.stringify(usuario));
    
    // Exibe um alerta confirmando que os dados foram salvos com sucesso
    alert("Usuário salvo com sucesso.");
}

// Função para consultar as informações do usuário no LocalStorage
function consultarUsuario() {
    // Solicita ao usuário que insira o número do ID do usuário a ser consultado
    var numero = prompt("Digite o número do usuário (1-5):");
    
    // Se o usuário não inserir nada ou cancelar, a função é encerrada
    if (numero === "" || numero === null) {
        return;  // Não faz nada e sai da função
    }
    
    // Define a chave do LocalStorage, combinando a palavra "usuario" com o número informado
    var chave = "usuario" + numero;
    
    // Tenta obter o dado associado à chave do LocalStorage
    var dados = localStorage.getItem(chave);
    
    // Se os dados forem encontrados
    if (dados !== null) {
        // Converte os dados (em formato JSON) de volta para um objeto JavaScript
        var usuario = JSON.parse(dados);
        
        // Preenche os campos do formulário com as informações do usuário consultado
        document.getElementById('id').value = usuario.id;
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('dataNascimento').value = usuario.dataNascimento;
        document.getElementById('time').value = usuario.time;
    } else {
        // Se os dados não forem encontrados (usuário não existe), exibe um alerta
        alert("Usuário não encontrado.");
    }
}
