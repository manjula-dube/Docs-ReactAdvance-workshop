---
title: 3. Higher Order Component
root: "/docs"
parents: ["Get Started"]
---
# Higher Order Components

### What are Higher Order Components

Higher order components are a pattern in which a function accepts a component and returns an enhanced version of the component by injecting the required props.

### What is so special about this pattern

HOC's are a pattern used a lot. The most common being the `connect` method of `react-redux` or `withRouter` of `react-router-dom`. This pattern wraps the given Component and returns the same component just by adding extra props to it. This type of function should be pure as it cannot modify the original component, just enhance it.

### Example

This example demonstrates how we can use the Fetch API as a higher order component.

Lets first build the HOC component which handles loading,data and error state

```jsx

const fetchHOC = ({ url }) => C =>
  class extends Component {
    state = {
      loading: false,
      data: null,
      error: null
    }

    async componentDidMount() {
      try {
        this.setState({ loading: true })
        let response = await fetch(url)
        response = await response.json()
        this.setState({ data: response })
      } catch (error) {
        this.setState({ error })
      } finally {
        this.setState({ loading: false })
      }
    }

    render() {
      return <C {...this.props} {...this.state} />
    }
  }

export default fetchHOC

```

After this lets pass component to the function. That is a function thats accepts a component

```jsx

let App = ({ loading, data, error }) => {
  if (loading) return <div>Loading ...</div>
  if (data) {
    return (
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    )
  }
  return null
}

App = fetchHOC({ url: 'https://jsonplaceholder.typicode.com/users' })(App)


```

Now lets render the UI using the below code

```jsx

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```


###  Drawbacks of HOC
The drawback to HOC's is prop-collision. A component wrapped with two or more higher order methods could have props of the same name and any one of those could be overriden. This is where render-props comes to the rescue.

For prop-collision lets take the same example as the one in the example section. What if instead of one set of data, I have to render two sets of data, which means I need two fetch hoc's.

The code will be something like this -

```jsx
let App = fetchHOC({ url: 'my-url-1' })(App)
App = fetchHOC({ url: 'my-url-2' })(App)
```

The data prop being the same will cause just one set of data to be displayed, which is incorrect. Now take a look at the render-prop example and see for yourself that this case can be easily handled.

 ### Codesandbox example
# [Fetch using HOC](https://codesandbox.io/s/734060mlm6)
