export class HabitView {
  constructor() {
    this.app = document.getElementById('app');
    this.habitsList = document.getElementById('habits-container');
    this.form = document.getElementById('new-habit-form');
    this.chart = document.getElementById('progress-chart');
  }

  bindAddHabit(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const name = document.getElementById('habit-name').value;
      const goal = document.getElementById('habit-goal').value;
      handler(name, parseInt(goal));
      this.form.reset();
    });
  }

  bindRemoveHabit(handler) {
    this.habitsList.addEventListener('click', event => {
      if (event.target.className === 'delete-habit') {
        const id = parseInt(event.target.parentElement.id);
        handler(id);
      }
    });
  }

  bindLogHabit(handler) {
    this.habitsList.addEventListener('submit', event => {
      if (event.target.className === 'log-form') {
        event.preventDefault();
        const id = parseInt(event.target.parentElement.id);
        const minutes = event.target.querySelector('.log-input').value;
        handler(id, parseInt(minutes));
        event.target.reset();
      }
    });
  }

  displayHabits(habits) {
    this.habitsList.innerHTML = habits.map(habit => `
      <div id="${habit.id}" class="habit-item">
        <h3>${habit.name}</h3>
        <p>Objectif : ${habit.goal} minutes</p>
        <form class="log-form">
          <input type="number" class="log-input" placeholder="Minutes" required>
          <button type="submit">Enregistrer</button>
        </form>
        <button class="delete-habit">Supprimer</button>
      </div>
    `).join('');
  }

  