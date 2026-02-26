# React Props Destructuring - Complete Guide

## What is Props Destructuring?

Props destructuring is a JavaScript ES6 feature that allows you to extract properties from the props object directly in the function parameters, making your code cleaner and easier to read.

---

## Method 1: WITHOUT Destructuring (Traditional Way)

```javascript
export function Person(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

// Usage in App.jsx
<Person name="John" age="25" city="New York" />
```

**How it works:**
- You receive `props` as a parameter
- Access each property using `props.propertyName`
- Must type `props.` every time

---

## Method 2: WITH Destructuring (In Parameters)

```javascript
export function PersonDestructured({ name, age, city }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Usage in App.jsx (same as before)
<PersonDestructured name="John" age="25" city="New York" />
```

**How it works:**
- You destructure props directly in the function parameters: `{ name, age, city }`
- Use variables directly without `props.`
- Cleaner and more readable code

---

## Method 3: Destructuring INSIDE the Function

```javascript
export function PersonDestructuredInside(props) {
  // Destructure at the top of the function
  const { name, age, city } = props;
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}
```

**How it works:**
- Receive `props` as parameter
- Destructure inside the function body
- Useful when you need the full props object AND individual properties

---

## Real Example from Your Code

### Before (Without Destructuring):
```javascript
export function Car(props) {
  return (
    <table>
      <tr>
        <td>Car Name</td>
        <td>{props.name}</td>
      </tr>
      <tr>
        <td>Model</td>
        <td>{props.model}</td>
      </tr>
      <tr>
        <td>Color</td>
        <td>{props.color}</td>
      </tr>
    </table>
  );
}
```

### After (With Destructuring):
```javascript
export function Car({ name, model, color, engine, price }) {
  return (
    <table>
      <tr>
        <td>Car Name</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td>Model</td>
        <td>{model}</td>
      </tr>
      <tr>
        <td>Color</td>
        <td>{color}</td>
      </tr>
    </table>
  );
}
```

---

## Destructuring with Arrays (Your Fruits Example)

### Without Destructuring:
```javascript
export function Fruits(props) {
  return (
    <ul>
      <li>{props.fruits[0]}</li>
      <li>{props.fruits[1]}</li>
    </ul>
  );
}
```

### With Destructuring:
```javascript
export function Fruits({ fruits, fruitDetails }) {
  return (
    <ul>
      <li>{fruits[0]}</li>
      <li>{fruits[1]}</li>
    </ul>
  );
}
```

---

## Benefits of Destructuring

1. **Cleaner Code**: No need to repeat `props.` everywhere
2. **Easier to Read**: You can see exactly what props the component expects
3. **Less Typing**: Shorter variable names
4. **Better for Refactoring**: Easier to see which props are used

---

## When to Use Each Method

**Use WITHOUT destructuring when:**
- You have many props (10+)
- You need to pass the entire props object to another component
- You're just learning React

**Use WITH destructuring when:**
- You have a few specific props (2-8)
- You want cleaner, more readable code
- You're working on a professional project

---

## Key Takeaway

Both methods work exactly the same way! Destructuring is just syntactic sugar that makes your code cleaner.

```javascript
// These are IDENTICAL:
function Component(props) { return <p>{props.name}</p>; }
function Component({ name }) { return <p>{name}</p>; }
```
