export const liquidityPoolService = async () => {

    let response: any;

    await fetch('https://test-api-v3.balancer.fi/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            query {
      poolGetPools(
        where: { chainIn: OPTIMISM, tokensIn: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85" }
      ) {
        id
        address
        dynamicData {
          yieldCapture24h
          aprItems {
            id
            apr
            type
          }
        }
        symbol
        address
        poolTokens {
          address
          symbol
          logoURI
        }
      }
    }
          `
        })
    }).then(res => res.json())
        .then(data => {
            response = data
        }).catch(err => {
            console.error('Error:', err);
        })

    const filteredPools = response.data.poolGetPools.filter((pool: { poolTokens: [] }) =>
        pool.poolTokens.some((token: { symbol: string }) => token.symbol === 'USDC')
    )

    return filteredPools

}
