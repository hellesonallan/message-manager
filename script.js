function gravarDados() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    alert('Dados gravados.');
}

function exibirDados() {
    const dadosExibidos = document.getElementById('dadosExibidos');
    dadosExibidos.innerHTML = `
        <h4>Dados Armazenados:</h4>
        <p><strong>Nome:</strong> ${localStorage.getItem('nome') || 'N/A'}</p>
        <p><strong>Endereço:</strong> ${localStorage.getItem('endereco') || 'N/A'}</p>
        <p><strong>E-mail:</strong> ${localStorage.getItem('email') || 'N/A'}</p>
        <p><strong>Telefone:</strong> ${localStorage.getItem('telefone') || 'N/A'}</p>
    `;
    dadosExibidos.classList.remove('d-none');
}

function enviarDados() {
    const tel = document.getElementById('telefoneEnvio').value.replace(/\D/g, '');
    const texto = `*Dados:*%0A` +
                  `Nome: ${localStorage.getItem('nome')}%0A` +
                  `Endereço: ${localStorage.getItem('endereco')}%0A` +
                  `Email: ${localStorage.getItem('email')}%0A` +
                  `Telefone: ${localStorage.getItem('telefone')}`;
    
    window.open(`https://api.whatsapp.com/send?phone=${tel}&text=${texto}`, '_blank');
}