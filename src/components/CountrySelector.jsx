import React from 'react'
import options from '../assets/countryNames'

const CountrySelector = (props) => {
  return (
    <div>
      <div className="dropdown flex">
        <div className="select-container text-center">
          <img src={`https://flagsapi.com/${props.country.toLocaleUpperCase()}/flat/64.png`} className={`${props.mode}`==="light"?'rounded-lg border border-gray-200 font-mono bg-blue-400 hover:bg-blue-300':'rounded-lg border border-gray-200 font-mono bg-slate-900 hover:bg-slate-700'} alt={props.country} />
          <select defaultValue="India" onChange={props.changeCountry} className={`${props.mode}`==="light"?'button rounded-lg p-2 border border-gray-200 font-mono text-white w-56 bg-blue-400 hover:bg-blue-300':'button rounded-lg p-2 border border-gray-200 font-mono text-white w-56 bg-slate-900 hover:bg-slate-700'} name="country" id="country-selector">
            {Object.entries(options).map(([key, value], index) => {
              return <option key={index} value={value}>{value}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CountrySelector
