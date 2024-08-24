import React , {useId} from "react";

// in future we use [amount,on_amount_change] =usestate(amount )
function InputBox({
   label , className = "" , amount , on_amount_change , on_Currency_change,currency_option=[], select_currency ="usd" , amount_disable = false , currency_disable = false
  }) {
/*
label: Label for the input box.
className: Additional CSS classes.
amount: The amount to be displayed. 
on_amount_change: Callback for amount change.
on_Currency_change: Callback for currency change.
currency_option: List of available currencies.
select_currency: The selected currency.
amount_disable: Disable the amount input.
currency_disable: Disable the currency dropdown. */
    

    return (

      <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
        <div className="w-1/2">

          <label  className="text-black/40 mb-2 inline-block">{label}</label>

          <input

     
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled = {amount_disable}
            value={amount}            
            onChange={(e)=>on_amount_change && on_amount_change(Number(e.target.value))}  // we also give a  defualt value for safe
            
          />

        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>

          <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
          value={select_currency} 
          onChange={(e)=> on_Currency_change && on_Currency_change(e.target.value)}
          disabled = {currency_disable}>
           
           {/* here we dispaly all currencies  */}
           {currency_option.map((currency) => (
                                <option key={currency} value={currency}>{currency}</option>)  // Use currency variable correctly
                                  
          )}
                  

          </select>
        </div>
      </div>
    );
  }
  
  export default InputBox;