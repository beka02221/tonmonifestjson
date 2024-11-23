import { TonConnect } from "@tonconnect/sdk";

const connectButton = document.getElementById("connect-wallet");
const walletInfoDiv = document.getElementById("wallet-info");

// Initialize TonConnect
const tonConnect = new TonConnect({
  manifestUrl: `${window.location.origin}/manifest.json`
});

// Event handler for connecting wallet
connectButton.addEventListener("click", async () => {
  try {
    await tonConnect.connectWallet();
    const wallet = tonConnect.wallet;

    walletInfoDiv.innerHTML = `
      <p>Connected Wallet:</p>
      <p>Address: ${wallet.account.address}</p>
      <p>Balance: Fetching...</p>
    `;

    // Fetch balance
    const tonweb = new TonWeb();
    const balance = await tonweb.provider.getBalance(wallet.account.address);
    walletInfoDiv.innerHTML += `<p>Balance: ${balance / 10 ** 9} TON</p>`;
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
});
