import { useState } from 'react'

const newsData = {
  All: [
    {
      time: '35 min',
      headline:
        'Oil Holds Gain as Trump Maintains Iran Pressure, Stockpiles Fall'
    },
    {
      time: '40 min',
      headline: 'Malaysian Agency to Forfeit $41.8M Linked to Ex-PM Probe: NST'
    },
    {
      time: '45 min',
      headline: 'Fitch to Revise Mexico Economy Contraction to ‘Mild’ Recession'
    },
    {
      time: '50 min',
      headline:
        'Gold Steadies as Traders Mull Mideast Truce, Fed’s Rate-Cut Path'
    },
    {
      time: '60 min',
      headline: 'Indonesia’s Yield Curve May Steepen as BI Unwinds Intervention'
    },
    {
      time: '1 hr',
      headline: 'Pentagon Posts Document With Fiscal Year 2026 Weapons Requests'
    }
  ],
  Business: [
    { time: '10 min', headline: 'Stocks Rally as Inflation Cools' },
    { time: '30 min', headline: 'Tesla Shares Jump After Earnings Beat' }
  ],
  World: [
    { time: '5 min', headline: 'UN Holds Emergency Meeting on Climate' },
    { time: '25 min', headline: 'Elections in Europe See Record Turnout' }
  ]
}

const categories = Object.keys(newsData)
console.log(categories)

const Latest = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div className='overflow-x-hidden overflow-y-hidden w-full min-h-screen  flex flex-col gap-8 text-[#111214]  mt-6 border-l border-b pb-2 border-r border-[#686868]  '>
      <div className='h-full lg:px-7 lg:border-l'>
        <div className='flex items-center justify-between mb-8 '>
          <h1 className='lg:text-2xl font-["Bebas_Neue"] font-medium tracking-[0.1rem] self-start text-3xl'>
            Latest
          </h1>
          <div className='flex items-center justify-between px-1 py-1 border rounded-full'>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className='px-3 text-base '
            >
              {categories.map(cat => (
                <option className='' key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className=''></div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          {newsData[selectedCategory].map((item, i) => (
            <div
              key={i}
              className='flex items-start gap-3 py-1 pb-3 border-b last:border-b-0'
            >
              <span className='text-sm text-gray-400 min-w-[50px]'>
                {item.time}
              </span>
              <span className='font-bold'> {item.headline}</span>
            </div>
          ))}
        </div>
        <div className='mt-4 '>
          <a
            href='#'
            className='text-sm leading-snug text-gray-600 hover:underline'
          >
            See all latest &gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Latest
