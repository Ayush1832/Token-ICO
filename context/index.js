import React, { useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

import {
  CHECK_WALLET_CONNECTED,
  CONNECT_WALLET,
  GET_BALANCE,
  CHECK_ACCOUNT_BALANCE,
  TOKEN_ICO_CONTRACT,
  ERC20,
  ERC20_CONTRACT,
  TOKEN_ADDRESS,
  addtokentoMetamask,
} from "./constants";

export const TOKEN_ICO_CONTRACT = React.createContext();

export const TOKEN_ICO_Provider = ({ children }) => {
  const DAPP_NAME = "Token ICO";
  const currency = "MATIC";
  const network = "Pylygon Amoy";

  const [loader, setLoader] = useState(false);
  const [account, setAccount] = useState();
  const [count, setCount] = useState(0);

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  //CONTRACT FUNCTIONS
  const TOKEN_ICO = async () => {
    try {
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TOKEN_ICO_CONTRACT();

        const tokenDetails = await contract.getTokenDetails();
        const contractOwner = await contract.owner();
        const soldTokens = await contract.soldTokens();

        const ethBal = await GET_BALANCE();

        const token = {
          tokenBal: ethers.utils.formatEther(tokenDetails.balance.toString()),
          name: tokenDetails.name,
          symbol: tokenDetails.symbol,
          supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
          tokenPrice: ethers.utils.formatEther(
            tokenDetails.tokenPrice.toString()
          ),
          tokenAddr: tokenDetails.tokenAddr,
          maticBal: ethBal,
          address: address.toLowerCase(),
          owner: contractOwner.toLowerCase(),
          soldTokens: soldTokens.toLowerCase(),
        };
        setLoader(false);
        return token;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const BUY_TOKEN = async (amount) => {
    try {
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TOKEN_ICO_CONTRACT();

        setLoader(false);
        return token;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const TOKEN_WITHDRAW = async () => {
    try {
    } catch {}
  };

  const UPDATE_TOKEN = async () => {
    try {
    } catch {}
  };

  const UPDATE_TOKEN_PRICE = async () => {
    try {
    } catch {}
  };

  const DONATE = async () => {
    try {
    } catch {}
  };

  const TRANSFER_ETHER = async () => {
    try {
    } catch {}
  };

  const TRANSFER_TOKEN = async () => {
    try {
    } catch {}
  };
};
