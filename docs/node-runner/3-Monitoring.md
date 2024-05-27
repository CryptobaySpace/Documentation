---
id: monitoring
title: Monitoring
sidebar_position: 4
---

# Monitoring

It is important to always have the capacity so find the status of your nodes, understand where to find information about your running nodes is primordial.
In addition to the monitoring that you can install on your host there is additional way to monitor your nodes and be sure to always react as fast as possible in case of issue.

It is difficult at the moment to track all necessary aspects from your nodes and machines with one solution

The monitoring is generally separate into 2 axes:
- **Host Monitoring**: You will need to install a monitoring solution on your hos machine, you can follow our guide for Zabbix/Grafana [here] (TODO: ADD Link Monitoring setup)
- **Node Status**: The status of your nodes regarding the rest of the network, if they are at the right version and participate to the consensus without issue. For that, we will either use the [explorer](https://explorer.multiversx.com) or the [Telegram Bot](/docs/node-runner/monitoring#telegram-bot)

## Telegram Bot 

The simpliest way to never miss an upgrade with a minimum effort would be to go and use this [Telegram Bot](https://t.me/NodeWatcherBot) from Dr.Delphi.

You can then simply add your nodes by giving their **public** key and track their status, you will receive notification if the version is outdated compared to the majority of the network or if you fail during validator consensus.


## Use the Explorer

You can use the public explorer from MultiversX to monitor the status of your nodes and current stake.

If you are a staking provider, you will have a contract address or an identity. It will be possible to see all your nodes directly through it and see if they have problems.


## Script from the host
On the machine on which you installed your nodes, a script is now available in the elrond-utils folder.

```bash
  cd ~/elrond-utils
  ./elrond-utils/termui --address localhost:8080
  ./elrond-utils/termui --address localhost:8081
  ./elrond-utils/termui --address localhost:8082
  ./elrond-utils/termui --address localhost:8083
```

Run  these different commands for have a visualize of your nodes running on your host.
This is the most reliable source of informations regarding the status of your nodes an especially the synchronizations status.

TODO: Add a screenshot of the termui with explanation of the fields and sections.