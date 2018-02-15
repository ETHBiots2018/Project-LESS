
$(window).on('load', function() {
    
    var contractAddressPowerTokenBank = "0x370097e3e12ad7eae334fc0f718ac71f70714dc3"; // in Rinkeby testnet!
	var contractAddressProject = "0x0"; // in Rinkeby testnet!
	var bytecode = "6060604052341561000f57600080fd5b6011805460ff199081169091556014600f55600a60108190556000600881905560038054600160a060020a0333166101000261010060a860020a03199091161790931690925560048054600160a060020a03199081169091556005805482169055600680549091169055819055600b55610c8e8061008e6000396000f30060606040526004361061010e5763ffffffff60e060020a60003504166305b470a4811461011357806313af4035146101405780633a98ef391461015f5780635c693657146101845780635f37c3c61461019a5780635ff3d76a146101b95780636d54a137146101cc5780636f117cb3146101eb57806370a08231146101f357806380c0976e14610212578063a5e1172914610239578063a6675d161461024c578063a8b0086514610264578063a9059cbb14610277578063ab377daa14610299578063bdeaa88f146102cb578063c19d93fb146102de578063c6a023e91461030a578063d0febe4c14610323578063d476caf71461032b578063dfda43321461033e578063e6b7d8a714610351575b600080fd5b341561011e57600080fd5b61013e6004356fffffffffffffffffffffffffffffffff60243516610364565b005b341561014b57600080fd5b61013e600160a060020a03600435166104f8565b341561016a57600080fd5b610172610579565b60405190815260200160405180910390f35b341561018f57600080fd5b61013e60043561057f565b34156101a557600080fd5b61013e600160a060020a03600435166105b1565b34156101c457600080fd5b610172610637565b34156101d757600080fd5b61013e600160a060020a036004351661063d565b61013e6106a3565b34156101fe57600080fd5b610172600160a060020a0360043516610726565b341561021d57600080fd5b610225610738565b604051901515815260200160405180910390f35b341561024457600080fd5b610172610741565b341561025757600080fd5b61013e6004351515610747565b341561026f57600080fd5b61017261077a565b341561028257600080fd5b61013e600160a060020a0360043516602435610780565b34156102a457600080fd5b6102af60043561078f565b604051600160a060020a03909116815260200160405180910390f35b34156102d657600080fd5b61013e6107aa565b34156102e957600080fd5b6102f16107e0565b604051600091820b90910b815260200160405180910390f35b341561031557600080fd5b61013e6004356024356107e9565b61013e6108e5565b341561033657600080fd5b6101726109e5565b341561034957600080fd5b6101726109eb565b341561035c57600080fd5b6101726109f1565b600454600090819033600160a060020a0390811691161461038457600080fd5b60038054600090810b900b1461039957600080fd5b4283612710016fffffffffffffffffffffffffffffffff161180156103d357504261271084036fffffffffffffffffffffffffffffffff16105b15156103de57600080fd5b600e548411156103ed57600080fd5b60115460ff161561040457600f548402915061040c565b601054840291505b5060005b6008548110156104f257600654600160a060020a03166040517f6469737472696275746528616464726573732c75696e743235362900000000008152601b01604051908190039020600083815260026020908152604080832054600a8054600b54600160a060020a0390931680875294869052929094205460e060020a9095049492939102029086026008028115156104a557fe5b0460405160e060020a63ffffffff8516028152600160a060020a039092166004830152602482015260440160006040518083038160008761646e5a03f15050600190920191506104109050565b50505050565b600354600090810b900b6004141561050f57600080fd5b60035433600160a060020a0390811661010090920416148061053f575060055433600160a060020a039081169116145b151561054a57600080fd5b6005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600d5481565b60035433600160a060020a03908116610100909204161461059f57600080fd5b600e556003805460ff19166002179055565b600354600090810b900b600214806105d1575060038054600090810b900b145b15156105dc57600080fd5b60035433600160a060020a0390811661010090920416146105fc57600080fd5b6003805460ff1916811790556004805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600f5481565b600354600090810b900b6004141561065457600080fd5b60035433600160a060020a03908116610100909204161461067457600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600354600090810b900b600214806106c3575060038054600090810b900b145b15156106ce57600080fd5b60035433600160a060020a0390811661010090920416146106ee57600080fd5b600a54600b540234101561070157600080fd5b6003805460ff19166004179055600160a060020a03301631600c556107246109f7565b565b60006020819052908152604090205481565b60115460ff1681565b600e5481565b60035433600160a060020a03908116610100909204161461076757600080fd5b6011805460ff1916911515919091179055565b60075481565b61078b338383610ac5565b5050565b600260205260009081526040902054600160a060020a031681565b600354600090810b900b6001146107c057600080fd5b60035433600160a060020a03908116610100909204161461070157600080fd5b60035460000b81565b600354600090810b900b156107fd57600080fd5b60035433600160a060020a03908116610100909204161461081d57600080fd5b6003805460ff19166001179055600b829055600a819055808202600781905560089004600981815560058054600160a060020a039081166000908152602081905260408082208054909601909555925460035461010090048216845293909220805490930190925590546108919116610b83565b6003546108ab906101009004600160a060020a0316610b83565b5050600754600554600160a060020a0390811660009081526020819052604080822054600354610100900490931682529020540101600d55565b600354600090810b900b6001146108fb57600080fd5b61090433610b83565b600a54600b5402600160a060020a03301631106109b857600a54600b540230600160a060020a03163103340360008033600160a060020a0316600160a060020a031681526020019081526020016000206000828254019250508190555033600160a060020a03166108fc600a54600b540230600160a060020a031631039081150290604051600060405180830381858888f1935050505015156109a657600080fd5b6109ae610bff565b6000600755610724565b600780543490819003909155600160a060020a033316600090815260208190526040902080549091019055565b60105481565b600b5481565b600a5481565b60098054600554600160a060020a0390811660009081526020819052604080822080549490940390935592546003546101009004909116835290822080549190910390555b600854811015610ac257600081815260026020908152604080832054600754600a54600b54600160a060020a03909316808752948690529290942054600c5493946108fc9492909302929092039102811515610a9457fe5b049081150290604051600060405180830381858888f193505050501515610aba57600080fd5b600101610a3c565b50565b600554600160a060020a0384811691161480610af35750600354600160a060020a0384811661010090920416145b15610b2257600954600160a060020a0384166000908152602081905260409020540381901015610b2257600080fd5b600160a060020a03831660009081526020819052604090205481901015610b4857600080fd5b610b5182610b83565b600160a060020a0392831660009081526020819052604080822080548490039055929093168352912080549091019055565b600160a060020a03811660009081526001602052604090205460ff161515610ac257600160a060020a03166000818152600160208181526040808420805460ff1916841790556008805485526002909252909220805473ffffffffffffffffffffffffffffffffffffffff191690931790925580549091019055565b600354600090810b900b600114610c1557600080fd5b600354600160a060020a0361010090910481169030163180156108fc0290604051600060405180830381858888f193505050501515610c5357600080fd5b6003805460ff191660021790555600a165627a7a7230582016720f2e9ed2db47e0d892904abc9e56f7119d7d4d0c0bebac791d4d7081644d0029"
	

	// const solc = require('solc');
	// const Web3 = require('web3');
	// const fs = require('fs');

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


	
	// Compile the source code
	//var input = fs.readFileSync('../contracts/ProjectTemplate.sol');
	//var output = solc.compile(input.toString(), 1);
	// var bytecode = output.contracts['Token'].bytecode;
	const contractAbiPowerTokenBank =
        [{"constant":true,"inputs":[],"name":"buyBackRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"index","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"payToContract","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"rate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"oraclize","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"oc","type":"address"}],"name":"setOraclize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"generated","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sellTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pc","type":"address"}],"name":"addProject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"projects","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"projects_addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"distribute","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}
    ];
    

	// Compile the source code
	//input = fs.readFileSync('../contracts/ProjectTemplate.sol');
	//output = solc.compile(input.toString(), 1);
	//bytecode = output.contracts['Token'].bytecode;
	const contractAbiProject = [{"constant":false,"inputs":[{"name":"energy_In_mWh","type":"uint256"},{"name":"timeStamp","type":"uint128"}],"name":"generateDividend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"met","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pow","type":"uint256"}],"name":"setMaxPower","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"met","type":"address"}],"name":"setMeter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dayprice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"met","type":"address"}],"name":"setPTBank","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"terminateProject","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dayTime","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxPower","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tariffstate","type":"bool"}],"name":"setTariff","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"missing","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shareholders","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancelICO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"int8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"met","type":"uint256"},{"name":"conv","type":"uint256"}],"name":"setAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buyTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"nightprice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CHFtoCollect","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CHFtoWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

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
		const contract = web3.eth.contract(contractAbiProject);

		// Deploy contract instance
		contractInstanceProject = contract.new({
			data: '0x' + bytecode,
			from: web3.eth.currentProvider,
			gas: 90000*2
		}, (err, res) => {
			if (err) {
				console.log(err);
				return;
			}

			// Log the tx, you can explore status with eth.getTransaction()
			console.log(res.transactionHash);

			// If we have an address property, the contract was deployed
			if (res.address) {
				console.log('Contract address: ' + res.address);
				// Let's test the deployed contract
				// testContract(res.address);
				contractAddressProject = res.address;
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
		contractInstanceProject = web3.eth.contract(contractAbiProject).at(address);
		contractAddressProject = address;

		// Deploy contract instance
        $('#project_address').text(address);
	});
	
	cbe = 
	
	
    $('#PTBank-form').on('submit', function(e) {
		e.preventDefault();
		var address = $('#project').val();
        contractInstancePowerTokenBank.addProject(address, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
     
    $('#PayMoney-form').on('submit', function(e) {
        e.preventDefault();
        var money = $('#mooneytocontract').val();
        contractInstancePowerTokenBank.payToContract({
            from: web3.eth.currentProvider,
            value: web3.toWei(money, 'ether')
          }, function(error, txHash) {
            if (error) {
                console.log(error);
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
        contractInstanceProject.setPTBank(address, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#set_amount-form').on('submit', function(e) {
		e.preventDefault();
		var amount = $('#owner').val();
        contractInstanceProject.setAmount(parseInt(amount), 1, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    $('#eth_rate-form').on('submit', function(e) {
        e.preventDefault();
        
        contractInstanceProject.setMeter($('#setMeterVal').val(), function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });
    
    $('#collect_funds-form').on('submit', function(e) {
        e.preventDefault();
        var money = $('#collect_funds').val();
        contractInstanceProject.buyTokens({
            from: web3.eth.currentProvider,
            value: web3.toWei(money, 'ether')
          }, function(error, txHash) {
            if (error) {
                console.log(errorMsg);
                return;
            }
        });
    });

    
    $('#maxpower-form').on('submit', function(e) {
		 e.preventDefault();
		 var maxpower = $('#maxpower').val();
         contractInstanceProject.setMaxPower(maxpower, function(error, res) {
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
         contractInstanceProject.setMeter(address, function(error, res) {
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
