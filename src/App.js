import './App.css';
import { Provider } from "react-redux";
import myStore from './redux/store'
import AppRouter from './rout/rout';
import Signup from './component/Signup';
import Accountinfo from './component/Accountinfo'
import Referer from './component/Referer'
function App() {
  return (
    <div className="App">
       {/* <Provider store={myStore}>  */}
         {/* <AppRouter />           */}
      {/* <Signup /> */}
      {/* <Accountinfo /> */}
      {/* <Referer /> */}
      

       {/* </Provider>  */}
    </div>
  );
}

export default App;
