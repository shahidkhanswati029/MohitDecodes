export const reactCourse = {
  title: 'React Mastery - 50 Day Course',
  sections: [
    {
      id: 'day-1',
      title: 'Day 1 - Introduction to React',
      content: `
React is a JavaScript library developed by Facebook for building interactive UIs.

### Key Concepts:
- Component-Based
- Declarative Syntax
- Unidirectional Data Flow
- Virtual DOM

### Why React?
- Reusable components
- Fast rendering via Virtual DOM
- Large ecosystem

### Setup with Vite:
\`\`\`bash
npm create vite@latest react-app --template react
cd react-app
npm install
npm run dev
\`\`\`

### Your First Component
\`\`\`jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
\`\`\`

Then render it in \`App.jsx\`:

\`\`\`jsx
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
\`\`\`
      `.trim()
    },
    {
      id: 'day-2',
      title: 'Day 2 - Understanding JSX',
      content: `
JSX stands for JavaScript XML. It's a syntax extension that allows mixing HTML-like code with JavaScript.

### JSX Basics
- Expressions must be inside \`{}\`
- Components must return a single root element

\`\`\`jsx
const name = "React";
const element = <h1>Hello, {name}!</h1>;
\`\`\`

### Common Pitfalls
- Use \`className\` instead of \`class\`
- Self-closing tags must be closed (\`<img />\`)

### Return only one element
\`\`\`jsx
function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is valid.</p>
    </div>
  );
}
\`\`\`

Or use React fragments:
\`\`\`jsx
<>
  <h1>Welcome</h1>
  <p>This is also valid.</p>
</>
\`\`\`
      `.trim()
    },
    {
      id: 'day-3',
      title: 'Day 3 - Components and Props',
      content: `
Components are reusable UI blocks. Props are inputs passed to components.

### Function Component
\`\`\`jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### Using Props
\`\`\`jsx
<Greeting name="Alice" />
<Greeting name="Bob" />
\`\`\`

### Destructuring Props
\`\`\`jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
\`\`\`
      `.trim()
    },
    {
      id: 'day-4',
      title: 'Day 4 - State and useState Hook',
      content: `
State allows React components to change their output over time.

### useState Hook
\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### Rules of Hooks
- Only call Hooks at the top level
- Only call Hooks from React functions
      `.trim()
    },
    // Add more up to Day 50 following this format...
  ]
};
