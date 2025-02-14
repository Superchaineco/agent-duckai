import { OpenAI } from "openai";
import { liquidityPoolService } from "./liquidityPoolService";
import { getOperationCalldata } from "./operationService";
import { privateKeyToAccount } from "viem/accounts";
import { Address, createPublicClient, createWalletClient, http } from "viem";
import { optimism } from 'viem/chains';
import { addressList, saveTransaction } from "./transactionsService";





export const interactAgent = async () => {
    try {
        //Ty to use P2P comms  https://docs.duckai.ai/documentation/agents/integrations.html#direct-p2p-integration
        //We tryed to implemente a multiagent communication using 2 characters but OpenPond SDK didnt worked
        const { P2PClient } = await import("@openpond/sdk")
        const p2p = new P2PClient({ address: process.env.AGENT_ADDRESS ?? "" });
        p2p.onMessage((message) => {

            console.log(message.content)

        })
        await p2p.connect({})
    } catch (err) {
    }

}

export const askAgent = async (liquidityPoolsJson: string) => {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    //DuckAI character specification based  https://docs.duckai.ai/documentation/duck-framework/character-config.html
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
     "suggestion": "I suggest you to invest in this pool because this reasons..." //This field must have up to 250 characters
     "liquidityPoolAddress": "CHOSEN_DATA", // Extract this from the chosen pool
     "amount": "2.7",                       // This value between 2 and 3 randomly can have 2 decimals
     "apr": "3.5%"                      // This is the total APR of the pool formated in 2 decimal places and with the %
   }

Here is an example format (not an instruction, just an illustration):

[
  {
    "suggestion": "I suggest you to invest in this pool because..",
    "liquidityPoolAddress": "0x4d6461f181cf2b26a1cb4e3a070d63d0d31a5155",
    "amount": "2.2",
    "apr": "3.2%" 
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


export const suggestion = async () => {

    const poolsData = await liquidityPoolService();
    const agentInput = JSON.stringify(poolsData);
    const jsonReponse = (await askAgent(agentInput))
        ?.replace('```json', '')
        .replace('```', '');

    return jsonReponse;

};


export const autonomusOperation = async () => {
    const agentSuggestion = JSON.parse((await suggestion())!)[0];
    addressList.forEach(address => {
        doOperation(address, agentSuggestion.liquidityPoolAddress, agentSuggestion.amount, agentSuggestion.apr)
    });

}

const doOperation = async (address: string, liquidityPool: string, amount: number = 3, apr: string) => {

    try {

        const response = await getOperationCalldata({
            amountIn: String(amount * (10 ** 16)),//'30000000000000000',
            fromAddress: address,
            receiver: address,
            spender: address,
            tokenIn: '0x4200000000000000000000000000000000000042',
            tokenOut: liquidityPool,
            routingStrategy: 'delegate',
        });


        const account = privateKeyToAccount(
            process.env.PRIVATE_KEY as `0x${string}`
        );

        const client = createWalletClient({
            account,
            chain: optimism,
            transport: http('https://rpc.ankr.com/optimism'),
        });

        const publicClient = createPublicClient({
            chain: optimism,
            transport: http('https://rpc.ankr.com/optimism'),
        });

        const tx = await client.writeContract({
            address: '0xde8f89B6d11fc6894C98A37458c0149787F051AE' as Address,
            abi: [
                {
                    inputs: [
                        { internalType: 'address', name: 'account', type: 'address' },
                        { internalType: 'address', name: 'to', type: 'address' },
                        { internalType: 'bytes', name: 'data', type: 'bytes' },
                        { internalType: 'uint256', name: 'value', type: 'uint256' },
                    ],
                    name: 'executeAutomatedOperation',
                    outputs: [],
                    stateMutability: 'nonpayable',
                    type: 'function',
                },
            ],
            functionName: 'executeAutomatedOperation',
            args: [response.tx.from, response.tx.to, response.tx.data, response.tx.value],
        });

        const receipt = await publicClient.waitForTransactionReceipt({
            hash: tx,
        });

        saveTransaction({ address, action: "Deposit", amount: `${amount.toFixed(2)}`, hash: receipt.transactionHash, apr, time: getFormattedDateTime() })
        console.log(receipt);
    } catch (error) {
        console.log(error);

    }
}

function getFormattedDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}