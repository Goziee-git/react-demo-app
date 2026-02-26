# Components Directory Structure

This directory contains all React components organized into separate files for better maintainability and understanding.

## File Structure

```
src/components/
├── index.js              # Central export file (barrel export)
├── Navbar.jsx            # Navigation bar component
├── Card.jsx              # Card wrapper (props.children example)
├── InfoBox.jsx           # Info box with colored border (props.children)
├── Car.jsx               # Car details table (props example)
├── Student.jsx           # Student information
├── Countries.jsx         # Countries with conditional rendering
├── Vehicle.jsx           # Vehicle with array props
├── Fruits.jsx            # Fruits with array of objects
├── Person.jsx            # Person examples (destructuring demos)
├── Counter.jsx           # Counter with event handlers
├── InteractiveCard.jsx   # Interactive card with hover/click events
└── ContactForm.jsx       # Contact form with form events
```

## Component Categories

### 1. Layout Components
- **Navbar.jsx** - Top navigation bar
- **Card.jsx** - Reusable card wrapper (demonstrates props.children)
- **InfoBox.jsx** - Information box with colored border (demonstrates props.children)

### 2. Data Display Components
- **Car.jsx** - Displays car information in a table
  - Exports: `Car` (with props), `CarDestructured` (with destructuring)
- **Student.jsx** - Displays student information
- **Countries.jsx** - Shows country with conditional rendering
- **Vehicle.jsx** - Displays vehicle brands and info (array props)
- **Fruits.jsx** - Displays fruits list and details (array of objects)

### 3. Example Components (Learning)
- **Person.jsx** - Demonstrates three ways to handle props:
  - `Person` - Without destructuring
  - `PersonDestructured` - With destructuring in parameters
  - `PersonDestructuredInside` - With destructuring inside function

### 4. Interactive Components (Events)
- **Counter.jsx** - Demonstrates onClick and onDoubleClick events
- **InteractiveCard.jsx** - Demonstrates onMouseEnter, onMouseLeave, onClick
- **ContactForm.jsx** - Demonstrates form events (onSubmit, onChange, onFocus, onBlur)

## How to Import Components

### Method 1: Import from index.js (Recommended)
```javascript
import { Car, Student, Navbar } from './components'
```

### Method 2: Import directly from file
```javascript
import { Car } from './components/Car'
import { Student } from './components/Student'
```

## Component Usage Examples

### Basic Component
```javascript
<Car name="Audi" color="blue" model="V8x" engine="H200p" price="$2000000"/>
```

### Component with props.children
```javascript
<Card title="My Title">
  <p>This content goes inside the card</p>
  <Car name="Audi" color="blue" />
</Card>
```

### Component with array props
```javascript
const brands = ["Audi", "Toyota", "Volvo"];
<Vehicle brands={brands} info={{ year: 2025, speed: "30km/hr" }} />
```

### Interactive Component
```javascript
<Counter />
<InteractiveCard title="Click Me">
  <p>Hover and click to see events in action</p>
</InteractiveCard>
```

## Benefits of This Structure

1. **Separation of Concerns**: Each component has its own file
2. **Easy to Find**: Component names match file names
3. **Better Maintainability**: Changes to one component don't affect others
4. **Cleaner Imports**: Use the index.js barrel export
5. **Better Understanding**: Each file focuses on one component's logic
6. **Easier Testing**: Can test components in isolation
7. **Team Collaboration**: Multiple developers can work on different components

## Adding New Components

1. Create a new file in `src/components/` (e.g., `MyComponent.jsx`)
2. Write your component:
```javascript
export function MyComponent({ prop1, prop2 }) {
  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}
```
3. Add export to `index.js`:
```javascript
export { MyComponent } from './MyComponent'
```
4. Import in App.jsx:
```javascript
import { MyComponent } from './components'
```

## Component Naming Conventions

- **File names**: PascalCase (e.g., `MyComponent.jsx`)
- **Component names**: PascalCase (e.g., `function MyComponent()`)
- **Props**: camelCase (e.g., `userName`, `isActive`)
- **Event handlers**: camelCase with "handle" prefix (e.g., `handleClick`, `handleSubmit`)

## Related Documentation

- See `PROPS_DESTRUCTURING_EXAMPLE.md` for props destructuring patterns
- See `PROPS_CHILDREN_EXAMPLE.md` for props.children usage
- See `REACT_EVENTS_EXAMPLE.md` for event handling patterns
