const modal = document.getElementById('registrationModal');
const trigger = document.querySelector('.trigger-modal');
const closeBtn = document.querySelector('.close-modal');

// Simple Modal Toggle Logic
if (trigger) {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show');
        modal.style.display = 'flex'; // Ensure display flex is set
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
});

// Login Logic
const loginForm = document.querySelector('.login-form');
const modalContent = document.querySelector('.modal-content');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = loginForm.querySelectorAll('input');
        // Retrieve values
        const nameInput = inputs[0].value.trim().toLowerCase();
        const partnerInput = inputs[1].value.trim().toLowerCase();

        // Allow lists
        const validNames = ['ari', 'ary', 'arianna'];
        const validPartners = ['mery', 'mery claire'];

        // Validation
        if (validNames.includes(nameInput) && validPartners.includes(partnerInput)) {
            // Success: Update modal content
            modalContent.innerHTML = '<h2 style="font-family: \'Playfair Display\', serif; margin: 2rem 0; color: #232323;">Congratulazioni!! La tua registrazione è avvenuta con successo.</h2>';
        } else {
            // Optional feedback for incorrect login
            alert("Credenziali non corrette, riprova.");
        }
    });
}
