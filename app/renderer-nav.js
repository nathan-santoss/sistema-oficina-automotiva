// salvando o elemento do menu de navegação
const menu_nav = document.getElementById('menu-navegacao')
// adicionando um evento de click
menu_nav.addEventListener('click', (event) => {
    // salva o que foi clicado
    const item = event.target.closest('li') // 'closest' salva SOMENTE se foi clicado

    if(item && item.id){ // teste para saber se existe um elemento clicado
        const pagina = item.id

        //alerta falando  o nome da pagina clicada 
        // alert(`Pagina escolhida foi: ${pagina.toUpperCase()}`) 

        window.api.changePage(pagina)
    }
})