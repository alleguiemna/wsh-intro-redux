import {connect} from "react-redux"
import './App.css';
import {increment,decrement} from "./redux/actions/counterActions"
import {useSelector,useDispatch} from "react-redux"

function App(props) {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div style={{textAlign:"center",marginTop:"250px"}}>
      {/* <button onClick={()=>props.add(1)}>+</button>
      <h1>{props.count}</h1>
      <button onClick={()=>props.remove(1)}>-</button> */}
      <button onClick={() => dispatch(increment(2))}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
}
// const mapStateToProps = (state) =>{
//   return{
//     count:state.count
//   }
// }
// const mapDispatchToProps = (dispatch) =>{
//  return{
//    add: (payload) =>dispatch(increment(payload)),
//    remove:(payload) =>dispatch(decrement(payload))
//  }
// }
// export default connect (mapStateToProps,mapDispatchToProps)(App);
export default App;
