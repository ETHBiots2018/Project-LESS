$(window).on('load', function() {
    
    var contractAddressPowerTokenBank = "0x370097e3e12ad7eae334fc0f718ac71f70714dc3"; // in Rinkeby testnet!
	var contractAddressProject = "0x0"; // in Rinkeby testnet!
	
    var contractAbiProject = 0;
	
	
	var contractAbiPowerTokenBank = 0;
	

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

	const fs = require('fs');
	const solc = require('solc');
	const Web3 = require('web3');
	
	// Compile the source code
	const input = fs.readFileSync('../contracts/ProjectTemplate.sol');
	const output = solc.compile(input.toString(), 1);
	const bytecode = output.contracts['Token'].bytecode;
	const contractAbiProject = JSON.parse(output.contracts['Token'].interface);


	// Compile the source code
	const input = fs.readFileSync('../contracts/ProjectTemplate.sol');
	const output = solc.compile(input.toString(), 1);
	const bytecode = output.contracts['Token'].bytecode;
	const contractAbiPowerTokenBank = JSON.parse(output.contracts['Token'].interface);

    // create instance of contract object that we use to interface the smart contract
    var contractInstancePowerTokenBank = web3.eth.contract(contractAbiPowerTokenBank).at(contractAddressPowerTokenBank);
	var contractInstanceProject = 0;
//     contractInstancePowerTokenBank.oraclize(function(error, oraclize) {
//         if (error) {
//             var errorMsg = 'error reading oraclize from smart contract: ' + error;
//             $('#content').text(errorMsg);
//             console.log(errorMsg);
//             return;
//         }
//         $('#content').text('oraclize from contract: ' + oraclize);
//     });


    
    $('#deploy_project-form').on('submit', function(e) {
        e.preventDefault();

		// Contract object
		const contract = web3.eth.contract(abi);

		// Deploy contract instance
		contractInstanceProject = contract.new({
			data: '0x' + bytecode,
			from: web3.eth.currentProvider,
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
				// testContract(res.address);
				contractAddressProject = res.address
				$('#project_address').text(contractAddressProject);
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
	
    $('#project-form').on('submit', function(e) {
        e.preventDefault();

		// Contract object
		var address = $('#project').val();
		contractInstancePowerTokenBank = web3.eth.contract(contractAbiProject).at(address);
		contractAddressProject = adress

		// Deploy contract instance
        $('#project_address').text(address);
	});
	
	cbe = 
	
	
    $('#PTBank-form').on('submit', function(e) {
		e.preventDefault();
		var address = $('#project').val();
		contractAddressPowerTokenBank = adress
        contractAbiPowerTokenBank.addProject(address, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
     
    $('#PayMoney-form').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.payToContract(function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    }); 
    
    $('#owner-form').on('submit', function(e) {
		e.preventDefault();
		var address = $('#owner').val();
        contractInstanceProject.setOwner(address, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#set_bank-form').on('submit', function(e) {
		e.preventDefault();
		var address = $('#owner').val();
        contractInstancePowerTokenBank.setPTBank(address, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#set_amount-form').on('submit', function(e) {
		e.preventDefault();
		var amount = $('#owner').val();
        contractInstancePowerTokenBank.setAmount(parseInt(amount), 1, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#eth_rate-form').on('submit', function(e) {
        e.preventDefault();
        contractInstancePowerTokenBank.setMeter($('#setMeterVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
    
    $('#collect_funds-form').on('submit', function(e) {
        e.preventDefault();
        contractInstanceProject.buyTokens(function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    
    $('#maxpower-form').on('submit', function(e) {
		 e.preventDefault();
		 var maxpower = $('#maxpower').val();
         contractInstancePowerTokenBank.setMaxPower(maxpower, function(error, res) {
            if (error) {
                console.log(error);
                return;
            }
            $('#content').text(res);
         });
     });

    $('#smart_meter-form').on('submit', function(e) {
		 e.preventDefault();
		 var address = $('#smart_meter').val();
         contractInstancePowerTokenBank.setMeter(address, function(error, res) {
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
