const container = document.querySelector('.container')
const signUpButton = document.querySelector('.sign-up-btn')
const signInButton = document.querySelector('.sign-in-btn')

signUpButton.addEventListener('click', () => {
    container.classList.add('active')
})

signInButton.addEventListener('click', () => {
    container.classList.remove('active')
})