---
sidebar_position: 1
---

# Single Node (Deprecated)

## Overview

The Gateway system architecture is composed of three main components:

1. [Archway Smart Contract](https://github.com/D3LAB-DAO/gateway-contract)
2. [Gateway Backend](https://github.com/D3LAB-DAO/gateway-backend)
3. [Gateway Bot](https://github.com/D3LAB-DAO/gateway-bot)

These components work in unison to enable the execution and validation of deterministic code within the Archway ecosystem.

## Components

### Archway Smart Contract

The Archway Smart Contract is responsible for managing web2 actions, project registration, and execution result storage. It interacts with the Archway blockchain and processes transactions related to the Gateway.

### Gateway Backend

The Gateway Backend is a Node.js-based server that downloads and executes JavaScript code provided by users. It offers an API endpoint for the Gateway Bot to send requests to execute code with specified input parameters.

### Gateway Bot

The Gateway Bot monitors the Archway Smart Contract for new requests and prompts the Gateway Backend to execute the code when a request is identified. Additionally, it retrieves execution results and stores them in the Archway Smart Contract.
