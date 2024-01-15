---
sidebar_position: 2
---

# BRAIN

As artificial intelligence (AI) continues to permeate various domains, concerns surrounding trust and transparency in AI-driven inference and training processes have emerged, particularly with respect to potential biases and traceability challenges. Decentralized solutions such as blockchain have been proposed to tackle these issues, but they often struggle when dealing with large-scale models, leading to time-consuming inference and inefficient training verification.

To overcome these limitations, we introduce BRAIN, a Blockchain-based Reliable AI Network, a novel platform specifically designed to ensure reliable inference and training of large models. BRAIN harnesses a unique two-phase transaction mechanism, allowing real-time processing via pipelining by separating request and response transactions. Each randomly-selected inference committee commits and reveals the inference results, and upon reaching an agreement through a smart contract, then the requested operation is executed using the consensus result. Additionally, BRAIN carries out training by employing a randomly-selected training committee. They submit commit and reveal transactions along with their respective scores, enabling local model aggregation based on the median value of the scores.

Experimental results demonstrate that BRAIN delivers considerably higher inference throughput at reasonable gas fees. In particular, BRAIN's tasks-per-second performance is 454.4293 times greater than that of a naive single-phase implementation.

*Read more*: [https://arxiv.org/abs/2305.04062](https://arxiv.org/abs/2305.04062)
