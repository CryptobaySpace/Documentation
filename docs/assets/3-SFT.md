---
id: sft
title: SFT
sidebar_position: 1
---


# SFTs on MultiversX

ESDT SFTs (Semi-Fungible Tokens) are a hybrid token standard that combines features of both fungible and non-fungible tokens. They are useful for applications that require a mix of unique and interchangeable assets, such as gaming items and event tickets.

## Key Features of SFTs

- **Semi-Fungibility**: SFTs can represent multiple instances of a unique item, providing a balance between fungibility and uniqueness.
- **Batch Transfers**: SFTs can be transferred in batches, making them efficient for use cases involving multiple items.
- **Metadata**: SFTs can include metadata for each unique item, similar to NFTs.

## Configuration

### Creating an SFT

To create an SFT, you need to define several parameters:

- **Token ID**: A unique identifier for the SFT.
- **Token Name**: A human-readable name for the SFT.
- **Initial Supply**: The number of tokens to be created initially.
- **Decimals**: The number of decimal places the token can be divided into.
- **Metadata URI**: A URI pointing to the metadata describing the SFT.

### Example Configuration

Here is an example of creating an SFT with basic properties:

```json
{
  "tokenId": "SFT-001",
  "name": "EventTicket",
  "initialSupply": 100,
  "decimals": 0,
  "metadataUri": "ipfs://Qm...456"
}
```

## Metadata
The metadata of an SFT can include various details such as:

- **Description**: A detailed description of the SFT.
- **Image**: A link to the image file representing the SFT.
- **Attributes**: Additional attributes or properties that describe the SFT.

## Best Practices

- **Metadata Storage**: Use decentralized storage solutions like IPFS for storing metadata.
- **Efficiency**: Leverage the batch transfer feature for efficient handling of multiple items.
- **User Experience**: Provide clear and detailed metadata to enhance the user experience.

## Conclusion
ESDT SFTs offer a versatile token standard on the MultiversX blockchain, combining the best features of fungible and non-fungible tokens. They are ideal for use cases that require a mix of unique and interchangeable assets. Explore the [MultiversX Documentation](https://docs.multiversx.com/) for more details on creating and managing ESDT SFTs.