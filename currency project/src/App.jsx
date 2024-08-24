import { useState } from 'react'
import useCurrencyInfo from "./hook/useCurrecyInfo";
import InputBox from './components/Input_Box';

function App() {
  const [amount, setAmount] = useState(0) // ammount whichwe need to convert
  const [from , setfrom] = useState("usd")
  const [to , setTo] = useState("pkr")
  const [convertedAmmount ,setconvertedAmmount] = useState(0) // result 


 const currency_info = useCurrencyInfo(from) // here we get 'from' , specific currecy data conversion rate 


 const currecy =  Object.keys(currency_info)  // just access the keys of key-value

 // swap btn functonality 
 const swap =()=>{
  setfrom(to)
  setTo(from)
    setconvertedAmmount(amount)
    setAmount(convertedAmmount)
 }

 const convert = ()=>
 {
  setconvertedAmmount(amount*currency_info[to])

 }
 
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()

                  }} >

                  <div className="w-full mb-1">
                      <InputBox

                      label="From"
                      amount={amount} // the main

                      currency_option={currecy} //  sending list of currencies 

                      on_Currency_change={(currecy)=>setfrom(currecy)} // when user change  usd to pkr then we change 'from' value 

                      select_currency={from} // the current selected currency

                      on_amount_change={(value) => {
                        console.log("Amount Changed:", value);
                        setAmount(value);
                    }}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmmount}
                          currency_option={currecy}
                          on_Currency_change={(currecy)=>setTo(currecy)}
                          select_currency={to}
                          amount_disable

                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"> 
                      Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
