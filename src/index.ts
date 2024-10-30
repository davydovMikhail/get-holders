import axios from 'axios';

// PARAMETERS:

// contractaddress - the contract address of the ERC-20 token
const contractaddress = "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d";
// page - the integer page number, if pagination is enabled
const page = 1;
// offset - the number of transactions displayed per page
const offset = 10;


const etherscanApiKey = "";


let endPoint = `https://api.etherscan.io/api?module=token&action=tokenholderlist&contractaddress=${contractaddress}&page=${page}&offset=${offset}&apikey=${etherscanApiKey}`;


const getHolders = async () => {

    const response = await axios.get(
		endPoint
	);
    
    console.log(response.data);

}

getHolders();