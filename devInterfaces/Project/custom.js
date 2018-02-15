$(window).on('load', function() {
    
    var contractAddress = "0x370097e3e12ad7eae334fc0f718ac71f70714dc3"; // in Rinkeby testnet!
    var contractAbi = [
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
    var contractInstance = web3.eth.contract(contractAbi).at(contractAddress);
    
//     contractInstance.oraclize(function(error, oraclize) {
//         if (error) {
//             var errorMsg = 'error reading oraclize from smart contract: ' + error;
//             $('#content').text(errorMsg);
//             console.log(errorMsg);
//             return;
//         }
//         $('#content').text('oraclize from contract: ' + oraclize);
//     });
    
    
    $('#setTariff').on('submit', function(e) {
        e.preventDefault();
        contractInstance.setTariff($('#setTariffVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
     
    $('#transfer').on('submit', function(e) {
        e.preventDefault();
        contractInstance.transfer($('#transferAddress').val(), $('#transferAmount').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    }); 
    
    $('#buyTokens').on('submit', function(e) {
        e.preventDefault();
        contractInstance.buyTokens.sendTransaction({value:$('#buyTokensVal').val() * 1000000000000000000},function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#cancelICO').on('submit', function(e) {
        e.preventDefault();
        contractInstance.cancelICO(function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#generateDividend').on('submit', function(e) {
        e.preventDefault();
        contractInstance.generateDividend($('#generateDividendVal').val(), $('#generateDividendTimestamp').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#setMeter').on('submit', function(e) {
        e.preventDefault();
        contractInstance.setMeter($('#setMeterVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
    
    $('#terminateProject').on('submit', function(e) {
        e.preventDefault();
        contractInstance.terminateProject(function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    
    $('#balanceOf').on('submit', function(e) {
         e.preventDefault();
         contractInstance.balanceOf.call($('#balanceOfVal').val(), function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });

    $('#shareholders').on('submit', function(e) {
         e.preventDefault();
         contractInstance.shareholders.call($('#shareholdersVal').val(), function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });
    
    $('#state').on('submit', function(e) {
         e.preventDefault();
         contractInstance.state.call(function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });    
    
});

function cb(error, response) {
    // callback as helper function for debugging purposes
    console.log('error: ' + error + ', response: ' + response);
}
