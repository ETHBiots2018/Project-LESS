
import json
import web3
import time
import os
import DummyMeter

from web3 import Web3, HTTPProvider, TestRPCProvider
from solc import compile_source
from web3.contract import ConciseContract
from web3 import Web3, HTTPProvider, IPCProvider


def runSmartMeter(http, contract_address,  passphrase='sali'):
    """ uses web3.eth.accounts[0] is the smart meter

    run a dummy smart meter

    :rtype: object
    """
    web3 = Web3(HTTPProvider(http))
    web3.personal.unlockAccount(web3.eth.accounts[0], passphrase)
    os.chdir("..")

    d = DummyMeter.DummyMeter()
    contract_source_code = _open_solidity_file('contracts/ProjectTemplate.sol')
    contract_interface=compile_contract(contract_source_code, "Project00000")

    contract_instance = web3.eth.contract(abi=contract_interface['abi'], address=contract_address)


    d.auto(contract_instance.transact(transaction={'from': web3.eth.accounts[0], 'gas': 3200000}).generateDividend)


def createNewEnvironmen(http, passphrase='sali'):
    """ uses web3.eth.accounts[0]
    create a new contract with the specified solidity source code, and the title of the smart contract
    the passphrase is needed to unlock the default account on web3.eth.accounts[0]

    :rtype: object
    """
    web3 = Web3(HTTPProvider(http))

    web3.personal.unlockAccount(web3.eth.accounts[0], passphrase)
    os.chdir("..")

    contract_source_code= _open_solidity_file('contracts/PowerToken.sol')
    createNewContract(web3, contract_source_code, "PowerToken")

    contract_source_code = _open_solidity_file('contracts/ProjectTemplate.sol')
    createNewContract(web3, contract_source_code, "Project00000")



def _open_solidity_file(ffile):
    with open(ffile, 'r') as myfile:
        return myfile.read()

def compile_contract(contract_source_code, title):
    compiled_sol = compile_source(str(contract_source_code))  # Compiled source code
    contract_interface = compiled_sol['<stdin>:'+title]
    return contract_interface


def createNewContract(web3, contract_source_code, title, passphrase='sali'):
    """
    create a new contract with the specified solidity source code, and the title of the smart contract
    t

    :rtype: object
    """

    contract_interface = compile_contract(contract_source_code, title)

    contract = web3.eth.contract(abi=contract_interface['abi'], bytecode=contract_interface['bin'])

    # Get transaction hash from deployed contract
    tx_hash = contract.deploy(transaction={'from': web3.eth.accounts[0], 'gas': 3100000})


    # Get tx receipt to get contract address
    tx_receipt = None
    pending = True
    while (pending):
        try:
            tx_receipt = web3.eth.getTransactionReceipt(tx_hash)
            pending = False
        except ValueError:

            time.sleep(10)

    time.sleep(5)
    tx_receipt = web3.eth.getTransactionReceipt(tx_hash)

    contract_address = tx_receipt['contractAddress']
    print("The contract address for "+title +" is " + str(contract_address))
    print("The Transaction address for Contract " + title + " is " + str(tx_hash))



if __name__ == '__main__':
    # Note that you should create only one RPCProvider per
    # process, as it recycles underlying TCP/IP network connections between
    # your process and Ethereum node

    #createNewEnvironmen('http://127.0.0.1:8545/')

    runSmartMeter('http://127.0.0.1:8545/','0x55815C4591D5A685d4e81B73Dae32725A0b77FCC')

    # newContract(web3)
    #contract_address = '0x8626A4F15d9c8b3F4D06888F4Bb2185f8EA7A46C'
    #contract_instance = web3.eth.contract(abi=contract_interface['abi'], address=contract_address)







    #contract_instance = web3.eth.contract(contract_interface['abi'], 0xb4770dB21ca1359eCFBb134cC0b2e58463CDfd9D, ContractFactoryClass=ConciseContract)


    #print(contract_instance.transact(transaction={'from': web3.eth.accounts[0], 'gas': 3100000}).setOraclize(web3.eth.accounts[0]))
    # print(contract_instance.transact(transaction={'from': web3.eth.accounts[0], 'gas': 3100000}).buyBackRate())
    # print(contract_instance.call().oraclize())