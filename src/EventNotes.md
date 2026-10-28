React Events

1. What Are Events?

Events are actions that occur when a user interacts with an application, such as clicking a button, typing into an input, or submitting a form.

React allows us to handle these interactions using event handlers.

2. Example: Click Event

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
export default App;

Explanation

* handleClick is the event handler function.
* onClick is the React event prop.
* When the button is clicked, React calls handleClick.
* The alert displays a message.

3. Common React Events

Event	Purpose
onClick	Handles mouse clicks
onChange	Handles changes to an input
onSubmit	Handles form submission
onMouseOver	Handles the mouse moving over an element
onKeyDown	Handles a key being pressed

4. Example: Input Event

function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Enter your name"
    />
  );
}
export default App;

Explanation

* onChange runs when the input value changes.
* event contains information about the event.
* event.target.value accesses the current input value.

5. Important Rules

1. React event names use camelCase, such as onClick.
2. Pass a function to an event handler: onClick={handleClick}.
3. Do not call the function immediately with onClick={handleClick()} unless you specifically intend to execute it during rendering.
4. Event handlers let applications respond to user interactions.

6. Events vs State

* Events detect or respond to user interactions.
* State stores changing data.
* Events can update state, which can cause React to re-render the UI.