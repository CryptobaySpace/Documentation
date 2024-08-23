---
id: maintenance
title: Maintenance
sidebar_position: 5
---

# Node Maintenance

## Periodic Maintenance

Even if most of the time you do not need to interact with you running nodes, some procedures need to be known for a long term success.
Simple tricks in monitoring and basic linux commands are enough for supervise and maintain nodes in the MultiversX Ecosystem.

### Update & Upgrade Host

It's crucial to keep your machine up to date and secure.

```bash
# These commands should also run periodically to maintain your system aligned with the latest security updates.

# Fetch the latest package information
sudo apt -y update

# Upgrade installed packages to the latest versions
sudo apt -y upgrade

```

### Upgrade Nodes

As the network evolve, it is required from the node runners to upgrade their scripts and even more important for validators to continue to be part of the consensus and earn rewards (**Passed a certain delay the validator nodes can event be jail**).

At the moment, the favorite way of transmitting the news about an upgrade of the nodes is telegram, through the [Validator Group](https://t.me/s/MultiversXValidators).

TODO: WARNING: Always wait for an official announcment before to upgrade your nodes
Before to do any action on your nodes, don't forget to login as your 

Connect

```bash
# Login as your NodeRunner user

sudo su NodeRunner
```

Then execute the commands for upgrade your node.

```bash
# Go into the mx-chain-scripts folder
cd ~/mx-chain-scripts

./script.sh github_pull # Retrieve latest version of the scripts
./script.sh upgrade     # Apply the Patch the the current nodes
./script.sh start       # After an upgrade, the nodes need to be restarded

```

You can the check the synchronizing status of your different nodes with the [termui script](/docs/node-runner/monitoring#termui-from-the-host).

```bash
```

 ## Operations

 ### Reset Database

 ### Reset Node Installation

 ### Add another ke