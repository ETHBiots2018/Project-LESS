$(window).on('load', function() {
    
    var contractAddress = "0xdbf30d5a88285aec859ed10111934b7b8ea583ab"; // in Rinkeby testnet!
    var contractAbi = [
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
    
    
    $('#addProject').on('submit', function(e) {
        e.preventDefault();
        contractInstance.addProject($('#addProjectVal').val(), function(error, txHash) {
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
    
    $('#setRate').on('submit', function(e) {
        e.preventDefault();
        contractInstance.setRate($('#setRateVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#distribute').on('submit', function(e) {
        e.preventDefault();
        contractInstance.distribute($('#distributeAddress').val(), $('#distributeAmount').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#setOraclize').on('submit', function(e) {
        e.preventDefault();
        contractInstance.setOraclize($('#setOraclizeVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#sellTokens').on('submit', function(e) {
        e.preventDefault();
        contractInstance.sellTokens($('#sellTokensVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
  
    $('#admin').on('submit', function(e) {
         e.preventDefault();
         contractInstance.admin.call(function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
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
    
    $('#buyBackRate').on('submit', function(e) {
         e.preventDefault();
         contractInstance.buyBackRate.call(function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });

    $('#oraclize').on('submit', function(e) {
         e.preventDefault();
         contractInstance.oraclize.call(function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });

    $('#projects').on('submit', function(e) {
         e.preventDefault();
         contractInstance.projects.call($('#projectsVal').val(), function(error, res) {
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
