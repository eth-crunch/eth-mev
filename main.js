const provider = new ethers.providers.WebSocketProvider(
  "wss://mainnet.infura.io/ws/v3/YOUR_INFURA_KEY"
);

provider.on("pending", async (txHash) => {
  const tx = await provider.getTransaction(txHash);
  if (tx && tx.to) {
    document.getElementById("output").innerHTML += `<p>${tx.from} → ${tx.to}: ${ethers.utils.formatEther(tx.value || 0)} ETH</p>`;
  }
});
