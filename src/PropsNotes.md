React Props

1. What are Props?

Props (short for properties) are used to pass data from a parent component to a child component in React.

2. Example

function Student(props) {
  return <h2>Hello, {props.name}!</h2>;
}
function App() {
  return (
    <div>
      <Student name="Saransh" />
      <Student name="Rahul" />
    </div>
  );
}
export default App;

3. How Props Work

* App is the parent component.
* Student is the child component.
* name="Saransh" passes a value to the child.
* props.name accesses the value inside the child component.

4. Important Rules

1. Props are passed from parent to child.
2. Props are read-only.
3. The same component can display different data using different props.
4. Props help make components reusable.

5. Props vs State

Props	State
Passed from a parent component	Managed within a component
Read-only to the receiving component	Updated using a setter function
Used to pass data	Used to manage changing data