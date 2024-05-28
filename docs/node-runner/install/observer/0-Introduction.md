---
id: intro
title: Introduction
sidebar_position: 1
---


# Observer on MultiversX

Observing squads on MultiversX are specialized nodes that provide access to on-chain data. These nodes play a crucial role in enhancing the transparency and accessibility of blockchain data for developers, analysts, and users. This document explores the concept of observing squads, their benefits, and the different types available on the MultiversX network.

## What are Observing Squads?

Observing squads are nodes that synchronize with the MultiversX blockchain to provide real-time access to on-chain data. Unlike validator nodes, which participate in the consensus process, observing squads are focused solely on data accessibility and do not produce or validate blocks.

## Benefits of Observing Squads

### Real-Time Data Access

Observing squads provide real-time access to blockchain data, making it easier for developers and analysts to retrieve and process information. This is particularly useful for applications that require up-to-date information, such as decentralized applications (dApps), analytics platforms, and blockchain explorers.

### Enhanced Transparency

By providing access to on-chain data, observing squads enhance the transparency of the MultiversX blockchain. Users can verify transactions, track asset movements, and monitor network activity, contributing to a more open and accountable blockchain ecosystem.

### Scalability

Observing squads help distribute the load of data requests across multiple nodes, improving the overall scalability of the network. This ensures that data access remains efficient even as the network grows and the volume of transactions increases.

## Types of Observing Squads

### Normal Observing Squad

A normal observing squad synchronizes with the current state of the MultiversX blockchain, providing access to real-time data. These nodes are ideal for applications that need up-to-date information without requiring historical data.

#### Key Features

- **Real-Time Synchronization**: Provides access to the latest blockchain data.
- **Low Resource Requirements**: Requires fewer resources compared to full history nodes.
- **Ideal for Real-Time Applications**: Suitable for dApps and services that need the latest blockchain state.

### Full History Observing Squad

A full history observing squad maintains a complete record of the blockchain's history, providing access to both current and historical data. These nodes are essential for applications that need to perform historical analysis or audit transactions over time.

#### Key Features

- **Complete Historical Data**: Maintains a full record of all blockchain transactions.
- **Resource Intensive**: Requires more storage and computational resources to store and manage the complete blockchain history.
- **Ideal for Analysis and Auditing**: Suitable for use cases that require detailed historical data, such as analytics platforms and forensic analysis.

### Elasticsearch Integration

For full history observing squads to function efficiently, they need to be integrated with Elasticsearch. Elasticsearch is used to index and search the large volume of historical data. It is recommended to run Elasticsearch on the same server as the observing squad to reduce latency and improve performance, but it can also be installed on a separate server if needed.

## Hardware Requirements

Below is a comparative table of the hardware requirements for hosting normal observing squads and full history observing squads with Elasticsearch.

| Component         | Normal Observing Squad                   | Full History Observing Squad                              |
|-------------------|------------------------------------------|-----------------------------------------------------------|
| **CPU**           | 4 Cores / 8 Threads                      | 12 Cores / 24 Threads                                      |
| **RAM**           | 32 GB                                    | 64 GB                                                     |
| **Storage**       | 500 GB SSD                               | 2+ TB SSD                                                 |
| **Network**       | 1 Gbps (Unlimited)                       | 1 Gbps (Unlimited)                                        |
| **Additional**    | N/A                                      | Elasticsearch running along                               |

## Conclusion

Observing squads on MultiversX play a vital role in providing real-time and historical access to on-chain data. Whether you need a normal observing squad for real-time applications or a full history observing squad for detailed historical analysis, these nodes enhance the transparency, accessibility, and scalability of the MultiversX blockchain. By setting up observing squads, developers and analysts can leverage the rich data available on the blockchain to build innovative and data-driven applications.

For more information and detailed setup guides, please refer to the [MultiversX Documentation](https://docs.multiversx.com).