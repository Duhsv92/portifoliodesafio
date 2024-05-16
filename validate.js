//Seu JavaScript de validação aqui

function enviarEmail() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
    
    else {
      alert('E-mail enviado com sucesso!')
    }

}