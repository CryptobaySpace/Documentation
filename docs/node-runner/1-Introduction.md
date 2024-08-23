---
id: intro
title: Introduction
sidebar_position: 1
---

# Running Nodes on MultiversX

This section will explain how to run nodes on the MultiversX network and benefit from their advantages. Understanding the different types of nodes and their roles is essential for anyone looking to participate in the network or explore the data on it.

## Requirements

Depending on your type of nodes and their configuration, the minimum hardware requirements could change . But except for testing purposes 

In any case, their is an initial setup for your servers that would require similar steps to ensure an optimal result.

Please check the page about (Setup NodeRunner Machine)[/docs/node-runner/setup-machine]

## Types of Nodes

While all types of nodes require similar installation and maintenance processes, they serve distinct roles and responsibilities within the MultiversX ecosystem.

### Observer Node

Observer nodes are crucial for providing real-time and historical data access to the MultiversX blockchain. These nodes monitor the network and relay information without participating in the consensus mechanism. Here are some key aspects of observer nodes:

- **Role**: Observer nodes are responsible for monitoring the blockchain, providing data to users, developers, and applications.
- **Functionality**: They help in fetching real-time data, making it available for analysis, application integration, and user interfaces.
- **Non-Consensus**: Observer nodes do not participate in the block validation process, hence they do not earn rewards from the network.

#### Benefits

- **Data Access**: Provide comprehensive access to blockchain data, which is essential for analytics, monitoring tools, and blockchain explorers.
- **Resource Efficiency**: Since they do not participate in consensus, observer nodes require less computational power and energy.
- **Network Support**: They help distribute data requests, enhancing the network's scalability and performance.

### Validator Node

Validator nodes are integral to maintaining the security and integrity of the MultiversX blockchain. These nodes actively participate in the consensus process by validating transactions and blocks. Validator nodes can also act as staking providers by creating staking pools where users can delegate their tokens. Here are the key aspects of validator nodes:

- **Role**: Validator nodes are responsible for proposing and validating new blocks in the blockchain.
- **Functionality**: They process transactions, validate them, and add them to the blockchain, ensuring the network's security and reliability.
- **Consensus Participation**: Validator nodes are involved in the consensus mechanism and are rewarded for their work with transaction fees and staking rewards.

#### Staking Pools

Validator nodes can set up staking pools to receive delegations from users, enhancing the security and decentralization of the network. Here’s how staking pools work:

- **Pooling of Tokens**: Users can delegate their tokens to a staking pool, which combines them with other users' tokens to increase the overall stake and the chances of being selected to validate transactions.
- **Reward Distribution**: Rewards earned from the validation process are proportionally distributed among the users who have delegated their tokens, minus a commission fee taken by the staking provider.
- **Security**: Staking pools enhance the security of the network by increasing the number of tokens involved in the consensus process.

You can find the list of existing staking providers directly on the MultiversX Explorer.
#### Benefits

- **Earn Rewards**: Validators earn rewards in the form of transaction fees and staking rewards for their participation in the consensus process.
- **Network Security**: By validating transactions and blocks, validators help secure the network against attacks and ensure its reliability.
- **Stakeholder Influence**: Validators have a say in the governance and decision-making processes of the network, influencing protocol upgrades and changes.
- **Passive Income for Users**: Users can earn rewards by delegating their tokens to a staking pool without having to run a validator node themselves.
- **Lower Barrier to Entry**: Staking pools allow users with smaller amounts of tokens to participate in staking and earn rewards.
- **Professional Management**: Staking providers manage the technical aspects of running validator nodes, ensuring efficient operation and maximum uptime.

## Comparative Table

Here’s a comparison between Observer Nodes and Validator Nodes to help you understand their differences better:

| Feature              | Observer Node                                              | Validator Node (including Staking Providers)                |
|----------------------|------------------------------------------------------------|--------------------------------------------------------------|
| **Role**             | Monitor the network and provide data                       | Validate transactions, participate in consensus, and manage staking pools |
| **Consensus**        | Not involved                                               | Actively involved                                             |
| **Rewards**          | None                                                       | Earn transaction fees and staking rewards                     |
| **Resource Requirements** | Low                                                   | Moderate                                                      |
| **Data Access**      | Provides real-time and historical data                     | Not primarily focused on data access                          |
| **Network Impact**   | Enhances transparency and data availability                | Ensures security, integrity, and reliability of the network   |

## Conclusion

Running nodes on MultiversX offers various opportunities depending on your goals and resources. Observer nodes are ideal for those looking to contribute to the network by providing data access without engaging in the consensus process. Validator nodes, including those that act as staking providers, are suited for participants who want to play a direct role in securing the network and earning rewards through transaction validation and staking.

Whether you choose to run an observer node or a validator node, each plays a vital role in the MultiversX ecosystem, contributing to its robustness, security, and accessibility. Explore the documentation to learn more about setting up and maintaining these nodes, and become an integral part of the MultiversX network.

For detailed setup guides and further information, please refer to the [MultiversX Documentation](https://docs.multiversx.com).