import TonConnect from "@tonconnect/sdk";

// Укажите ссылку на ваш манифест
const tonConnect = new TonConnect({
    manifestUrl: "https://ваша_ссылка_на_манифест.json"
});

const connectButton = document.getElementById("connectWallet");
const walletStatus = document.getElementById("walletStatus");

connectButton.addEventListener("click", async () => {
    try {
        const wallets = await tonConnect.getWallets(); // Получить список доступных кошельков
        if (wallets.length === 0) {
            walletStatus.textContent = "Нет доступных кошельков для подключения.";
            return;
        }

        // Пытаемся подключиться через первый доступный кошелёк
        await tonConnect.connectWallet(wallets[0].bridgeUrl);

        // Отображаем адрес подключенного кошелька
        walletStatus.textContent = `Кошелёк подключён: ${tonConnect.wallet.address}`;
    } catch (error) {
        console.error("Ошибка подключения кошелька:", error);
        walletStatus.textContent = "Ошибка подключения.";
    }
});
