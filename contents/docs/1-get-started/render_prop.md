---
title: 4. Render Prop
root: "/docs"
parents: ["Get Started"]
---
# Render props

### What are render props

Render props are simply props that accept a function.

### What is so special about this pattern

Render props separate logic from the UI. The component that implements the logic doesn't decide how the UI is rendered, which is why I like this pattern a lot. The other reason is how easy it is to make the entire component declarative by just rendering what you need.

We can easily extend the API of our component and access only the logic required for rendering the UI. This makes render props more flexible as compared to Higher Order Components.

Also almost all patterns implemented using HOC's can be easily converted to the Render Prop pattern.

### Example

This is a simple example of how the imperative fetch API can be converted into a declarative one (inspired by Apollo's Query component).

The only thing which changes is in the render method

```jsx

render() {
    return this.props.render({ ...this.state });
  }

```

### Pass a component to a render prop in the index.js file

```jsx

  function App() {
  return (
    <div className="App">
      <Fetch
        url="https://jsonplaceholder.typicode.com/users"
        render={({ loading, data, error }) => {
          if (loading) return <p>Loading ...</p>;
          if (data) {
            return (
              <ul>
                {data.map(user => (
                  <li key={user.id}>
                    {user.name} ({user.email})
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        }}
      />
    </div>
  );
} 

```



[Fetch using render props](https://codesandbox.io/s/9yzwmkj7kp)
