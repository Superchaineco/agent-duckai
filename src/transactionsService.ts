import redisClient from "./redisService";

const ADDRESSES_KEY = 'addresses';
const TRANSACTIONS_KEY = 'transactions';


export interface Transaction {
  address: string;
  time: string;
  hash: string;
  amount: string;
  apr: string;
  action: string;
}


export const saveTransaction = async (transaction: Transaction): Promise<void> => {
  const transactionStr = JSON.stringify(transaction);
  await redisClient.rPush(TRANSACTIONS_KEY, transactionStr);
};


export const getTransactions = async (): Promise<Transaction[]> => {
  const transactions = await redisClient.lRange(TRANSACTIONS_KEY, 0, -1);
  return transactions.map(t => JSON.parse(t));
};


export const registerAddress = async (address: string): Promise<string[]> => {
  console.log('Register address:', address);
  await redisClient.sAdd(ADDRESSES_KEY, address);
  return getAddresses();
};


export const removeAddress = async (address: string): Promise<string[]> => {
  console.log('Remove address:', address);
  await redisClient.sRem(ADDRESSES_KEY, address);
  return getAddresses();
};


export const getAddresses = async (): Promise<string[]> => {
  return await redisClient.sMembers(ADDRESSES_KEY);
};
