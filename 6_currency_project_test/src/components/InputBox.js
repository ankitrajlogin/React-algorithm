import React from "react";


function InputBox(
    {
        label , 
        amount , 
        onAmountChange , 
        
        selectCurrency = "usd" ,
        onCurrencyChange , 
        currencyOptions = [] , 
        amountDisable = false , 
        currencyDisable = false , 
    }
){
    return (
        <>
            <label
            >
                {label} 
            </label>

            <div>
                <input
                  type = "number"
                  placeholder="Amount"
                  disabled = {amountDisable}
                  value = {amount} 
                  onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                >
                
                </input>

            </div>

            <div>
                <select
                value={selectCurrency}
                onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled = {currencyDisable}
                >
                    {currencyOptions.map((currency) =>(
                        <option key = {currency} 
                        value={currency}
                        >
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </>
    )
}

export default InputBox ; 