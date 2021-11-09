const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')
$form.addEventListener('sumbit', handleSumbit)
function handleSumbit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:rsasas.bga@gmail.com?subject= nombre: ${form.get('Nombre')} correo: ${form.get('Email')}&body= ${form.get('Mensaje')} numero: ${form.get('Numero')}`)
    $buttonMailto.click()
}