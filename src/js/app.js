const web3ProviderAddress = 'https://ropsten.infura.io'

var account
var aixAddress = '0xFeEaed9eeb9bbf07E3bBB627CC736172CB04C776'
var aixAbi =
  '[{"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_amount", "type": "uint256"} ], "name": "approve", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "creationBlock", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_amount", "type": "uint256"} ], "name": "transferFrom", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "allowedBalance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_newController", "type": "address"} ], "name": "changeController", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_blockNumber", "type": "uint256"} ], "name": "balanceOfAt", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_value", "type": "uint256"} ], "name": "setMaxAmount", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "version", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "maxAmount", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_cloneTokenName", "type": "string"}, {"name": "_cloneDecimalUnits", "type": "uint8"}, {"name": "_cloneTokenSymbol", "type": "string"}, {"name": "_snapshotBlock", "type": "uint256"}, {"name": "_transfersEnabled", "type": "bool"} ], "name": "createCloneToken", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_value", "type": "uint256"} ], "name": "setAllowedBalance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_owner", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "parentToken", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_amount", "type": "uint256"} ], "name": "generateTokens", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "_blockNumber", "type": "uint256"} ], "name": "totalSupplyAt", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_amount", "type": "uint256"} ], "name": "transfer", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "transfersEnabled", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "parentSnapShotBlock", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_amount", "type": "uint256"}, {"name": "_extraData", "type": "bytes"} ], "name": "approveAndCall", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_amount", "type": "uint256"} ], "name": "destroyTokens", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"} ], "name": "allowance", "outputs": [{"name": "remaining", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_token", "type": "address"} ], "name": "claimTokens", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenFactory", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_transfersEnabled", "type": "bool"} ], "name": "enableTransfers", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "controller", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"inputs": [{"name": "_tokenFactory", "type": "address"} ], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_token", "type": "address"}, {"indexed": true, "name": "_controller", "type": "address"}, {"indexed": false, "name": "_amount", "type": "uint256"} ], "name": "ClaimedTokens", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_amount", "type": "uint256"} ], "name": "Transfer", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_cloneToken", "type": "address"}, {"indexed": false, "name": "_snapshotBlock", "type": "uint256"} ], "name": "NewCloneToken", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_owner", "type": "address"}, {"indexed": true, "name": "_spender", "type": "address"}, {"indexed": false, "name": "_amount", "type": "uint256"} ], "name": "Approval", "type": "event"} ]'
var tokenInstanse

$('#address').html(aixAddress.toString())

function errorHappened(err) {
  if (err != null) {
    console.log(err)
    alert('There was an error fetching contract.')
    return true
  }
}

window.App = {
  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider
    } else {
      App.web3Provider = new Web3.providers.HttpProvider(web3ProviderAddress)
    }
    web3 = new Web3(App.web3Provider)

    web3.eth.net.getNetworkType((err, netId) => {
      if (errorHappened(err)) {
        return
      }
      switch (netId) {
        case 'ropsten':
          console.log('This is the ropsten test network.')
          break
        default:
          console.log('In this network faucet will not work:' + netId)
          alert('Wrong network: ' + netId + '. Switch wallet to ROPSTEN')
      }
    })

    return App.start()
  },

  start: function() {
    var self = this

    web3.eth.getAccounts(function(err, accounts) {
      if (errorHappened(err)) {
        return
      }
      account = accounts[0]
      $('#myAccount').html(account.toString())
    })

    tokenInstanse = new web3.eth.Contract(JSON.parse(aixAbi), aixAddress)
  }
}

$('#btn_generate').on('click', function(event) {
  var amount = web3.utils.toWei('100')

  tokenInstanse.methods
    .generateTokens(account, amount)
    .send({
      from: account
    })
    .once('transactionHash', txHash => {
      alert('Transaction created: ' + 'https://ropsten.etherscan.io/tx/' + txHash)
    })
    .once('receipt', receipt => {})
    .on('error', error => {
      errorHappened(error)
    })
})

$(function() {
  $(window).load(function() {
    App.initWeb3()
  })
})
