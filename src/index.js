import { HabitModel } from './models/HabitModel';
import { HabitView } from './views/HabitView';
import { HabitController } from './controllers/HabitController';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  window.habitController = new HabitController(new HabitModel(), new HabitView());
});
