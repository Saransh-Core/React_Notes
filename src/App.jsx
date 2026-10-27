import { useState } from "react";

function Student(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Practical</h1>

      <h2>Props Example</h2>
      <Student name="Saransh" />
      <Student name="rahul" />

      <hr />

      <h2>State Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;