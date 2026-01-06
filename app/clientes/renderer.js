const create_clienteBT = document.getElementById('new-client')

create_clienteBT.addEventListener('click', (event) => {
    window.api.changePage('new-client')
})