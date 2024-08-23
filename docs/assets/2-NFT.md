---
id: nft
title: NFT
sidebar_position: 1
---
# NFTs on MultiversX

ESDT NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership or proof of authenticity for a specific item or piece of content. They are widely used in digital art, collectibles, gaming, and more within the MultiversX ecosystem.

## Key Features of NFTs

- **Uniqueness**: Each NFT is unique and cannot be replicated, ensuring its distinct value.
- **Metadata**: NFTs can contain metadata that provides additional information about the asset they represent.
- **Ownership**: NFTs provide clear ownership records that are securely stored on the blockchain.

## Configuration

### Creating an NFT

To create an NFT, you need to define several parameters:

- **Token ID**: A unique identifier for the NFT.
- **Token Name**: A human-readable name for the NFT.
- **Metadata URI**: A URI pointing to the metadata describing the NFT.
- **Creator**: The address of the NFT creator.
- **Royalties**: Optional royalties that the creator receives from secondary sales.

### Example Configuration

Here is an example of creating an NFT with basic properties:

```json
{
  "tokenId": "NFT-001",
  "name": "UniqueArtwork",
  "metadataUri": "ipfs://Qm...123",
  "creator": "erd1...abcd",
  "royalties": 5
}
```

## Metadata
The metadata of an NFT can include various details such as:

- **Description**: A detailed description of the NFT.
- **Image**: A link to the image file representing the NFT.
- **Attributes**: Additional attributes or properties that describe the NFT.
## Best Practices
- **Metadata Storage**: Use decentralized storage solutions like IPFS for storing metadata.
- **Authenticity**: Ensure the authenticity of the NFT by verifying the creator and metadata.
- **User Experience**: Provide clear and detailed metadata to enhance the user experience.
  
## Conclusion
ESDT NFTs enable the creation of unique digital assets on the MultiversX blockchain. With their distinct features and customizable properties, NFTs are ideal for representing ownership and authenticity in various applications. Explore the MultiversX Documentation for more details on creating and managing ESDT NFTs.