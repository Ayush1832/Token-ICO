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

  const notifySuccess = (msg)=> toast.success(msg, { duration: 2000 });
  const notifyError = (msg)=> toast.error(msg, { duration: 2000 });

  const TOKEN_ICO = async () => {
    try{

    }catch{

    }
  }

  const BUY_TOKEN = async () => {
    try{

    }catch{
        
    }
  }

  const TOKEN_WITHDRAW = async () => {
    try{

    }catch{
        
    }
  }

  const UPDATE_TOKEN = async () => {
    try{

    }catch{
        
    }
  }

  const UPDATE_TOKEN_PRICE = async () => {
    try{

    }catch{
        
    }
  }

  const DONAATE = async () => {
    try{

    }catch{
        
    }
  }

  const TRANSFER_ETHER = async () => {
    try{

    }catch{
        
    }
  }

  const TRANSFER_TOKEN = async () => {
    try{

    }catch{
        
    }
  }
};
