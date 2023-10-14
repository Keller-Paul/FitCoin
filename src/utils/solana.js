import { Connection, PublicKey } from '@solana/web3.js';

export const connectToSolana = async () => {
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const version = await connection.getVersion();
    console.log('Connected to Solana:', version);
}

export const getBalance = async (address) => {
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const publicKey = new PublicKey(address);
    const balance = await connection.getBalance(publicKey);
    return balance;
}
