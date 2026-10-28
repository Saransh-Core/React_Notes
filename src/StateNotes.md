React State

1. What is State?

State is data managed inside a React component that can change over time. When state changes, React updates the UI.

2. Example

import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
export default Counter;

3. Important Terms

* useState(0): Initializes the state with a value of zero.
* count: Holds the current state value.
* setCount: Updates the state.
* React re-renders the component when its state changes.

4. Rules

1. State belongs to a component.
2. Use the setter function to update state.
3. Do not modify state directly.
4. State changes can trigger a re-render.

5. Props vs State

* Props pass data from parent to child.
* State stores data managed by a component.


 Hooks - To use React feature we have to use hooks
 * 1.  useState - when state change then react tirgger re-render.
 * 2 . useState return a array of two values
 * 3. first refers a current value second value is for update the state.
 */
export default App;