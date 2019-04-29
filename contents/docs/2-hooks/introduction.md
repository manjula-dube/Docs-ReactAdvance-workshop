---
title: 1.Introduction to Hooks
root: "/docs"
parents: ["Hooks"]

---

# Hooks

### What are hooks ?

Hooks are a new feature proposal that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha and being discussed in an open RFC.

### What is so special about hooks?

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

* An example of this can be the useState hook. With this hook you no-longer would need a class component to maintain state.
* A functional component with useState hook can maintain state and also perform some side-effects like data-fetching using another well known hook called as useEffect

#### Lets start with a very small example for *useState*

```jsx

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```