const button_save = document.getElementById('button-save')
const button_cancel = document.getElementById('button-cancel')

const clickPage = (event) => {
    let pessoa = null
    const btn = event.target.dataset.tipo
    if(!btn){return}
    else if(btn === 'cancelar'){
        window.api.finishCad()
    }else if(btn === 'salvar'){
        pessoa = {
            nome: document.getElementById('nome').value,
            documento: document.getElementById('cpf-cnpj').value,
            telefone: document.getElementById('telefone').value,
            endereco: {
                rua: document.getElementById('rua').value,
                num: document.getElementById('numero-casa').value,
                bairro: document.getElementById('bairro').value,
                // cep: document.getElementById('cep').value,
                cidade_estado: document.getElementById('estado-cidade').value
            }
        }
        alert(pessoa.nome)
    }
}

document.addEventListener('click', clickPage)