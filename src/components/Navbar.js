// import React from 'react';
// import {Link} from 'react-router-dom';
// function Navbar(){
//  return(
//     <nav>
//         <ul>
//             <li ><Link to="/ProductsList">ProductsList</Link></li>
//             <li ><Link to="/">ToDoList</Link></li>          
//         </ul>
//     </nav>
//  )
// }
// export default Navbar;
import React from 'react';
function Navbar({ setActiveComponent }) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setActiveComponent('ProductsList')}>ProductsList</button></li>
        <li><button onClick={() => setActiveComponent('ToDoList')}>ToDoList</button></li>
      </ul>
    </nav>
  );
}
export default Navbar;

