"use strict";
// ETHER PART:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// PARAMETERS:
// contractaddress - the contract address of the ERC-20 token
const contractaddress = "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d";
// page - the integer page number, if pagination is enabled
const page = 1;
// offset - the number of transactions displayed per page
const offset = 10;
const etherscanApiKey = "";
let endPoint = `https://api.etherscan.io/api?module=token&action=tokenholderlist&contractaddress=${contractaddress}&page=${page}&offset=${offset}&apikey=${etherscanApiKey}`;
const getHolders = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(endPoint);
    console.log(response.data);
});
getHolders();
// SOLANA PART:
const web3_js_1 = require("@solana/web3.js");
const solanaEndPoint = 'https://api.mainnet-beta.solana.com';
const addressToken = '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R';
function fetchTokenLargestAccounts() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = new web3_js_1.Connection(solanaEndPoint);
        const tokenMintPublicKey = new web3_js_1.PublicKey(addressToken);
        const largestAccounts = yield connection.getTokenLargestAccounts(tokenMintPublicKey, 'finalized');
        console.log(largestAccounts);
    });
}
fetchTokenLargestAccounts().catch(error => console.error('Error fetching token largest accounts:', error));
