function gravarDados() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    alert('Dados gravados com sucesso!');
}

function exibirDados() {
    const nome = localStorage.getItem('nome');
    const endereco = localStorage.getItem('endereco');
    const email = localStorage.getItem('email');
    const telefone = localStorage.getItem('telefone');
    const dadosExibidos = document.getElementById('dadosExibidos');
    const conteudoDados = document.getElementById('conteudoDados');

    if (nome || endereco || email || telefone) {
        conteudoDados.innerHTML = `
            <p><strong>Nome:</strong> ${nome || 'Não informado'}</p>
            <p><strong>Endereço:</strong> ${endereco || 'Não informado'}</p>
            <p><strong>E-mail:</strong> ${email || 'Não informado'}</p>
            <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        `;
        dadosExibidos.classList.remove('d-none');
    } else {
        alert('Nenhum dado encontrado no localStorage!');
    }
}