---
title: 5.Compound Components
root: "/docs"
parents: ["Get Started"]
---

&nbsp;
&nbsp;

# Compound Components

### What are Compound Components?

Compound Component is a pattern in React where a component doesn't work by itself and needs other specific components to be its children or parents in order to operate. But they still have the control to do lot of stuff on them :)
It is a pattern in which components are used together such that they share an implicit state that let’s them communicate with each other in the background.

> Think of compound components like the ```<select>``` and ```<option>``` elements in HTML. Apart they don't do too much, but together they allow you to create the complete experience — [Kent C. Dodds.](https://twitter.com/kentcdodds)

### What is so special about this pattern

Compound Component allows us as a developer to have a full control over the rendering behavior, that gives us, ability to decide in what order the component should render. 

Compound Component also reduces the tension of passing tons & tons of configuration as a prop.
Take a look at the documentation for semantic-ui-react, their Form component is all about Compound Component.

```jsx
import { Form } from 'semantic-ui-react'

const Usage = () => (
  <Form>
    <Form.Group>
      <Form.Input />
      <Form.Select />
      <Form.Button />
    </Form.Group>
  </Form>
)

```


### Code Sandbox Example

Below is an example of grouping the RadioButton highly inspired by [semantic-ui-react](https://react.semantic-ui.com/collections/form/)

Lets start building a group of radio buttons. First lets start with creating a simple component with some basic stuff

```jsx

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: "React"
    };
  }

  render() {
    return (
      <div>
        <h1>ReactJS Girls</h1>
        <h2>Javascript technologies: {this.state.radioValue}</h2>
      </div>
    );
  }
}


```
Lets add RadioGroup and RadioOption

```jsx

 <RadioGroup onChange={radioValue => this.setState({ radioValue })}>
    <RadioOption value="React">React</RadioOption>
    <RadioOption value="Angular">Angular</RadioOption>
    <RadioOption value="Node">Node</RadioOption>
    <RadioOption value="Vue">Vue</RadioOption>
    <RadioOption value="CSS">CSS</RadioOption>
</RadioGroup>

```

Now lets create RadioGroup Component

```jsx
class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  select(value) {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isSelected: child.props.value === this.state.value,
        onClick: () => this.select(child.props.value)
      });
    });

    return <div>{children}</div>;
  }
}


```

Lets create RadioOption now 

```jsx
const RadioOption = props => {
  return (
    <div onClick={props.onClick}>
      <div
        style={{
          borderColor: "#ccc",
          borderSize: "3px",
          borderStyle: props.isSelected ? "inset" : "outset",
          height: 16,
          width: 16,
          display: "inline-block",
          cursor: "pointer",
          background: props.isSelected ? "rgba(0, 0, 0, 0.05)" : ""
        }}
        isSelected={props.isSelected}
      />
      {props.children}
    </div>
  );
};
```


[Grouping the radio buttons](https://codesandbox.io/s/z32mw29474)

