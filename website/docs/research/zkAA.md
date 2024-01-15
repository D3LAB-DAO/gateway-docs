---
sidebar_position: 3
---

# zkAA

Integrating traditional Internet (web2) identities with blockchain (web3) identities presents considerable obstacles. Conventional solutions typically employ a mapping strategy, linking web2 identities directly to specific blockchain addresses. However, this method can lead to complications such as fragmentation of identifiers across disparate networks.

To address these challenges, we propose a novel scheme, Address Abstraction (AA), that circumvents the need for direct mapping. AA scheme replaces the existing blockchain address system while maintaining essential properties including a unique identifier, immutability of requests, and privacy preservation. This capability allows users to interact with the blockchain via their web2 identities, irrespective of the specific blockchain address, thereby eliminating limitations tied to a blockchain-specific address system. This mechanism fosters the seamless integration of web2 identities within the web3, in addition, promotes cross-chain compatibility.

We also provide an application of AA, denoted as zero-knowledge Address Abstraction (zkAA). It mainly leverages the zero-knowledge proofs to ensure the properties of AA. zkAA has been implemented as a smart contract — compatible with any existing contract-enabled blockchains. Our evaluation of zkAA on Ethereum demonstrates its efficiency. The average cost for registering an abstracted identity is approximate $7.66, whereas publishing an abstracted transaction costs around $4.75. In contrast, on Polygon, the associated costs are markedly lower: $0.02 for registration and $0.01 for publication, as of January 13, 2023. This empirical evaluation substantiates the feasibility of our proposed solution.

*Read more*: [https://eprint.iacr.org/2023/191](https://eprint.iacr.org/2023/191)
