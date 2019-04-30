---
title: 2.useEffect Hook
root: "/docs"
parents: ["Hooks"]

---

&nbsp;
&nbsp;

## True feelings on useEffect

* How do I replicate componentDidMount with useEffect?
* 🤔 How do I correctly fetch data inside useEffect? What is []?
* 🤔 Do I need to specify functions as effect dependencies or not?
* 🤔 Why do I sometimes get an infinite refetching loop?
* 🤔 Why do I sometimes get an old state or prop value inside my effect?

#### Data Fetching with React Hooks

* Lets see what cats have to say for Hooks, Today we build something that accepts what cats have to say as query params

* https://cataas.com/cat/says/{'type your name here'}

* Lets start build a functional component that makes use of both useState and useEffect hook

* Create a file name useYourApi.js

```jsx

import { useState, useEffect } from "react";

export let useYourApi = (api, params) => {
  let [state, setState] = useState({});

  useEffect(
    () => {
      setState({ loading: true });

      api(params)
        .then(data => setState({ data, loading: false }))
        .catch(error => setState({ error, loading: false }));
    },
    [params]
  );

  return [state];
};

```

Lets use this api now, in index.js file do the following

```jsx

let catsApi = text =>
  fetch(`https://cataas.com/cat/says/${text}`).then(r => r.url);

function App() {
  let [query, setQuery] = useState("React Hooks are awesome!");
  let [{ data: catImg, loading }] = useYourApi(catsApi, query);

  return (
    <div className="App">
      <h1>
        <a href="https://cataas.com/">cataas.com</a> with react hooks
      </h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(e.target.query.value);
        }}
      >
        <input placeholder="Cat says..." type="text" name="query" />
        <button>Submit</button>
      </form>

      <br />
      {loading ? "Loading..." : <img src={catImg} alt={query} />}
    </div>
  );
}

```


