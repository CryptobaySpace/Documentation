---
id: monitoring
title: Monitoring
sidebar_position: 4
---

# Monitoring

It is important to always have the capacity to find the status of your nodes. Understanding where to find information about your running nodes is crucial.
In addition to the monitoring that you can install on your host, there are additional ways to monitor your nodes and ensure you can react quickly in case of issues.

Currently, it is challenging to track all necessary aspects of your nodes and machines with one solution.

Monitoring is generally separated into two axes:
- **Host Monitoring**: You will need to install a monitoring solution on your host machine. You can follow our guide for Zabbix/Grafana [here] (TODO: ADD Link Monitoring setup).
- **Node Status**: The status of your nodes regarding the rest of the network, ensuring they are at the correct version and participating in the consensus without issues. For that, we will either use the [explorer](https://explorer.multiversx.com) or the [Telegram Bot](/docs/node-runner/monitoring#telegram-bot).

## Telegram Bot

The simplest way to never miss an upgrade with minimal effort is to use this [Telegram Bot](https://t.me/NodeWatcherBot) from Dr.Delphi.

You can add your nodes by providing their **public** key and track their status. You will receive notifications if the version is outdated compared to the majority of the network or if you fail during validator consensus.

## Use the Explorer

You can use the public explorer from MultiversX to monitor the status of your nodes and current stake.

If you are a staking provider, you will have a contract address or an identity. It will be possible to see all your nodes directly through it and check if they have problems.

## Termui from the Host

On the machine where you installed your nodes, using the noderunner user, a script is now available in the elrond-utils folder.

```bash
cd ~/elrond-utils
./elrond-utils/termui --address localhost:8080
./elrond-utils/termui --address localhost:8081
./elrond-utils/termui --address localhost:8082
./elrond-utils/termui --address localhost:8083
```

Run these commands to visualize your nodes running on your host.
This is the most reliable source of information regarding the status of your nodes, especially the synchronization status.

TODO: Add a screenshot of the termui with an explanation of the fields and sections.
