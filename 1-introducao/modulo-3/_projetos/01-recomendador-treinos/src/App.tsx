 
import { useState, useEffect } from "react";
import "./App.css";

interface Workout {
  id: number;
  name: string;
  type: string;
  duration: number;
  intensity: string;
  focus: string;
}

interface User {
  id: number;
  name: string;
  age: number;
  weight: number;
  goal: string;
  level: string;
  completedWorkouts: CompletedWorkout[];
}

interface CompletedWorkout {
  name: string;
  rating: number;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  //desenvolver a função: make context
  function makeContext(workout: Workout[], user: User[]) {
    // valores numéricos
    const ages = user.map((user) => user.age);
    const weights = user.map((user) => user.weight);
    const durations = workout.map((w) => w.duration);

    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const minWeight = Math.min(...weights);
    const maxWeight = Math.min(...weights);
    const minDuration = Math.min(...durations);
    const maxDuration = Math.max(...durations);
    
    // Categorias únicas
    const types = [...new Set(workout.map((w) => w.type))]
    const intensites = [...new Set(workout.map((w) => w.intensity))]
    const focus = [...new Set(workout.map((w) => w.focus))]
    const goals = [...new Set(user.map((u) => u.goal))];
    const levels = [...new Set(user.map((u) => u.level))];
    
    // indices
    const typeIndex      = Object.fromEntries(types.map((type, index) => [type, index]))
    const intensityIndex = Object.fromentries(intensites.map((intensite, index) => [intensite, index]))
    const focusIndex     = Object.fromEntries(focus.map((focu, index) => [focu, index]))
    const goalIndex      = Object.fromEntries(goals.map((goal, index) => [goal, index]))
    const levelIndex     = Object.fromEntries(levels.map((level, index) => [level, index]))



    // média de idade por treino
    
     
  }

  useEffect(() => {
    async function init() {
      const [workoutRes, usersRes] = await Promise.all([
        fetch("../src/data/workouts.json"),
        fetch("../src/data/users.json"),
      ]);

      const usersJson: User[] = await usersRes.json();
      const workoutJson: Workout[] = await workoutRes.json();

      setUsers(usersJson);
      setWorkouts(workoutJson);

      // só depois prepara e treina
      // criar o contexto
      // treinar o modelo
      // recomendar

      makeContext(workoutJson,usersJson)
     
      setLoading(false);
    }

    init();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Carregando dados ...</h1>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App;
