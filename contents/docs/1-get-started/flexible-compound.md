---
title: 6.Flexible Compound Components
root: "/docs"
parents: ["Get Started"]
---
# Flexible Compound Components

* This is better version of compound components which makes use of context API and compound component together. This will work even if your order of component changes (which is quite often). This will basically allow user to have more flexibility by using React context to share the implicit state to our child components. We will start with defining childContextTypes, providing the value with getChildContext, and, on each of the components that need that context, we define contextTypes so that React will pass the context that is being asked for. This is more flexible than just using compound components.

* The first step is to create RadioGroupContext

```jsx

const RadioGroupContext = React.createContext();

```

Lets create RadioGroupConsumer.  The consumer component are basically designed in a way that they use render prop inorder to work.

```jsx

function RadioGroupConsumer(props) {
  return (
    <RadioGroupContext.Consumer {...props}>
      {context => {
        if (!context) {
          throw new Error(
            `RadioGroupConsumer compound components cannot be rendered & this is childish`
          );
        }
        return props.children(context);
      }}
    </RadioGroupContext.Consumer>
  );
}

```
In App component, each children will share the state through its context

```jsx

 render() {
    return (
      <div>
        <h1>ReactJS Girls</h1>
        <h2>Javascript technologies: {this.state.radioValue}</h2>
        <RadioGroup onChange={radioValue => this.setState({ radioValue })}>
          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <div>
                <RadioOption
                  value="React"
                  onClick={() => onSelect("React")}
                  isSelected={value === "React"}
                >
                  React
                </RadioOption>
              </div>
            )}
          </RadioGroupConsumer>
          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <RadioOption
                value="Vue"
                onClick={() => onSelect("Vue")}
                isSelected={value === "Vue"}
              >
                Vue
              </RadioOption>
            )}
          </RadioGroupConsumer>

          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <RadioOption
                value="Angular"
                onClick={() => onSelect("Angular")}
                isSelected={value === "Angular"}
              >
                Angular
              </RadioOption>
            )}
          </RadioGroupConsumer>

          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <RadioOption
                value="Node"
                onClick={() => onSelect("Node")}
                isSelected={value === "Node"}
              >
                Node
              </RadioOption>
            )}
          </RadioGroupConsumer>
        </RadioGroup>
      </div>
    );
  }

```



