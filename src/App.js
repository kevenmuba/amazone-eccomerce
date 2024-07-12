
import { useContext, useEffect } from 'react';
import './App.css';
import Routing from './Routing';
import { auth } from './Utility/firebase';
import { DataContext } from './components/DataProvider/DataProvider';
import { Type } from './Utility/action.type';


function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    // this controls sign in and sign out by cross checking firebase enam yihie refresh biyaregm aytefa mknyatum cross check yemiyaregew firebasun new
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
         console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
     
     <Routing/>
    </div>
  );
}

export default App;
