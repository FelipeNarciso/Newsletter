function subscribe(){
    let txtEmail = document.getElementById('txtEmail')
    let usuario = txtEmail.value
    let erro = document.getElementById('erroEmail')
    let modal = document.getElementById('modal')
    let paginaPrincipal = document.getElementById('box')
    let txtModal = document.getElementById('confirmationModal')
    if(txtEmail.value == 0){
        erro.style.display = 'flex'
        txtEmail.style.borderColor = 'red'
        txtEmail.style.backgroundColor= 'RGB(255, 232, 230)'
        txtEmail.classList.add('color-placeholder')
    }
    if(txtEmail.value != 0){
        txtEmail.value = ''
        erro.style.display = 'none'
        txtEmail.style.borderColor = 'grey'
        txtEmail.style.backgroundColor= 'white'
        txtEmail.classList.remove('color-placeholder')
        paginaPrincipal.style.display = 'none'
        txtModal.innerHTML = ` A confirmation email has been sent to <strong>${usuario}</strong>. Please open it and click the button inside to confirm your subscription.`
        modal.style.display = 'flex'
    }
   
}

function closeModal(){
    let modal = document.getElementById('modal')
    let paginaPrincipal = document.getElementById('box')

    modal.style.display = 'none'
    paginaPrincipal.style.display = 'flex'
}