import { TonConnect } from "@tonconnect/sdk";

// Укажите ссылку на ваш манифест
const tonConnect = new TonConnect({
    manifestUrl: "https://beka02221.github.io/tonmonifestjson/tonconnect-manifest.json"
});

document.getElementById('connectWallet').addEventListener('click', async () => {
    try {
        const wallets = await tonConnect.getWallets();
        
        // Показать доступные кошельки
        const selectedWallet = wallets[0]; // Пример: выбираем первый доступный кошелёк

        await tonConnect.connectWallet(selectedWallet.bridgeUrl);

        console.log("Кошелёк подключён:", tonConnect.wallet);
    } catch (error) {
        console.error("Ошибка подключения кошелька:", error);
    }
});
