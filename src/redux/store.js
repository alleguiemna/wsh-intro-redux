import reducerCounter from "./reducers/counterReducer";
import {createStore} from "redux"

const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducerCounter,devtool)
export default store 