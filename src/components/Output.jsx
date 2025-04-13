import React from 'react'

const Output = ({
  selectcurrency,
  currencyoptions = [],
  onCurrencyChange,
  camount,
}) => {
  return (
    <div className='w-full md:w-auto'>
      <div className="max-w-md mx-auto mt-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)] text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 opacity-30 rounded-full blur-3xl animate-pulse group-hover:opacity-50"></div>

        <div className='flex items-center gap-8 mb-4'>
          <h2 className="text-3xl font-bold tracking-wide text-white drop-shadow-lg">💱 To</h2>
          <select
            className="p-1 bg-white rounded w-[70px] h-[30px] text-black uppercase"
            value={selectcurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          >
            {currencyoptions.map((curr) => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>
        </div>

        <input
          type='number'
          className='bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-xl border-white/30 backdrop-blur-sm transition-all duration-300 w-full'
          value={camount}
          disabled
        />
      </div>
    </div>
  )
}

export default Output
