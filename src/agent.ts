import { OpenAI } from "openai";


export const askAgent = async (liquidityPoolsJson: string) => {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });


    //DuckAI character specification based
    const agentCharacter = {
        name: "Investment Agent",
        bio: `You are a REST web service receiving an array of liquidity pools in JSON format (example):
\`\`\`json
[
 {
                "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f",
                "address": "0x250a1381f79593b96b462fb0d575c75795f80332",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr-24h",
                            "apr": 0.1526506295496169,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr",
                            "apr": 0.1526506295496169,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr-30d",
                            "apr": 0.1630639839322475,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "weETH/wETH",
                "poolTokens": [
                    {
                        "address": "0x250a1381f79593b96b462fb0d575c75795f80332",
                        "symbol": "weETH/wETH",
                        "logoURI": null
                    },
                    {
                        "address": "0x346e03f8cce9fe01dcb3d0da3e9d00dc2c0e08f0",
                        "symbol": "weETH",
                        "logoURI": "https://etherscan.io/token/images/etherfiweeth_32.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44000000000000000000000141",
                "address": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44000000000000000000000141-swap-apr-30d",
                            "apr": 0.9726096062551621,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-unibtc-wbtc",
                "poolTokens": [
                    {
                        "address": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44",
                        "symbol": "bpt-unibtc-wbtc",
                        "logoURI": null
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x93919784c523f39cacaa98ee0a9d96c3f32b593e",
                        "symbol": "uniBTC",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/39599/large/uniBTC_200px.png?1723064455"
                    }
                ]
            }
]
\`\`\`

Choose the best pool to invest in and respond.`,

        responseStyles: {
            default: {
                guidelines: [`Consider this guidelines
1) Choose exactly ONE liquidity pool to invest in.
2) Respond ONLY with a JSON array containing exactly ONE object.
3) That object MUST have the following structure:
   {
     "protocol": "Balancer",                // Always "Balancer"
     "liquidityPoolAddress": "CHOSEN_DATA", // Extract this from the chosen pool
     "amount": "100",                       // This info is specified by the user
     "token": "USDC"                      // Always "USDC"
   }

Here is an example format (not an instruction, just an illustration):

[
  {
    "protocol": "Balancer",
    "liquidityPoolAddress": "0x4d6461f181cf2b26a1cb4e3a070d63d0d31a5155",
    "amount": "50",
    "token": "USDC"
  }
]

**Do not provide any additional explanations or reasoning. Only return the JSON.**`],
            },
        },

    };




    try {

        const chatCompletion = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: `You are a: ${agentCharacter.name} this is yout profile: ${agentCharacter.bio}. Always respond in this format: ${agentCharacter.responseStyles.default.guidelines}`,
            },
            {
                role: "user",
                content: liquidityPoolsJson,
            },],
            model: 'gpt-4o-mini',
        }).withResponse();

        console.log('The agent has decided:' + chatCompletion.data.choices[0].message.content)
        return chatCompletion.data.choices[0].message.content;
    } catch (error) {
        console.error("Error calling OpenAI:", error);
    }
}

export const interactAgent = async ()=>{
    try{
        const { P2PClient } = await import("@openpond/sdk");

       // const P2PClient = require('@openpond/sdk')
        const p2p = new P2PClient ({address :"http://localhost:3001" });
        p2p.onMessage((message)=>{
           
           console.log(message.content)
    
        })
        await p2p.connect({ })
    } catch(err){

    }
    

}

