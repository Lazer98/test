
import './App.css';
import AppStart from './start_compose/appStart';

function App() {

  let user = "koko";
  let num1 = 5;
  let num2 = 8;

  return ( 
    <div className="App">
      <AppStart user={user}  num1={num1} num2={num2}/>
      <hr/>
      <h1 className='text-danger'>Welcome to react!</h1>
     </div>

  
)
}

export default App;
