const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleLeftText = "Welcome Back!";
    const toggleRightText = "Hello Friends!";

    function typeAnimation(element, text) {
        let index = 0;
        element.textContent = '';
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    const leftToggle = document.querySelector('.toggle-left h1');
    const rightToggle = document.querySelector('.toggle-right h1');

    typeAnimation(leftToggle, toggleLeftText);
    typeAnimation(rightToggle, toggleRightText);
});
