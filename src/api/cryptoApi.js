

// api request to coingecko
export const fetchTopCryptos = async (limit = 20) => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false&price_change_percentage=30d`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("failed to fetch data");
      return response.json()

}