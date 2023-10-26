import { useState } from "react";
import { decrement, increment, incrementByValue,StateType } from "./redux";
import {  useDispatch,useSelector} from "react-redux";

const App = () => {
  const [val,setVal]=useState<number>(0)
  const dispatch = useDispatch()
  const count=useSelector((state: StateType)=>state.count)



const incrementByValueHandler=()=>{


setVal(0)
dispatch(incrementByValue(val))

}

  return (
    <div>
      <h1>Count Change</h1>
      <p>Count :{count} </p>

      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <input type="number"   value={val} onChange={(e)=>setVal (Number(e.target.value))}/>
      <button disabled={val<0} onClick={incrementByValueHandler}>Add</button>
    </div>
  );
};

export default App;
