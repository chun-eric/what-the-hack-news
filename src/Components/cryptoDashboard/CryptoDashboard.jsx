import React from "react";
import { useQuery} from "@tanstack/react-query";
import { fetchTopCryptos } from "../../api/cryptoApi";
import { mockCryptoData } from  "./data"

const CryptoDashboard = () => {
  
  // make query to API endpoint - CHANGED TO 20
  const { data, isLoading, error} = useQuery({
    queryKey: ["topCryptos"],
    queryFn: () => fetchTopCryptos(10),
  })

  const coins = mockCryptoData;

  console.log("Coins data:", coins)

   if (isLoading) return <div>Loading....</div>
   if (error) return <div>Error loading data..</div>

   // Helper function to format price with appropriate decimals
   const formatPrice = (price) => {
     if (!price) return '-';
     if (price < 0.01) {
       return price.toFixed(6); // Show 6 decimals for very small prices
     } else if (price < 1) {
       return price.toFixed(4); // Show 4 decimals for prices under $1
     } else if (price < 100) {
       return price.toFixed(2); // Show 2 decimals for prices under $100
     } else {
       return Math.floor(price).toLocaleString(); // No decimals for large prices
     }
   };
  
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
            {coins.map((coin, idx) => {
              // Handle both API and mock data field names
             const change1h = coin.price_change_percentage_1h_in_currency || 0;
              const change24h = coin.price_change_percentage_24h_in_currency || 0;
              const change7d = coin.price_change_percentage_7d_in_currency || 0;
              const volume = coin.total_volume || 0;

              return (
                <tr key={coin.id} className="border-b">
                   <td className="p-2">{idx + 1}</td>
                  <td className="flex items-center gap-2 p-2">
                    <img src={coin.image} alt={coin.symbol} className="w-5 h-5" />
                    <span className="font-medium">{coin.symbol.toUpperCase()}</span>
                  </td>
                  
                  {/* FIXED: Better price formatting */}
                  <td className="p-2 text-right">${formatPrice(coin.current_price)}</td>
                  
                  {/* FIXED: Correct field names and logic */}
                  <td className={`p-2 text-right ${(change1h || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {change1h !== 0 ? 
                      `${change1h > 0 ? '+' : ''}${change1h.toFixed(2)}%` 
                      : '0.00%'
                    }
                  </td>
                  
                  <td className={`p-2 text-right ${(change24h || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {change24h !== 0 ? 
                      `${change24h > 0 ? '+' : ''}${change24h.toFixed(2)}%` 
                      : '0.00%'
                    }
                  </td>
                  
                  <td className={`p-2 text-right ${(change7d || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {change7d !== 0 ? 
                      `${change7d > 0 ? '+' : ''}${change7d.toFixed(2)}%` 
                      : '0.00%'
                    }
                  </td>
                  
                  <td className="p-2 text-right">${coin.market_cap?.toLocaleString() || '-'}</td>
                  
                  {/* FIXED: Correct volume field */}
                  <td className="p-2 text-right">${volume?.toLocaleString() || '-'}</td>
                  
                  <td className="p-2 text-right">{coin.circulating_supply?.toLocaleString() || '-'}</td>
                  
                  {/* Simple sparkline placeholder */}
                  <td className="p-2 text-right">
                    <div className="flex items-center justify-center w-20 h-6 bg-gray-100 rounded">
                      <div className={`w-12 h-3 rounded ${
                        (change7d || 0) >= 0 ? 'bg-green-200' : 'bg-red-200'
                      } flex items-end justify-center`}>
                        <div className={`w-1 h-2 ${
                          (change7d || 0) >= 0 ? 'bg-green-500' : 'bg-red-500'
                        } rounded-sm mr-1`}></div>
                        <div className={`w-1 h-3 ${
                          (change7d || 0) >= 0 ? 'bg-green-500' : 'bg-red-500'
                        } rounded-sm mr-1`}></div>
                        <div className={`w-1 h-1 ${
                          (change7d || 0) >= 0 ? 'bg-green-500' : 'bg-red-500'
                        } rounded-sm`}></div>
                      </div>
                    </div>
                  </td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default CryptoDashboard;