import './App.css';
import Header from './component/Header'
import Navbar from './component/Navbar';
import NavFirst from './component/NavFirst';
import AppRouter from './rout/rout';
import MobileNavBar from './component/MobileNavBar'
// import { Provider } from "react-redux";
// import myStore from './redux/store'

function App() {
  return (
    <div className="App">
       {/* <Provider store={myStore}> 
         <AppRouter /> 
       </Provider>  */}

       
      <Header />
      {/* <MobileNavBar /> */}
    </div>
  );
}

export default App;
