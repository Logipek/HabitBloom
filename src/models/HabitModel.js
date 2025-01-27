export class HabitModel {
  constructor() {
    this.habits = JSON.parse(localStorage.getItem('habits')) || [];
  }

  addHabit(name, goal) {
    const habit = {
      id: Date.now(),
      name,
      goal,
      logs: [],
      created: new Date().toISOString()
    };
    this.habits.push(habit);
    this.saveHabits();
    return habit;
  }

  removeHabit(id) {
    this.habits = this.habits.filter(habit => habit.id !== id);
    this.saveHabits();
  }

  updateHabit(id, log) {
    const habit = this.habits.find(h => h.id === id);
    if (habit) {
      habit.logs.push({
        date: new Date().toISOString(),
        minutes: log
      });
      this.saveHabits();
    }
  }

  getHabits() {
    return this.habits;
  }

  saveHabits() {
    localStorage.setItem('habits', JSON.stringify(this.habits));
  }
}

