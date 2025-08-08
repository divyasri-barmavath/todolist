// import './App.css';
// import ToDoList from './components/ToDoList';
// import ProductsList from './components/ProductsList';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// function App() {
//   return ( 
//     < BrowserRouter >
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<ToDoList/>}/>
//          <Route path="/ProductsList" element={<ProductsList/>}/>
//       </Routes>
//       </BrowserRouter >
//   );
// }
// export default App;
import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ProductsList from './components/ProductsList';
import Navbar from './components/Navbar';
function App() {
  const [activeComponent, setActiveComponent] = useState('ToDoList'); 
  const renderComponent = () => {
    if (activeComponent === 'ProductsList') return <ProductsList />;
    return <ToDoList />;
  };
  return (
    <>
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </>
  );
}
export default App;

