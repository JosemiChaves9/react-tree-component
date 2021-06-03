# OVERVIEW

This is a simple react tree component, created by Josemi Chaves as a MallorcaBootCamp challenge.
This tree component it can be infinite, it's also collapsible. It will show an arrow where its children, if there's no children will not show anything

---

# INSTALLATION

`npm i josemichaves@react-tree-component`

---

# USAGE

`import TreeComponent from "josemichaves@treecomponent"`

In order to use this tree component you need to pass an array of objects with the following format.

```
[
  {
    "name": "name of parent",
    "children": [
      {"name": "name for children 1-1"},
      {"name": "name for children 1-2"}
    ]
  },
  {
    "name": "name of parent 2",
    "children": [
      {"name": "name of subParent 2",
        "children": [
          { "name": "name of children 2-1"},
          { "name": "name of children 2-2"}
        ]
      }
    ]
  },
  {"name": "name of parent 3"}
]
```

---

# Alerts

You can also pass an alert property to the array of objects that you want to be displayed, whatever text you put inside this alert, will be shown in a tooltip on the right of the specified text.

```
[
  {
    "name": "name of parent",
    "children": [
      {
        "name": "name for children 1-1"
      },
      {
        "name": "name for children 1-2",
        "alert": "This entry doesn't work yet"
      }
    ]
  }
]
```

# Testing

`npm test`

or

`yarn test`

---

# OTHER SOURCES

You can give it a ★ in [GitHub](https://github.com/JosemiChaves9/react-tree-component!)
