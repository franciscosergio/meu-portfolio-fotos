const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const linkInput = document.getElementById('link');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const link = linkInput.value.trim();

    if(!nome){
        alert('Por favor insira seu nome');
        return;
    }

    if(!link || !link.startWidth('http')){
        alert('Por favor insira um link valido para a foto');
        return;
    }

    alert('Formulario enviado com sucesso!');
    form.reset();  // Limpar os campos após o envio
});