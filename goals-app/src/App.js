import './App.css';
import React from "react";

function GoalForm(props) {
  const [formData, setFormData] = React.useState({
    goal: "",
    date: "",
  });


function changeHandler(e) {
  setFormData({ ...formData, [e.target.name]: e.target.value });
}

function submitHandler(e) { 
  e.preventDefault();
  props.onAdd(formData);
  setFormData ({ goal: "", date: ""});
};

return (
  <>
  <form onSubmit={submitHandler}>
    <input
      type="text"
      name="goal"
      value={formData.goal}
      onChange={changeHandler}
    />
    <input
      type="text"
      name="date"
      value={formData.date}
      onChange={changeHandler}
    />
    <button type="submit">Add Goal</button>
  </form>
  </>
);
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.goals.map((goal) => (
        <li key={goal.id}>
          {goal.goal} - {goal.date}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals goals={allGoals} />
    </div>
  );
};