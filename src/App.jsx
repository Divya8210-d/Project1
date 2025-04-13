import { useState } from 'react'
import ChatPopup from './components/ChatPopup'
import Output from './components/Iutput'
import Output from './components/Output'
import './App.css'
import useCurrencyInfo from './components/useCurrencyInfo'
import { News } from './components/News'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [icurrency, setICurrency] = useState("usd")
  const [ocurrency, setOCurrency] = useState("inr")
  const [convertamount, setCAmount] = useState(0)
  const [inputamount, setIAmount] = useState(0)

  const currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo)

  function Ichangecurr(curr) {
    setICurrency(curr)
    setFrom(curr)
  }

  function Ochangecurr(curr) {
    setOCurrency(curr)
    setTo(curr)
  }

  function convert() {
    setCAmount(inputamount * currencyinfo[to])
  }

  function iamountset(am) {
    setIAmount(am)
  }

  return (
    <div className='min-h-screen w-screen font-Merriweather bg-gradient-to-t from-green-600 to-yellow-400 flex flex-col justify-start items-center pt-10 pb-24'>

      <News />

      <h1 className="mt-10 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-green-300 text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] animate-fade-in">
        Currency Converter
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}
      >
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-14 px-4'>
          <Input
            currencyoptions={options}
            onCurrencyChange={Ichangecurr}
            selectcurrency={icurrency}
            iamount={inputamount}
            onIAmountChange={iamountset}
          />
          <Output
            currencyoptions={options}
            onCurrencyChange={Ochangecurr}
            selectcurrency={ocurrency}
            camount={convertamount}
          />
        </div>

        <button className="block mx-auto mt-10 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-300">
          Convert
        </button>
      </form>
    </div>
  )
}

export default App

















/*import { useState } from 'react'
import ChatPopup from './components/ChatPopup'
import Input from './components/input'
import Output from './components/Output'
import './App.css'
import useCurrencyInfo from './components/useCurrencyInfo'
import { News } from './components/News'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
const [icurrency,setICurrency]=useState("usd")
const [ocurrency,setOCurrency]=useState("inr")
const [convertamount,setCAmount]=useState(0)
const [inputamount,setIAmount]=useState(0)
const currencyinfo = useCurrencyInfo(from)
   const options = Object.keys(currencyinfo)
   function Ichangecurr(curr) {
    setICurrency(curr)
    setFrom(curr)
   }
   function Ochangecurr(curr) {
    setOCurrency(curr)
    setTo(curr)
    
   }
   function convert() {
    setCAmount(inputamount*currencyinfo[to])
   }
   function iamountset(am) {
    setIAmount(am)
    
   }
  return (
    
    <div className='bg-gradient-to-t  from-green-600 to-yellow-400 min-h-screen w-screen font-Merriweather'>

<News/>


<h1 className="relative top-[40px] text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-green-300 text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] animate-fade-in">
  Currency Converter
</h1>

<form onSubmit={(e)=>{
  e.preventDefault()
  convert()
}}>
  <div className='flex gap-[30px] absolute top-[80px] left-[410px]'><Input currencyoptions={options} onCurrencyChange={Ichangecurr} selectcurrency={icurrency} iamount={inputamount} onIAmountChange={iamountset} /><br></br>

<Output currencyoptions={options} onCurrencyChange={Ochangecurr} selectcurrency={ocurrency} camount={convertamount}/></div>

<button className="bg-white/20 absolute top-[400px] left-[710px] hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-300">
    Convert
  </button>

</form>

     
    </div>
  )
}

export default App
*/