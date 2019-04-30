---
title: 4. useContext
root: "/docs"
parents: ["Hooks"]

---
&nbsp;
&nbsp;


## The Standard Way of using context in React 

* The typical way to use the Context API looks like this:

```jsx

import React from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

```

##### Here’s the example on CodeSandbox.

## The useContext Way

* Let’s rewrite the Display using the new useContext hook and see what it looks like:

```jsx

// import useContext (or we could write React.useContext)
import React, { useContext } from 'react';

// ...

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}

```

* That’s all there is to it. Call useContext, pass in the context object you got from React.createContext, and out pops the value. Easier to read, right?

The only thing you want to watch out for is that you have to pass the whole context object to useContext – not just the consumer! React will warn you if you forget, but try to rememeber, eh?