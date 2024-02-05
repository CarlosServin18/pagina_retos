document.addEventListener('DOMContentLoaded', (event) => {
    const applyFilterButton = document.getElementById('apply-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const dateFilter = document.getElementById('date-filter');
    const challenges = document.querySelectorAll('.challenge');

    applyFilterButton.addEventListener('click', () => {
        const selectedDifficulty = difficultyFilter.value;
        const selectedDate = dateFilter.value; // Esto será en formato 'YYYY-MM'

        challenges.forEach((challenge) => {
            const challengeDifficulty = challenge.getAttribute('data-difficulty');
            const challengeDate = challenge.getAttribute('data-date'); // Asegúrate de que esto esté en formato 'YYYY-MM'
            
            // Verifica si el reto cumple con los filtros de dificultad y fecha
            if ((selectedDifficulty === "" || challengeDifficulty === selectedDifficulty) &&
                (selectedDate === "" || challengeDate.startsWith(selectedDate))) {
                challenge.style.display = ''; // Mostrar
            } else {
                challenge.style.display = 'none'; // Ocultar
            }
        });
    });
});
