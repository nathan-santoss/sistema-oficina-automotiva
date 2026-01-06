const save_bt = document.getElementById('save')

save_bt.addEventListener('click', (event) => {
    const novo_cliente = {
        nome: document.getElementById('name').value,
        id: document.getElementById('cpf-cnpj').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        veiculo: {
            marca: document.getElementById('vel-marca').value,
            modelo: document.getElementById('vel-modelo').value,
            ano: document.getElementById('vel-ano').value,
            placa: document.getElementById('vel-placa').value,
            cambio: document.getElementById('cambio').value,
            gas_type: document.getElementById('gas-tipo').value
        }
    }
    for (const key in novo_cliente) {
        if(novo_cliente[key] === ''){
            // Alerta personalizado para avisar os dados faltantes.
            return
        }
        
    }
    novo_cliente.obs = document.getElementById('observacoes').value
    alert('cliente cadastrado com nucesso!')

    window.location.href = '../clientes-geral.html'
})


async function enviarCliente(cliente){
    const confirmacao = await window.api.confirmar()

    if(confirmacao){
        window.api.register(cliente)
    }
    location.reload()
}