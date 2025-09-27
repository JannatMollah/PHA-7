### ✅ Q&A: 

1. **What is JSX, and why is it used?**
- **JSX => JavaScript XML**. It is a syntax extension for JavaScript used in React. It allows to write HTML-like code inside JavaScript.
- **It is Used for:**
  - Makes UI code easier to read and write.
  - Provides full JavaScript power inside markup.

2. **What is the difference between State and Props?**
- **State**
  - A component’s own internal data, managed within the component.
  - Mutable => can be updated using setState or useState.
- **Props**
  - Short for properties, used to pass data from parent to child.
  - Immutable => cannot be changed by child component.
3. **What is the useState hook, and how does it work?**
 - **useState** is a React Hook that allows functional components to have state. It returns two values 1) Current State 2) A function to update that state. Each time setCount is called, React re-renders the component with the updated state. 
4. **How can you share state between components in React?**
 - Props (Lifting State Up): Place the state in a common parent and pass it down to children as props.
 - Context API: Useful for sharing data globally (e.g., theme, authentication).
5. **How is event handling done in React?**
 - React uses camelCase syntax for event handlers and passes functions instead of strings. Example: In React: onClick={doSomething}

---