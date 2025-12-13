const button_addClient = document.getElementById('add-cliente')
button_addClient.addEventListener('click', (event) => {
    window.api.loadCad('novo-cliente')
    alert('chamou')
})
