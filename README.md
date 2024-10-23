# 🌍 Country Media Project
A simple React app that displays information about countries and lets users mark countries they have visited. The app fetches country data from an external API and displays various details about each country, such as its name, population, start of the week, and whether it's landlocked. Users can also mark countries as visited, and the visited countries will be displayed separately.


## **🛠️ React Concepts Used in This Project**

### **1. useState Hook**
- The `useState` hook is used to manage state within functional components.
- In the `Country` component, `useState` is used to toggle the `visited` status of a country.
- In the `Countries` component, `useState` is used to manage the list of countries fetched from the API (`data`) and the list of visited country flags (`Flag`).

### **2. useEffect Hook**
- The `useEffect` hook is used to handle side effects in functional components.
- In the `Countries` component, `useEffect` is used to fetch data from the REST Countries API when the component mounts. This ensures the API call is made only once when the component is rendered.

### **3. Props**
- Props are used to pass data between components.
- The `Country` component receives the `country` object and the `visitedFlag` function as props from the `Countries` component.
- This allows the `Country` component to display individual country information and inform the `Countries` component when a country is visited.

### **4. Conditional Rendering**
- Conditional rendering is used to display different content based on a component’s state.
- In the `Country` component, the text "Nice Country" is conditionally displayed when a country is marked as visited.
- The button label also reflects the visited status using the `visited` state.

### **5. Array Methods**
- Various array methods (`map`, `find`) are used to work with lists of data.
- In the `Countries` component, the `map` function is used to render each country in the list of countries fetched from the API.
- The `find` method is used in the `visitedFlag` function to check if a country has already been visited.

### **6. CSS Styling**
- Basic CSS styling is applied to components via external stylesheets (`Country.css` and `style.css`).
- Conditional class names are used in the `Country` component, such as `vdesign` when the country has been visited.

### **7. JSX**
- JSX (JavaScript XML) is used throughout the project to define the UI in a syntax that looks similar to HTML.
- JSX is used to structure the layout of both the `Country` and `Countries` components, including rendering the country's name, flag, population, and other information.

