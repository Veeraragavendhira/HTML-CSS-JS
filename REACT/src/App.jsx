// import { useState } from "react";


// function Counter() {
//   const [count, setCount] = useState(1)
//    console.log(count); 
//   return (
//     <div>
//       <h1>Hello, this is {count}</h1>
//       <button onClick={() => setCount(count + 10)}>Click me Add 1</button>
//     </div>
//   );

  
// }
// export default Counter;

// import { useState } from "react";
// function App() {
//   const [name, setName] = useState("name");
//   return (
//     <>
//       <input
//         name="INPUT"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter your name"
//       />
//       <h2>Hello {name} hOW ARE YOU  </h2>
//     </>
//   );
// }
// export default App;


// import { useEffect } from 'react';

// useEffect(() => {
//   // Your side-effect code goes here

//   return () => {
//     // Optional cleanup function goes here
//   };
// }, [dependencies]); // Optional dependency array





// import { useEffect, useState } from 'react';
// import { createRoot } from 'react-dom/client';
// function Timer() {
//   const [count, setCount] = useState((0));
// useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 100);
//     }, 1000);
//   });

//   return <h1>I've rendered {count} times!</h1>;
// }

// createRoot(document.getElementById('root')).render(
//   <Timer />
// );

// export default Timer;


import { Route } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

export default App;