import axios from 'axios';

interface RouteParams {
  fromAddress: string;
  receiver: string;
  spender: string;
  amountIn: string;
  tokenIn: string;
  tokenOut: string;
  routingStrategy: string;
}

export async function getOperationCalldata(params: RouteParams): Promise<any> {
  const { fromAddress, receiver, spender, amountIn, tokenIn, tokenOut, routingStrategy } =
    params;
  const url = `https://api.enso.finance/api/v1/shortcuts/route?chainId=10&fromAddress=${fromAddress}&receiver=${receiver}&spender=${spender}&amountIn=${amountIn}&tokenIn=${tokenIn}&tokenOut=${tokenOut}&routingStrategy=${routingStrategy}`;

  try {
    const response = await axios.get(url, {
        headers: {
             Authorization: `Bearer 7d7c4bad-42b6-471f-b890-9912f8feb78b`
        }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching route:', error);
    throw error;
  }
}
