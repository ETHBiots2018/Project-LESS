# Project-LESS
**Local Energy for a Sustainable Society**

This Project was created during the [BIOTS 2018](https://biots.org) hackathon. The goal was to solve the [EWZ](https://ewz.ch) provided challenge.  
## Come and see our project live on [www.project-less.ch](https://project-less.ch)!
![Project-LESS](https://github.com/tttttx2/Project-LESS/blob/master/www/img/sc_index.png "Web interface")

## Contributors
* Toni Tanner
* Michael Vogel
* Lucien Erdin
* Dominic Hagmann
* Jannik Brun
* Thomas Keller
* Michel Perez

# Concept  
## Funding process  
An owner of a building makes ewz a proposal for a power plant. ewz initializes the project on the Blockchain with a target amount of fundings. At this moment investors can invest on the smart contract. In exchange the Investors get share tokens worth the amount of what they invested. Both the owner and ewz also receive an amount of share tokens; the former for providing the building and location and the latter for the maintenance and service costs. If ewz or the owner want to they also have the opportunity to invest.
In case the target amount of money is reached, ewz then receives the funds and is responsible to coordinate the acquisition process of the power plant with the owner of the location.  
![funding process](https://github.com/tttttx2/Project-LESS/blob/master/founding.jpg "funding process")  

## System running  
Once the power plant is in operation, it generates power and injects it in the local electricity network. The smart meter records the amount of power injected and then mints power tokens with the according value specified by the agreed upon day- or night-price respectively.
These tokens then get distributed to the investors (including the owner and ewz) according to the proportion of their share tokens. The investor can then later trade the power tokens for money with ewz.
In any case, where the project has to be abandoned or doesn’t generate the necessary funds, the smart contract automatically redistributes the money to the investors and terminates itself.  
![running process](https://github.com/tttttx2/Project-LESS/blob/master/running.jpg "running process")  


## Installation
### Web interface
Everything's static. Put it on a webserver and type in all the project contract addresses.

### Setup contracts
* Deploy one globally used PowerToken contract
* Deploy 1 Project contract per project. Define necessary startup vars.

### Local Testnode for SmartMeter simulation
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

```
use 1 or 2

1. to create a new account, remember your password
unlock your account every time you actually use it
```python
web3.personal.newAccount("yourPassword")
web3.personal.unlockAccount('0xdEa8AAB5FA6b74f82B4b399e20B13368BAcF342e', "yourPassphrase")
```

2. if you have already an account type in your console:
```python
web3.eth.accounts[0]
```
* the address you just created or already have will be the address of your smart contract
* This smart meter address you have to add to your project smart contract.

to start the the smart meter use 
```python
import SmartMeter
SmartMeter.runSmartMeter('http://127.0.0.1:8545/','YourContractProjectAddress',  passphrase='yourPassphrase')
```
the script will continuous send a random generated (mWh, timestap) to the smart contract of your power plant  
