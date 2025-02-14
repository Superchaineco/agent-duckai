import pool from "./db";




export const registerAddress = async (address: string): Promise<string> => {
  const client = await pool.connect();
  try {
    
    const result = await client.query(
      `INSERT INTO addresses (address) 
       VALUES ($1) 
       ON CONFLICT (address) DO NOTHING 
       RETURNING address`,
      [address]
    );
    if (result.rowCount! > 0) {
      console.log(`Address ${address} registered.`);
      return result.rows[0].address;
    } else {
      // Si ya existe, la obtenemos
      const existing = await client.query(
        'SELECT address FROM addresses WHERE address = $1',
        [address]
      );
      return existing.rows[0].address;
    }
  } catch (error) {
    console.error('Error in registerAddress', error);
    throw error;
  } finally {
    client.release();
  }
};


export const removeAddress = async (address: string): Promise<boolean> => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'DELETE FROM addresses WHERE address = $1',
      [address]
    );
    if (result.rowCount! > 0) {
      console.log(`Address ${address} removed.`);
      return true;
    } else {
      console.log(`Address ${address} not found.`);
      return false;
    }
  } catch (error) {
    console.error('Error in removeAddress', error);
    throw error;
  } finally {
    client.release();
  }
};


export const saveTransaction = async (transaction: { 
  address: string, 
  time: string, 
  hash: string, 
  amount: string, 
  apr: string, 
  action: string 
}): Promise<any> => {
  const client = await pool.connect();
  try {
   
    const result = await client.query(
      `INSERT INTO transactions (address, time, hash, amount, apr, action)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [transaction.address, transaction.time, transaction.hash, transaction.amount, transaction.apr, transaction.action]
    );
    console.log('Transaction saved:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error in saveTransaction', error);
    throw error;
  } finally {
    client.release();
  }
};


export const getTransactions = async (): Promise<any[]> => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM transactions ORDER BY time DESC');
    return result.rows;
  } catch (error) {
    console.error('Error in getTransactions', error);
    throw error;
  } finally {
    client.release();
  }
};

export const getAddresses = async (): Promise<string[]> => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT address FROM addresses ORDER BY id ASC');
      return result.rows.map(row => row.address);
    } catch (error) {
      console.error('Error al obtener las direcciones:', error);
      throw error;
    } finally {
      client.release();
    }
  };