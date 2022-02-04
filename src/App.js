import './App.css';
import Navbar from './component/Navbar';
import AppRouter from './rout/rout';
// import { Provider } from "react-redux";
// import myStore from './redux/store'

function App() {
  return (
    <div className="App">
       {/* <Provider store={myStore}> 
         <AppRouter /> 
       </Provider>  */}

       <Navbar />
      
    </div>
  );
}

export default App;
