# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

1. **What is JSX, and why is it used?**
- **JSX => JavaScript XML**. It is a syntax extension for JavaScript used in React. It allows to write HTML-like code inside JavaScript.
- **It is Used for:**
  - Makes UI code easier to read and write.
  - Provides full JavaScript power inside markup.

2. **What is the difference between State and Props?**
- **State**
  - A component’s own internal data, managed within the component.
  - Mutable => can be updated using setState or useState.
  - 
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

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 


---


