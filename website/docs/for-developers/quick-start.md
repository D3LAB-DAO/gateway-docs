---
sidebar_position: 1
---

# Quick Start

- `Docs`: [https://github.com/D3LAB-DAO/gateway-docs](https://github.com/D3LAB-DAO/gateway-docs)
- `Frontend`: [https://github.com/D3LAB-DAO/gateway-frontend](https://github.com/D3LAB-DAO/gateway-frontend)
- `Contract`: [https://github.com/D3LAB-DAO/gateway-contract](https://github.com/D3LAB-DAO/gateway-contract)
- `Backend`: [https://github.com/D3LAB-DAO/gateway-backend](https://github.com/D3LAB-DAO/gateway-backend)

---

# Setting Up Gateway


## Prerequisites

Before setting up Gateway, ensure you have the following:

- Node.js (version 14 or higher) installed
- Access to an Archway node with the RPC URL
- An Archway-compatible wallet


## Installation

```bash
$ npm install
```

## Run

To run the microservices:

```bash
$ node src/global/counter.js

$ node src/node/vrf.js

$ node src/relay/receive.js

$ node src/relay/send.js

$ node src/node/app.js
```

For a detailed explanation of how each microservice within our architecture operates and interacts with one another, please refer to the documentation [here](./microservices).


## Contract

Contract Address: [archway1mc3t2yjqew2w5a5e4g3fjr475x3sx7k2kvkdvanarepegt8fzlrs6028mr](https://testnet.mintscan.io/archway-testnet/wasm/contract/archway1dqqfypr9a98czeh23a64eh6a0y7cqhycrzsm6a)
