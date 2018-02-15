$(window).on('load', function() {
    
    var contractAddressPowerTokenBank = "0x370097e3e12ad7eae334fc0f718ac71f70714dc3"; // in Rinkeby testnet!
	var contractAddressProject = "0x0"; // in Rinkeby testnet!
	
    var contractAbiProject = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "energy_In_mWh",
				"type": "uint256"
			},
			{
				"name": "timeStamp",
				"type": "uint128"
			}
		],
		"name": "generateDividend",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "met",
				"type": "address"
			}
		],
		"name": "setMeter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "terminateProject",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tariffstate",
				"type": "bool"
			}
		],
		"name": "setTariff",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shareholders",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "cancelICO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"name": "",
				"type": "int8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyTokens",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
	
	
var contractAbiPowerTokenBank = [
	{
		"constant": true,
		"inputs": [],
		"name": "oraclize",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyBackRate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "projects",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "pc",
				"type": "address"
			}
		],
		"name": "addProject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "oc",
				"type": "address"
			}
		],
		"name": "setOraclize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sellTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "distribute",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "rate",
				"type": "uint256"
			}
		],
		"name": "setRate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
	
];

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        $('#content').text('web3 injected');
        window.web3 = new Web3(web3.currentProvider);
    } else {
        var errorMsg = 'I doesn\'t have web3 :( Please open in Google Chrome Browser and install the Metamask extension.';
        $('#content').text(errorMsg);
        console.log(errorMsg);
        return;
    }
    
    // create instance of contract object that we use to interface the smart contract
    var contractInstancePowerTokenBank = web3.eth.contract(contractAbiPowerTokenBank).at(contractAddressPowerTokenBank);
    
//     contractInstancePowerTokenBank.oraclize(function(error, oraclize) {
//         if (error) {
//             var errorMsg = 'error reading oraclize from smart contract: ' + error;
//             $('#content').text(errorMsg);
//             console.log(errorMsg);
//             return;
//         }
//         $('#content').text('oraclize from contract: ' + oraclize);
//     });
    
    $('#deployProjectContract').on('deploy', function(e) {
        e.preventDefault();
		
		const fs = require('fs');
		const solc = require('solc');
		const Web3 = require('web3');

		// Connect to local Ethereum node
		const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

		// Compile the source code
		const input = fs.readFileSync('ProjectTemplate.sol');
		const output = solc.compile(input.toString(), 1);
		const bytecode = output.contracts['Token'].bytecode;
		const abi = JSON.parse(output.contracts['Token'].interface);

		// Contract object
		const contract = web3.eth.contract(abi);

		// Deploy contract instance
		const contractInstance = contract.new({
			data: '0x' + bytecode,
			from: web3.eth.coinbase,
			gas: 90000*2
		}, (err, res) => {
			if (error) {
				console.log(error);
				return;
			}

			// Log the tx, you can explore status with eth.getTransaction()
			console.log(res.transactionHash);

			// If we have an address property, the contract was deployed
			if (res.address) {
				console.log('Contract address: ' + res.address);
				// Let's test the deployed contract
				testContract(res.address);
			}
		});

		// Quick test the contract

		function testContract(address) {
			// Reference to the deployed contract
			const token = contract.at(address);
			// Destination account for test
			const dest_account = '0x002D61B362ead60A632c0e6B43fCff4A7a259285';

			// Assert initial account balance, should be 100000
			const balance1 = token.balances.call(web3.eth.coinbase);
			console.log(balance1 == 1000000);

			// Call the transfer function
			token.transfer(dest_account, 100, {from: web3.eth.coinbase}, (err, res) => {
				// Log transaction, in case you want to explore
				console.log('tx: ' + res);
				// Assert destination account balance, should be 100 
				const balance2 = token.balances.call(dest_account);
				console.log(balance2 == 100);
			});
	}
        
    });
	
	
    $('#setTariff').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.setTariff($('#setTariffVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
     
    $('#transfer').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.transfer($('#transferAddress').val(), $('#transferAmount').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    }); 
    
    $('#buyTokens').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.buyTokens.sendTransaction({value:$('#buyTokensVal').val() * 1000000000000000000},function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#cancelICO').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.cancelICO(function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#generateDividend').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.generateDividend($('#generateDividendVal').val(), $('#generateDividendTimestamp').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#setMeter').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.setMeter($('#setMeterVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
    
    $('#terminateProject').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.terminateProject(function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    
    $('#balanceOf').on('submit', function(e) {
         e.preventDefault();
         contractInstancePowerTokenBank.balanceOf.call($('#balanceOfVal').val(), function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });

    $('#shareholders').on('submit', function(e) {
         e.preventDefault();
         contractInstancePowerTokenBank.shareholders.call($('#shareholdersVal').val(), function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });
    
    $('#state').on('submit', function(e) {
         e.preventDefault();
         contractInstancePowerTokenBank.state.call(function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });    
    
});


const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

// Connect to local Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Compile the source code
const input = fs.readFileSync('ProjectTemplate.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts['Token'].bytecode;
const abi = JSON.parse(output.contracts['Token'].interface);

// Contract object
const contract = web3.eth.contract(abi);

// Deploy contract instance
const contractInstance = contract.new({
    data: '0x' + bytecode,
    from: web3.eth.coinbase,
    gas: 90000*2
}, (err, res) => {
    if (error) {
        console.log(error);
        return;
    }

    // Log the tx, you can explore status with eth.getTransaction()
    console.log(res.transactionHash);

    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
        // Let's test the deployed contract
        testContract(res.address);
    }
});

// Quick test the contract

function testContract(address) {
    // Reference to the deployed contract
    const token = contract.at(address);
    // Destination account for test
    const dest_account = '0x002D61B362ead60A632c0e6B43fCff4A7a259285';

    // Assert initial account balance, should be 100000
    const balance1 = token.balances.call(web3.eth.coinbase);
    console.log(balance1 == 1000000);

    // Call the transfer function
    token.transfer(dest_account, 100, {from: web3.eth.coinbase}, (err, res) => {
        // Log transaction, in case you want to explore
        console.log('tx: ' + res);
        // Assert destination account balance, should be 100 
        const balance2 = token.balances.call(dest_account);
        console.log(balance2 == 100);
    });
}


function cb(error, response) {
    // callback as helper function for debugging purposes
    console.log('error: ' + error + ', response: ' + response);
}
