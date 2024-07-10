
import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App(){

  const [amount , setAmount] = useState('')
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState("inr")

  const [convertedAmount , setConvertedAmount] = useState(0) ; 

  const currencyInfo = useCurrencyInfo(from) ;

  const options = Object.keys(currencyInfo)  ;
  console.log(options) ;

  const swap = ()=> {
    setFrom(to) 
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return(
    <>
      <h1 id="heading">Currency converter</h1>

      <form
      onSubmit={(e) => {
        e.preventDefault() ; 
        convert() ; 
      }}
      >

        <div id='inputside'>

          <InputBox
          label = "from"
          amount = {amount} 
          currencyOptions = {options}
          onCurrencyChange = {(currency) =>{
            setAmount(amount) 
            setFrom(currency) ; 
          }}
          selectCurrency = {from}
          onAmountChange = {(amount) => setAmount(amount)}
          />
        </div>

        <div id='button'>
        <button
        type = "button"
        onClick={swap}
        >
          swap
        </button>

        </div>



        <div id='outputside-div'>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable      
          />

       


        </div>

        <div id='button'>

        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>

        </div>
        



      </form>
    </>
  )
}


export default App 