---
sidebar_position: 3
---

# Microservices


## Global

To run the `Counter` service (default port number is `30328`):

```bash
$ node src/global/counter.js
```

Interact with the `Counter` service via the following endpoints:

```bash
$ curl http://localhost:30328/epoch
{"epoch":10000}

$ curl http://localhost:30328/round
{"round":4}

$ curl http://localhost:30328/seed
{"seed":"1bd4c2ec750458404795bc011361551f35c3ab7c1b924f3a23ceb853269cdcd8"}
```


## Relay

Run the `DB` with Docker:

```bash
$ docker-compose up -d --build
```

Start the `Receive` service to handle user requests (default port number is `30329`):

```bash
$ node src/relay/receive.js
```

Post a new request to the system:

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"uri":"[URI]", "params": [INPUT_PARAMETERS], "deadline": [DEADLINE]}' http://localhost:30329/request
{"result":8}
```

Run the `Send` service to manage transactions:

```bash
$ node src/relay/send.js
```


## Node

Execute and interact with the `VRF` (default port number is `30327`):

```bash
$ export PK=[YOUR_PRIVATE_KEY_HERE]

$ node src/node/vrf.js
```

Post data for VRF evaluation and verification:

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"data":"[DATA]"}' http://localhost:30327/evaluate
{"hash":[12,144,213,205,213,202,202,139,198,46,234,157,134,224,50,238,40,184,250,76,59,118,184,35,169,109,115,141,221,42,143,99],"proof":[73,103,77,19,206,194,140,121,180,136,15,203,222,184,104,134,131,52,177,140,221,81,171,15,73,231,41,240,250,88,179,249,31,21,71,105,211,219,5,198,245,210,169,209,183,49,112,199,184,15,149,5,50,51,177,174,197,50,249,192,74,159,6,148,4,88,151,116,205,4,119,193,115,177,119,194,200,51,229,209,111,178,209,3,153,213,203,64,51,125,123,228,209,36,46,124,35,179,80,28,146,109,24,56,39,101,243,186,38,131,254,80,197,192,18,152,156,106,114,193,38,215,96,132,22,195,123,110,230]}

$ curl -X POST -H "Content-Type: application/json" -d '{"publicKey":"[YOUR_PUBLIC_KEY_HERE]", "data":"[DATA]", "hash":"[HASH]", "proof":"[PROOF]"}' http://localhost:30327/verify
{"result":true}
```

Start the `APP` service:

```bash
$ export PK=[YOUR_PRIVATE_KEY_HERE]

$ node src/node/app.js
```
