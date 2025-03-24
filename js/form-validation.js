const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const link = document.getElementById('link').value.trim();
    const categoria = document.getElementById('categoria').value;
   

    if(!nome){
        alert('Por favor insira seu nome');
        return;
    }

    if(!nome || !link.startsWith('http')){
        alert('Por favor insira um link valido para a foto');
        return;
    }

    const fotoDiv = document.createElement('div');
    fotoDiv.innerHTML = `
    <img src="${link}.jpg" alt="${nome}" style="width: 200px; height: auto;" />
    <p>${nome}</p>
    `;

    const galeria = document.querySelector(`.fotos-${categoria}`);
    galeria.appendChild(fotoDiv);

    //document.body.appendChild(galeria);

    alert('Formulario enviado com sucesso!');
    form.reset();  // Limpar os campos após o envio
});