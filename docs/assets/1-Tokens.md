---
id: esdt-tokens
title: ESDT Tokens
sidebar_position: 1
---

# ESDT Tokens on MultiversX

ESDT (eStandard Digital Token) tokens are a flexible and powerful standard for creating fungible tokens on the MultiversX blockchain. They allow developers to issue tokens with various configurations and use them in decentralized applications (dApps), financial services, and more.

## Key Features of ESDT Tokens

- **Fungibility**: ESDT tokens are fungible, meaning each token is identical and interchangeable with others of the same type.
- **Customizable**: Developers can configure various properties of ESDT tokens, such as supply, minting capabilities, and transfer rules.
- **Interoperability**: ESDT tokens can interact seamlessly with other smart contracts and dApps within the MultiversX ecosystem.

## Configuration

### Creating an ESDT Token

To create an ESDT token, you need to define several parameters:

- **Token Name**: A human-readable name for the token.
- **Token Ticker**: A unique identifier, typically 3-5 characters long.
- **Initial Supply**: The number of tokens to be created initially.
- **Decimals**: The number of decimal places the token can be divided into.
- **Mintable**: Whether additional tokens can be minted after the initial creation.
- **Burnable**: Whether tokens can be burned (destroyed).

### Example Configuration

Here is an example of creating an ESDT token with basic properties:

```json
{
  "name": "ExampleToken",
  "ticker": "EXT",
  "initialSupply": 1000000,
  "decimals": 18,
  "mintable": true,
  "burnable": true
}
```

## Smart Contract Interaction
ESDT tokens can be managed and interacted with using smart contracts. Developers can write contracts that utilize these tokens for various purposes, such as payments, staking, or governance.

### Best Practices
- **Security**: Ensure that the smart contracts managing ESDT tokens are thoroughly audited.
- **Transparency**: Maintain transparency about the token's properties and any changes to its configuration.
- **Community Engagement**: Engage with the community to understand their needs and incorporate feedback into the token's development.

## Conclusion
ESDT tokens provide a robust and flexible standard for creating fungible tokens on MultiversX. By leveraging their customizable properties and seamless interoperability, developers can build a wide range of applications and services. Explore the MultiversX Documentation for more details on creating and managing ESDT tokens.