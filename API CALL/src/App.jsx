// import React from "react";
// import axios from "axios";

// const App = () => {
//   async function apiCall() {
//     const response = await axios.get(
//       "https://official-joke-api.appspot.com/random_joke"
//     );
//     // const data = await response.json();
//     console.log get(response);
//   }

//   return (
//     <div>
//       <h1>Joke API</h1>
//       <button onClick={apiCall}>Api Call</button>
//     </div>
//   );
// };
// export default App;


// // import React from "react";
// // const App = () => {
// // async function apiCall() {
// // const response await fetch(
// // "https://official-joke-api.appspot.com/random_joke"
// // );
// // console.log(response);
// // }
// // return (
// // <div>
// // 1
// // <h1>Joke API</h1>
// // <button onClick={apiCall}>Api Call</button
// // </div>
// // );
// // };
// // export default App;


import React from "react";
import axios from "axios";

const App = () => {
  async function apiCall() {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  }

  return (
    <div>
      <h1>Joke API</h1>
      <button onClick={apiCall}>Api Call</button>
    </div>
  );
};

export default App;


