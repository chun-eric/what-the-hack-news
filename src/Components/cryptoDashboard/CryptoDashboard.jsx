import React from "react";
import { useQuery} from "@tanstack/react-query";
import { fetchTopCryptos } from "../../api/cryptoApi";
import { mockCryptoData } from  "./data"

const CryptoDashboard = () => {
  
  // make query to API endpoint
  const { data, isLoading, error} = useQuery({
    queryKey: ["topCryptos"],
    queryFn: () => fetchTopCryptos(10),
  })

  const coins = data || mockCryptoData;

  console.log(coins)

   if (isLoading) return <div>Loading....</div>
   if (error) return <div>Error loading data..</div>
  
  return (
   <div className='container p-4 mx-auto'>
      <h1 className='px-4 pt-4 section-heading'>Market Data</h1>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
               <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-right">Price</th>
              <th className="p-2 text-right">1h%</th>
              <th className="p-2 text-right">24h%</th>
              <th className="p-2 text-right">7d%</th>
              <th className="p-2 text-right">Market Cap</th>
              <th className="p-2 text-right">Volume (24h)</th>
              <th className="p-2 text-right">Circulating Supply</th>
              <th className="p-2 text-right">Last 7 days</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, idx) => (
              <tr key={coin.id} className="border-b">
                 <td className="p-2">{idx + 1}</td>
                <td className="flex items-center gap-2 p-2">
                  <img src={coin.image} alt={coin.symbol} className="w-5 h-5" />
                  <span className="font-medium">{coin.symbol.toUpperCase()}</span>
                </td>
            <td className="p-2 text-right">${coin.current_price?.toLocaleString() || '-'}</td>
                <td className={`p-2 text-right ${coin.percent_change_1h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {coin.percent_change_1h?.toFixed(2) || '0.00'}%
                </td>
                <td className={`p-2 text-right ${coin.percent_change_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {coin.percent_change_24h?.toFixed(2) || '0.00'}%
                </td>
                <td className={`p-2 text-right ${coin.percent_change_7d > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {coin.percent_change_7d?.toFixed(2) || '0.00'}%
                </td>
                <td className="p-2 text-right">${coin.market_cap?.toLocaleString() || '-'}</td>
                <td className="p-2 text-right">${coin.volume_24h?.toLocaleString() || '-'}</td>
                <td className="p-2 text-right">{coin.circulating_supply?.toLocaleString() || '-'}</td>
                <td className="p-2 text-right">
                  {/* Placeholder for sparkline/mini chart */}
                  <img src={coin.sparkline_url || "/sparkline-placeholder.png"} alt="trend" className="object-contain w-20 h-6" />
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default CryptoDashboard;
