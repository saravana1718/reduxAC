import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/central"
import Formdata from './Formdata';

function App() {
  const account = useSelector((state) => state.account)
  let user = useSelector((state) => state.user.name)
  const dispatch = useDispatch()
  const { depositMoney, withDrawMoney } = bindActionCreators(actionCreators, dispatch)
//   const handlewidhraw=()=>{
//     e.preventDefault()
//     if(account>0){
// withDrawMoney(50)

//     }
//   }
  return (
    <div className="App">
      <h1>Account portal Component</h1>
      <p>This is A/c portal of <span > {user}</span> </p>
      <h1>{account}</h1> 
      <button onClick={() => depositMoney(100)}>deposit</button>
      <button onClick={() => withDrawMoney(50)}>withdraw</button>
      <Formdata />
    </div>
  );
}

export default App;
