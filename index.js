import { TonConnect } from "@tonconnect/sdk";

const tonConnect = new TonConnect({
    manifestUrl: "https://beka02221.github.io/tonmonifestjson/tonconnect-manifest.json" // Укажите ссылку на манифест
});

const connectButton = document.getElementById("connectWallet");
connectButton.addEventListener("click", async () => {
    try {
        await tonConnect.connect();
        console.log("Кошелёк подключён:", tonConnect.wallet);
    } catch (error) {
        console.error("Ошибка подключения:", error);
    }
});
