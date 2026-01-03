// salvando o elemento do menu de navegação
const menu_nav = document.getElementById('menu-navegacao')
// adicionando um evento de click
menu_nav.addEventListener('click', (event) => {
    // salva o que foi clicado
    const item = event.target.closest('.item-navegacao') // 'closest' salva SOMENTE se foi clicado '.item-navegacao' (ou seja, um elemento da lista)

    if(item){ // teste para saber se existe um elemento clicado
        const pagina = item.getAttribute('data-page') // salva o atributo (data-page) na variavel

        //alerta falando  o nome da pagina clicada 
        // alert(`Pagina escolhida foi: ${pagina.toUpperCase()}`) 

        window.api.changePage(pagina)
    }
})