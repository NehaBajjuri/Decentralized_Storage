import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

function WalletConnect() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  };

  return (
    <div className="p-4">
      {account ? (
        <p className="text-green-600">✅ Connected: {account}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletConnect;
