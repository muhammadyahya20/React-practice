
/*
====================================================
APP.JSX — PARENT COMPONENT (REFERENCE ONLY)
====================================================

import "./App.css";
import DessertsList from "./DessertsList";

// Array containing four dessert objects.
// Each object has three properties:
// name, calories, and createdAt.

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;

====================================================
PROPS REFERENCE
====================================================

The parent passes the desserts array through a prop
named "data".

Inside DessertsList, it is accessible through:

props.data

Each object contains:
- name
- calories
- createdAt

====================================================
*/

// FILTER METHOD
// Keeps desserts with fewer than 500 calories.

/*
props.data.filter(a => a.calories < 500)
*/


// SORT METHOD
// Sorts desserts from highest to lowest calories.

/*
props.data.sort((a, b) => b.calories - a.calories)
*/


// MAP METHOD
// Iterates over the array and renders each dessert.

/*
props.data.map((prop, index) => (
  <li key={index}>
    {prop.name} - {prop.calories}
  </li>
))
*/


// CHAINED METHODS
// FILTER → SORT → MAP

function DessertsList(props) {
  return (
    <>
      <ul>
        {props.data
          .filter(a => a.calories < 500)
          .sort((a, b) => b.calories - a.calories)
          .map((prop, index) => (
            <li key={index}>
              {prop.name} - {prop.calories}
            </li>
          ))}
      </ul>
    </>
  );
}

export default DessertsList;
