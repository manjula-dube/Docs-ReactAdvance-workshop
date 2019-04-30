---
title: 3.useReducer Hook
root: "/docs"
parents: ["Hooks"]

---

&nbsp;
&nbsp;

```jsx

const [state, dispatch] = useReducer(reducer, initialState);

```

* An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

####  useState v/s useReducer
* useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

## Lets build WishList Store
*WishList store is a store that keeps a log of your's wishlist. You can add or remove your wishlist.*

* First we need to import the two hooks:

```jsx

import React, { useReducer, useRef } from 'react'

```

* Then create a component that sets up a ref and a reducer. The ref will hold a reference to a form input, so that we can extract its value of your wish list. (We could also manage the input with state, passing the value and onChange props as usual, but this is a good chance to show off the useRef hook!)

```jsx

function wishList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // do something with the action
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

```

* Notice that our “state” in this case is an array. We’re initializing it to an empty array (the second argument to useReducer) and will be returning an array from the reducer function soon.

### The useRef Hook

The useRef hook allows you to create a persistent ref to a DOM node. Calling useRef creates an empty one (or you can initialize it to a value by passing an argument). The object it returns has a property current, so in the example above we can access the input’s DOM node with inputRef.current. If you’re familiar with React.createRef(), this works very much the same.

### Lets get back the useReducer hook

* We’ve wrapped the input with a form so that pressing Enter will trigger the submit function. Now need to write the handleSubmit function that will add an item to the list, as well as handle the action in the reducer.

```jsx

function wishList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    inputRef.current.value = '';
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    
  }

  return (
    // ... same ...
  );
}


```

* When the reducer gets the “add” action, it returns a new array that includes all the old elements, plus the new one at the end.

##### One thing to note here is We’re using the length of the array as a sort of auto-incrementing (ish) ID. This works for our purposes here, but it’s not a great idea for a real app because it could lead to duplicate IDs, and bugs. (better to use a library like uuid or let the server generate a unique ID!)

* The handleSubmit function is called when the user presses Enter in the input box, and so we need to call preventDefault to avoid a full page reload when that happens. Then it calls dispatch with an action. In this app, we’re deciding to give our actions a more Redux-y shape – an object with a type property and some associated data. We’re also clearing out the input.

#### Now lets add remove 

```jsx

 case 'remove':
// keep every item except the one we want to remove
  return state.filter((_, index) => index != action.index)

```

Inside return we have added a X button so that we can click on it and remove the wishlist from our store

```jsx

 return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => dispatch({ type: 'remove', index })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );

```

#### Exercise: Clear the List

* We’ll add one more feature: a button that clears the wish list. This one is an exercise!

* Insert a button above the <ul> and give it an onClick prop that dispatches an action with type “clear”. Then, add a case to the reducer that handles the “clear” action.








