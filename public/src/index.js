console.log('working')
class Ui {
    // createPasswordItem(products) {
    //     pass
    // }
    viewPasswordItem() {
        const buttonList = [...document.querySelectorAll('.btn-reveal')]
        buttonList.forEach(button => {
            button.addEventListener('click', (e) => {
                const hiddenPassword = e.target.parentElement.parentElement.querySelector('.password-item__info-password')
                hiddenPassword.classList.toggle('hidden')
            })
        })
    }
    copyPasswordToClipboard() {
        const password = document.querySelector('.password-item__info-password')
        password.select()
        document.execCommand("Copy")
    }
}

function main() {
    const ui = new Ui
    ui.viewPasswordItem()
    ui.copyPasswordToClipboard()
}

document.addEventListener('DOMContentLoaded', () => main())
