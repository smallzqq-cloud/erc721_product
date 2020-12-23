console.log("Hello")
if (typeof window.ethereum !== 'undefined') {
	console.log('MetaMask is installed!');
}
console.log("isMetamask:" + ethereum.isMetaMask)

$(".enableEthereumButton").click(function (

) {
	//alert("sssssss")
	ethereum.request({ method: 'eth_requestAccounts' });
})

let accounts = [];
//const ethereumButton = document.querySelector('.enableEthereumButton');

/*ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
  ethereum.request({ method: 'eth_requestAccounts' });
});*/
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
	getAccount();
});

async function getAccount() {
	accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	//showAccount.innerHTML = account;
	
	$(".showAccount").html(account);
}







/*$(".sendEthButton").click(function () {
	ethereum
		.request({
			method: 'eth_sendTransaction',
			params: [
				{
					from: accounts[0],
					to: '0xdC0Bde1239e9141a72E6D7E6aD44715C372267a6',
					value: '0x16345785d8a0000',
					gasPrice: '0x0910',
					gas: '0x6710',
				},
			],
		})
		.then((txHash) => console.log(txHash))
		.catch((error) => console.error);

})
*/

//0xa9dC32F18B8587C9e82848D857379F11FA2050a3

ethereum.on('accountsChanged', function (accounts) {
	// Time to reload your interface with accounts[0]!
	getAccount()
	co()
	//location.reload();
});

ethereum.on('chainChanged', (chainId) => {
	// Handle the new chain.
	// Correctly handling chain changes can be complicated.
	// We recommend reloading the page unless you have a very good reason not to.
	// window.location.reload();
	console.log(chainId)
});

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");


var cabi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenURl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Id",
				"type": "string"
			}
		],
		"name": "awardItem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "buy",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "buyproduct",
		"outputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "url",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "money",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawAmount2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cowner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getconwer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Index",
				"type": "uint256"
			}
		],
		"name": "getProdId",
		"outputs": [
			{
				"internalType": "string",
				"name": "r_token",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "r_index",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "r_name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getProductName",
		"outputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "url",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "mfgTimeStamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


//address = "0xd57080cFe18041565f492c6eaF3e55fDa4a5b54f"
/**
 * 如果web3js大于1.0 要用Contract 不然就用contract
 */
var contractERC712Abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "baseURI_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var contractERC721;
var contractERC721address = "0x1760eA99044D72c3f798E3EBFfE897fa996F972e";
function getErc721() {
	contractERC721 = new web3.eth.Contract(contractERC712Abi, "0xC55a8b4F8dA63f991edCA1cEed7f78fE93352173");
	console.log('contractERC721==>', contractERC721);
}




var contract = new web3.eth.Contract(cabi, "0x4C2a28DceA48Bb7C2527D81AEaC5C6748b58d168");
console.log(contract)





async function getProdID(_index) {
    contract.methods.getProdId(_index).call({ from: accounts[0] }).then(
        function (result) {
            console.log("getP=========", result)
            console.log("get—_index=========", _index)
            console.log("get_r_index=========",result.r_index)


            $("#pitem" + _index).html(result.r_token);
			$("#tokenIndex" + _index).html(result.r_name);
			$("#tokenID" + _index).html(result.r_index);

        }
    );

}

/*async function getProduct(_tokenId) {

	contract.methods.getProduct(_tokenId).call({ from: accounts[0] }).then(
		function (result) {
			console.log("查询id",_tokenId)
			console.log("getProduct===========", result)
			$("#pitem" + _tokenId).html(result.Name);
			$("#tokenIndex" + _tokenId).html(result.url);
			$("#tokenID" + _tokenId).html(_tokenId);
		}
	);

}

$("#Btn_getErc721").click(function () {
	console.log("Btn_getErc721");
	getErc721($(".ErcAddress").html())
}
)

*/





async function co(){

	contract.methods.getconwer().call({ from: accounts[0] }).then(
		function (result) {
		
			
			if( result.toUpperCase() == accounts[0].toUpperCase()){
			
				console.log("hello , my master~")                                                                                  //<button id="Btn_send' + i + '"  onClick="sendBtn(' + i + ')">转账</button>           
				var aa = $('<div> URL: <input id="URL1" value="" />  NAME: <input id="NAME1" value="" />  ID: <input id="ID1" value="" />  <button id="Btn_CreatItem" onClick="CB()">CreatItem</button>  </div>');
				
			}else{
				
				console.log(" u not onwer !")
			}
			$('#box2').append(aa);
			$(".ContractOwner").html(result)
		}
		
	);

}

function display_alert()
  {
  alert("I am an alert box!!")
  }




function getBalance() {
	console.log("Ssssssss")
	contract.methods.getUserBalance(accounts[0]).call({ from: accounts[0] }).then(
		function (result) {
			console.log('getUserBalance-========');
			$('#box').children().remove();
			console.log('getUserBalance', result);
			$("#MyBalance").html(result)
			for (var i = 0; i < result; i++) {
				console.log("result====",result)
				console.log(i + "========================")
				///$("#tokenID").html(i);
				var el = $('<div>产品  Url: <span id="pitem' + i + '">-- </span># Name: <span id="tokenIndex' + i + '"></span>||产品编号：<span id="tokenID' + i + '"></div>');
				console.log("ssssbbbbbb")
				console.log(i)
				getProdID(i);
				$('#box').append(el);
			}

		}
	);
}

function sendBtn(i) {
	_address = $('#s_address' + i).val();
	console.log("address", _address);
	p_index = $("#tokenID" + i).html();
	console.log("tokenid",p_index)
	alert('send' + i + "#" + _address + "#" + p_index);
	// transferProd
	getErc721($(".ErcAddress").html());
	contractERC721.methods.transferFrom(accounts[0], _address, p_index).send({ from: accounts[0] }).then(
		function (result) {
			console.log("transferProd==>", result);
			if (result.status) {
				$(".txt_CreatItem").html("添加成功")
				getBalance();
			} else {
				hide
				$(".txt_CreatItem").html("添加失败")
			}
			// $("#load_ci_img").hide();
		}
	)

}


$("#Btn_getTotalSupply").click(function () {
	console.log("total","Btn_getTotalSupply");
	contract.methods.totalSupply().call({ from: accounts[0] }).then(
		function (result) {
			console.log(result)
			getBalance();
			$(".txt_getTotalSupply").html(result)
		}
	);

}
)



//withdrawAmou








/*contract.methods.getMsg().call({from:accounts[0]}).then(
	function(result){
		console.log(result)
	}
)*/







/*$("#onwer").click(function () {

	contract.methods.getconwer().call({ from: accounts[0] }).then(
		function (result) {
		
			if( result == accounts[0]){
				console.log("ok!!!!")
			}else{
				console.log("not ok !!!!")
			}
			$(".ContractOwner").html(result)
		}
	);

}
)*/
$("#onwerbalance").click(function () {

	contract.methods.getContractBalance().call({ from: accounts[0] }).then(
		function (result) {
			console.log(result)
			
			$(".ContractBalance").html(result)
		}
	);

}
)



$("#Btn_CreatItem1").click(function () {
	console.log("Btn_CreatItem");
	// $("#load_ci_img").show();
	let _url = $("#URL1").val()
	let _Name = $("#NAME1").val()
	let _ID = $("#ID1").val()
	// console.log($("#arraytxt").val().length)
	if (_url.length < 3) {
		alert("长度不能小于3")
	} else {
		contract.methods.awardItem(_url, _Name, _ID).send({ from: accounts[0] }).then(
			function (result) {
				console.log("result", result);
				if (result.status) {
					$(".txt_CreatItem").html("添加成功")


					getBalance();
				} else {
					hide
					$(".txt_CreatItem").html("添加失败")
				}
				$("#load_ci_img").hide();
			}
		)

	}
}






)





function CB() {
	console.log("Btn_CreatItem");
	// $("#load_ci_img").show();
	let _url = $("#URL1").val()
	let _Name = $("#NAME1").val()
	let _ID = $("#ID1").val()
	// console.log($("#arraytxt").val().length)
	if (_url.length < 3) {
		alert("长度不能小于3")
	} else {
		contract.methods.awardItem(_url, _Name, _ID).send({ from: accounts[0] }).then(
			function (result) {
				console.log("result", result);
				if (result.status) {
					$(".txt_CreatItem").html("添加成功")


					getBalance();
				} else {
					hide
					$(".txt_CreatItem").html("添加失败")
				}
				$("#load_ci_img").hide();
			}
		)

	}
}



















$("#buy").click(function (from,TOKENID) {
    console.log("Btn_getTotalSupply");
	 TOKENID = $("#TOKENID").val()
	console.log("ssssssaaaaaa",TOKENID)
	 from = $("#from").val()
	console.log("ffff",)
    contract.methods.buyproduct(from,TOKENID).send({ from: accounts[0],value: 2 * Math.pow(10, 18) }).then(
        function (result) {
            console.log(result)
            
        }
    );

}
)

$("#withdrawAmount").click(function (_amount) {
	_amount = $("#amount").val()
	console.log("amount",_amount)
	contract.methods.withdrawAmount(_amount).send({ from: accounts[0] }).then(
		function (result) {
			console.log("getamount",result)
			
		}
	);

}
)
