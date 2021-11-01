const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')
$form.addEventListener('sumbit', handleSumbit)
function handleSumbit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:danielysolo@gmail.com?subject= nombre: ${form.get('name')} correo: ${form.get('email')}&body= ${form.get('mensaje')} numero: ${form.get('number')}`)
    $buttonMailto.click()
}