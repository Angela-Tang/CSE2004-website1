 const form = document.querySelector('#genre-form')
        const nameInput = document.querySelector('#name')
        const message = document.querySelector('#form-message')

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const name = nameInput.value
            message.textContent = `Thank you for participating, ${name}!`
        })