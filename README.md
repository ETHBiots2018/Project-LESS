# Project-LESS
**Local Energy for a Sustainable Society**

This Project was created during the [BIOTS 2018](https://biots.org) hackathon. The goal was to solve the [EWZ](https://ewz.ch) provided challenge.

![Project-LESS](img/sc_index.png "Web interface")

## Contributors
* Toni Tanner
* Michael Vogel
* Lucien Erdin
* Dominic Hagmann
* Jannik Brun
* Thomas Keller
* Michel Perez

## Installation
### Web interface
Everything's static. Put it on a webserver and type in all the project contract addresses.

### Setup contracts
* Deploy one globally used PowerToken contract
* Deploy 1 Project contract per project. Define necessary startup vars. (Use python script?)

### Install Testnode
donwload the following scripts
1. geth
2. web3.py
3. solc (for pyhton)

start with setting up a light testnode, type in your terminal, ca. 20min to synch (15.02.2018)
```
geth --testnet --syncmode="light" --rpc --rpcapi db,eth,net,web3,personal --cache=1024 --rpcport 8545 --rpcaddr 127.0.0.1
```

open python console and type in:
```python
from web3 import Web3, HTTPProvider, TestRPCProvider
web3 = Web3(HTTPProvider('http://127.0.0.1:8545/'))
web3.personal.newAccount("yourPassword")
```
to create a new account, remember your password
unlock your account every time you actually use it
```python
web3.personal.unlockAccount('0xdEa8AAB5FA6b74f82B4b399e20B13368BAcF342e', "yourPassword")
```

