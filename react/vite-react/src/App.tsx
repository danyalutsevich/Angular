import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Bio from "./components/Bio";
import FamousPainting from "./components/FamousPainting";
import PaintingCollection from "./components/PaintingCollection";
import PaintingDetails from "./components/PaintingDetails";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Bio</Link>
            </li>
            <li>
              <Link to="/famous-painting">Famous Painting</Link>
            </li>
            <li>
              <Link to="/painting-collection">Painting Collection</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={Bio} />
          <Route path="/famous-painting" Component={FamousPainting} />
          <Route path="/painting-collection" Component={PaintingCollection} />
          <Route path="/painting/:id" Component={PaintingDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// import "./App.css";
// // import Message from "./components/Message";
// // import Service from "./components/Service";
// // import Car from "./components/Car";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   BrowserRouter,
// } from "react-router-dom";
// import CityPhotos from "./components/CityPhotos";
// import MainAttraction from "./components/MainAttraction";
// import OtherAttractions from "./components/OtherAttractions";
// import CityInfo from "./components/CityInfo";

// function Book() {
//   const title = "1984";
//   const author = "George Orwell";
//   const genre = "Dystopian";
//   const year = 1949;
//   const recensions = "a lot";
//   const styles = {
//     border: "2px solid white",
//     backgroundColor: "black",
//   };
//   return (
//     <div style={styles}>
//       <h1>{title}</h1>
//       <h3>{author}</h3>
//       <h3>{genre}</h3>
//       <h3>{year}</h3>
//       <h3>{recensions}</h3>
//     </div>
//   );
// }

// function Band() {
//   const title = "Imagine Dragons";
//   const genre = "Indie rock";
//   const year = 2008;
//   const styles = {
//     border: "2px solid white",
//     backgroundColor: "black",
//   };

//   return (
//     <div style={styles}>
//       <h1>{title}</h1>
//       <h3>{genre}</h3>
//       <h3>{year}</h3>
//     </div>
//   );
// }

// function Dish() {
//   const title = "Borsch";
//   const ingredients =
//     "beet, cabbage, carrot, potato, onion, garlic, tomato, meat";
//   const styles = {
//     border: "2px solid white",
//     backgroundColor: "black",
//   };
//   return (
//     <div style={styles}>
//       <h1>{title}</h1>
//       <h3>Ingridients: {ingredients}</h3>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Информация о городе</Link>
//             </li>
//             <li>
//               <Link to="/main-attraction">
//                 Самая известная достопримечательность
//               </Link>
//             </li>
//             <li>
//               <Link to="/other-attractions">Другие достопримечательности</Link>
//             </li>
//             <li>
//               <Link to="/photos">Фотографии города</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/">
//             <CityInfo />
//           </Route>
//           <Route path="/main-attraction">
//             <MainAttraction />
//           </Route>
//           <Route path="/other-attractions">
//             <OtherAttractions />
//           </Route>
//           <Route path="/photos">
//             <CityPhotos />
//           </Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export { App };

// // function App() {
// // <>
// //   <div>
// //     <a href="https://vitejs.dev" target="_blank">
// //       <img src={viteLogo} className="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://react.dev" target="_blank">
// //       <img src={reactLogo} className="logo react" alt="React logo" />
// //     </a>
// //   </div>
// //   <h1>{import.meta.env.VITE_APP_TITLE}</h1>
// //   <div className="card">
// //     <Car />
// //     <button onClick={() => setCount((count) => count + 1)}>
// //       count is {count}
// //     </button>
// //     <Book />
// //     <Band/>
// //       <Dish/>
// //
// //   </div>
// //     {/*<p>*/}
// //     {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
// //     {/*</p>*/}
// //   {/*<Message data={count} text="I am Message Component" />*/}
// //   {/*<Service newtext="I am Sevice Component" />*/}
// // {/*  <p className="read-the-docs">*/}
// // {/*    Click on the Vite and React logos to learn more*/}
// // {/*</p>*/}
// // </>
// // );
// // }

// //
