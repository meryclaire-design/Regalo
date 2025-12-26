document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('check-quiz');

    // Answer key configuration
    const quizAnswers = {
        'q1': ['kebabbo', 'Kebabbo'],
        'q2': ['purrito', 'Purrito'],
        'q3': ['sprofondino', 'Sprofondino'],
        'q4': ['crazy', 'Crazy'],
        'q5': ['butt cheeks', 'butt cheeks queen', 'Butt cheeks', 'Butt cheeks queen'],
        'q6': ['the butt', 'booty', 'The butt', 'Booty'],
        'q7': ["i'm just round", "i am just round", "just round", "I'm just round", "I am just round", "Just round"],
        'q8': ['smol', 'small', 'Smol', 'Small'],
        'q9': ['leccarmi', 'Leccarmi'],
        'q10': ['posare la tua guancetta sulla mia', 'mettere la tua guancetta sulla mia', 'posare la mia guancetta sulla tua',
            'mettere la mia guancetta sulla tua', 'Posare la tua guancetta sulla mia', 'Mettere la tua guancetta sulla mia',
            'Posare la mia guancetta sulla tua', 'Mettere la mia guancetta sulla tua'],
        'q11': ['veloce', 'Veloce'],
        'q12': ['vai piano', 'Vai piano!'],
        'q_bonus': ['tortellini al ragù', 'tortellini al ragu', 'Tortellini al ragù', 'Tortellini al ragu']
    }

    checkButton.addEventListener('click', () => {
        let allCorrect = true;

        for (const [id, correctAnswers] of Object.entries(quizAnswers)) {
            const input = document.getElementById(id);
            if (!input) continue;

            const userValue = input.value.trim().toLowerCase();

            // Check if user answer matches any valid answer
            const isCorrect = correctAnswers.some(answer => userValue === answer.toLowerCase());

            // Remove existing classes
            input.classList.remove('correct', 'incorrect');

            // Apply new class
            if (isCorrect) {
                input.classList.add('correct');
            } else {
                input.classList.add('incorrect');
                allCorrect = false;
            }
        }

        if (allCorrect) {
            // Optional: Add a celebration or success message here if desired later
            // For now, the green inputs are the feedback.
            // alert("Tutte le risposte sono corrette! Bacino sprofondino in arrivo!"); 
        }
    });
});
