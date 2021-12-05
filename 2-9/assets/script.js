let eyeIcons = document.querySelectorAll('i.outlined_textfield_righticon');
for (const eyeIcon of eyeIcons) {
    eyeIcon.addEventListener('click',togglePassword);
}
function togglePassword(e) {
    const parentElement = this.closest('.outlined_textfield')
    const inputElement = parentElement.querySelector('input.outlined_textfield_input');
    
    if (inputElement.type === 'password') {
        inputElement.type = 'text';
    } else {
        inputElement.type = 'password';
    }

    if (this.classList.contains('fa-eye')) {
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
}