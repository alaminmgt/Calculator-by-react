import React,{useState} from 'react'

const App = () => {
  const [inputData, setInputData] = useState("")

  const getValue = (e) => {
    const val = e.target.value;
    

    if (val === "AC") {
      setInputData("");
      return;
    }
    if (val === "⌫") {
      setInputData((prev)=>prev.slice(0,-1))
      return;
    }
    setInputData((inputData).concat(val));
  }

  const getResult = () => {
    try {
      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + inputData)();
      setInputData(String(result));
    } catch (error) {
      setInputData(error)
    }
  }
  return (
    <div className='container'>
      <div>
        <h1>Calculator</h1>
        <div >
          <input type="text" className="result" value={inputData} placeholder='0'/>
        </div>
        <div className="btn-group">
          <input type="button" onClick={getValue} value="AC" className='back'/>
          <input type="button" onClick={getValue} value="()" />
          <input type="button" onClick={getValue} value="%" />
          <input type="button" onClick={getValue} value="%" />
        </div>
        <div className="btn-group">
          <input type="button" onClick={getValue} value="7" />
          <input type="button" onClick={getValue} value="8" />
          <input type="button" onClick={getValue} value="9" />
          <input type="button" onClick={getValue} value="*" />
        </div>
        <div className="btn-group">
          <input type="button" onClick={getValue} value="4" />
          <input type="button" onClick={getValue} value="5" />
          <input type="button" onClick={getValue} value="6" />
          <input type="button" onClick={getValue} value="-" />
        </div>
        <div className="btn-group">
          <input type="button" onClick={getValue} value="1" />
          <input type="button" onClick={getValue} value="2" />
          <input type="button" onClick={getValue} value="3" />
          <input type="button" onClick={getValue} value="+" />
        </div>
        <div className="btn-group">
          <input type="button" onClick={getValue} value="0" />
          <input type="button" onClick={getValue} value="." />
          <input type="button" onClick={getValue} value="⌫" className='back'/>
          <input type="button" onClick={getResult} value="=" className='equal'/>
        </div>
      </div>
    </div>
  )
}

export default App
