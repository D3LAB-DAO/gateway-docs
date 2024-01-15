---
sidebar_position: 3
---

# Tables

# Database Tables Overview

The multinode system utilizes a series of tables within its database to store and manage data efficiently. Here's an overview of the tables and their purposes:


## Requests Table

The `requests` table is designed to store incoming user requests for processing by the system.
Each record in the table corresponds to a single user request and includes the following fields:

- `id`: An auto-incrementing integer that serves as the primary key.
- `uri`: A text field that stores the URI of the request, indicating where the request originates or where the required script is located.
- `params`: A text field containing the parameters of the request in a JSON string format.
- `timestamp`: A bigint field that records the time at which the request was made.
- `deadline`: A bigint field indicating the deadline by which the request needs to be processed.
- `seed`: A VARCHAR(64) field storing a seed value associated with the request for ensuring randomness in operations.
- `tx`: A text field that stores transaction hash. It can be filled at a later stage.


## Nodes Table

The `nodes` table holds information about the individual nodes that process the requests.
Each node is represented by a record with the following fields:

- `id`: An auto-incrementing integer that acts as the primary key.
- `public_key`: A text field that stores the public key of the node, which is essential for identifying the node and for cryptographic operations related to the node's activities.


## Results Table

The `results` table captures the outcomes of processed requests
The structure of the table is as follows:

- `id`: An auto-incrementing integer that serves as the primary key for the results table.
- `request_id`: An integer that references the `id` from the `requests` table, establishing a relationship to the original user request.
- `node_id`: An integer that references the `id` from the `nodes` table, linking the result to the node that processed the request.
- `timestamp`: A bigint field that records the time at which the result was produced.
- `hash`: A text field that stores the data — about the user request concatenated with `seed` and `round` information.
- `proof`: A text field that holds a cryptographic proof, ensuring that the result was produced by the actual node and has not been tampered with.
- `result`: A text field containing the actual result of the request in a JSON string format.
- `sig`: A text field that contains the digital signature, further attributing the result to the node and ensuring integrity.
