---
id: setup-machine
title: Setup Machine
sidebar_position: 1
---

# Setup NodeRunner Machine

Before installing your nodes on your machine, there is some setup that must be done to ensure optimal efficiency and security.
First, we will run a little update of the system before configuring a secured access with an SSH key and creating a new user to run our nodes.

## Secure your machine with an SSH key

The most important thing for a NodeRunner or any other activity is to secure your machine with an SSH key for anyone trying to login to it. 

An SSH key is separated into 2 files containing: the **Public** and the **Private** keys. Same as in Web3, you want to keep your private key secure but you will need it on your machine to connect to your servers.

An SSH key can also be secured with a password when you create it, something you should consider.

To achieve that, we need to copy the content of the public key into a specific file on your machine.

```bash
# Edit the file and add your public key within
ubuntu:~$ vim ~/.ssh/authorized_keys

# Or with one command
ubuntu:~$ echo "YOUR_PUBLIC_KEY" >> ~/.ssh/authorized_keys
```

> **Note:** If you want to give login access to another person, you can add their public SSH key into the file, below your own.

You can now connect to your server through this command:
```bash
# You can login using a specific SSH key with this command
ssh -i /PATH/TO/PRIVATE/KEY ubuntu@$MACHINE_IP

# or if your private key is automatically used by your local system (/home/.ssh/id_rsa).
ssh ubuntu@$MACHINE_IP
```

## Limit access through SSH connections

If everything works and you can reconnect without the original password, you can now deactivate the password login system and keep only the SSH connection available.

```bash
# Edit the SSH configuration file
sudo vim /etc/ssh/sshd_config

# Disable password authentication by setting the following
PasswordAuthentication no

# Restart the SSH service to apply changes
sudo systemctl restart sshd
```

You can also change the default port (22) on which your machine accepts SSH connections and set the one of your choice in the range: 1024-49151.

```bash
# Edit the SSH configuration file
sudo vim /etc/ssh/sshd_config

# Change the port number by setting the following
Port YOUR_CHOSEN_PORT

# Restart the SSH service to apply changes
sudo systemctl restart sshd
```

If you activated all securities, you can connect now to your server with your SSH key and the specified port that you chose above.

You can now reconnect to your server on the specific port, and the old command should fail.

```bash
ssh -i /PATH/TO/KEY -p YOUR_CHOSEN_PORT ubuntu@$MACHINE_IP
```

## Create a NodeRunner user

You do not want to configure and run your nodes with your default user (ubuntu). We will create a specific user and remove the need for a password to run sudo commands.

```bash
# Create a new user
sudo adduser noderunner

# Add the new user to the sudo group
sudo usermod -aG sudo noderunner

# Allow the new user to run sudo commands without a password
sudo visudo
# Add the following line to the file
noderunner ALL=(ALL) NOPASSWD:ALL
```

## Monitoring

In addition to that, you should consider running a monitoring solution for your machine. It will ensure a proper vision over your used resources and identify problems before they even occur.
