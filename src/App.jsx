/* eslint-disable no-unused-vars */
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
      <EvenCountRenderer />
    </RecoilRoot>
  )
}

function Count() {
  console.log("object");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  // const [count, setCount] = useRecoilState(countAtom)
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
  </div>
}



function Buttons() {

  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  console.log('btn compo rerendered');
  return <div>
    <button onClick={() => {
      setCount(c => c + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(c => c - 1)
    }}>Decrease</button>
  </div>
}


function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count % 2 == 0 ? "It is even" : null}
    </div>
  )
}

export default App
