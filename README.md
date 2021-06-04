# OVERVIEW

This is a simple react tree component, created by Jose Miguel Chaves as a MallorcaBootCamp challenge.

This tree component it can be infinite, it's also collapsible. It will show an arrow where its children, if there's no children will not show anything.

![React Tree Component](https://media.giphy.com/media/Bl53NIBGBNQUSVJsaO/giphy.gif)

---

# INSTALLATION

`npm i @josemichaves/react-tree-component`

# USAGE

`import {TreeComponent} from "josemichaves@treecomponent"`

In order to use this tree component you need to call the Tree Component, and pass an array of objects to display.

`<TreeComponent data={data} />`

The data should have this format:

```
[
  {
    name: 'Parent 1',
    children: [{ name: 'Children 1-1' }, { name: 'Children 1-2' }],
  },
  {
    name: 'Parent 2',
    children: [
      { name: 'Children 2-1' },
      { name: 'Children 2-2', children: [{ name: 'Children 2-2-1' }] },
    ],
  },
  {
    name: 'Parent 3',
    children: [
      {
        name: 'Children 3-1'
      },
    ],
  },
];

```

---

# Right Content property

You can also pass an right content property to the array of objects that you want to be displayed, you can put JSX inside, and will show this JSX at the right of the entry.

```
[
  {
    name: 'Parent 3',
    rightContent: <img src="./image.png" alt="" />
    children: [
      {
        name: 'Children 3-1',
        rightContent: <span> I'm the children of Children 3-1 </span>,
      },
    ],
  },
];
```

# Syntax

| Key          | Value                                                                    | Type             |
| ------------ | ------------------------------------------------------------------------ | ---------------- |
| name         | The name of the parent you want to display.                              | string           |
| children     | An array of objects that will be displayed as children.                  | array of objects |
| rightContent | JSX or whatever you need that can be displayed at the right of an entry. | JSX or string    |

# Testing

This Tree Component has unit testing built in, this tests ensure that this Tree Component will work in the way it should.

`npm test`

or

`yarn test`

---

# OTHER SOURCES

You can give it a ★ in [GitHub](https://github.com/JosemiChaves9/react-tree-component!)
