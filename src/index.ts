import express, { Request, Response } from 'express';
import { autonomusOperation, interactAgent, suggestion } from './agentService';
import { getOperationCalldata } from './operationService';
import { getTransactions, registerAddress, removeAddress } from './transactionsService';

require('dotenv').config();
const cron = require('node-cron');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;





//DuckAI framework didnt' worked
// app.get('/connect', async (req: Request, res: Response) => {
//     await interactAgent();
// });

app.get('/transactions', async (req: Request, res: Response) => {
    res.json(await getTransactions(req.query.address?.toString() ?? ''))
});

app.post('/co-pilot', async (req: Request, res: Response) => {
    console.log('co-pilot')

    const suggestionResponse = JSON.parse((await suggestion())!)[0]

    const { address } = req.body
    const response = await getOperationCalldata({
        amountIn: '30000000000000000',
        fromAddress: address,
        receiver: address,
        spender: address,
        tokenIn: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
        tokenOut: suggestionResponse.liquidityPoolAddress,
        routingStrategy: 'delegate',
    });
    console.log(response);
    res.send({ tx: response.tx, suggestion: suggestionResponse.suggestion });

});



app.post('/register', async (req: Request, res: Response) => {
    const { address } = req.body
    res.json(await registerAddress(address))

});

app.post('/remove', async (req: Request, res: Response) => {
    const { address } = req.body
    res.json(await removeAddress(address))
});




cron.schedule(process.env.AUTOMATIC_TIME, async () => {
    autonomusOperation()
});

app.get('/suggestion', async (req: Request, res: Response) => {
    res.set('Content-Type', 'application/json');
    const responseJson = await suggestion();
    res.send(responseJson);
});




app.listen(PORT, () => {
    console.log(`Mock server running on port ${PORT}`);
});
