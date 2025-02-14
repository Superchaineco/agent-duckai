import { StringToHexErrorType } from "viem"


export const addressList: string[] = []
export const transactionList: { address: string, time: string, hash: string, amount: string, apr: string, action: string }[] = []

export const saveTransaction = async (transaction: { address: string, time: string, hash: string, amount: string, apr: string, action: string }) => {
    transactionList.push()
}



export const registerAddress = async (address: string) => {

    console.log(address)
    if (address && !addressList.includes(address))
        addressList.push(address);
    return addressList;

}

export const removeAddress = async (address: string) => {

    console.log(address)

    if (address && addressList.includes(address)) {
        const index = addressList.indexOf(address);
        if (index !== -1)
            addressList.splice(index, 1);
    }
    return addressList;
}
