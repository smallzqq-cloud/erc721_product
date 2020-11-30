// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";

contract owned {
    address  public owner = msg.sender;
    uint256 public price = 22222222;
     modifier onlyOwner {
    require(msg.sender == owner,"u not owner");
        
 _;
    
}}

contract GameItem is ERC721, owned {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
      struct product {
        string Name;
        string Id;
        string url;
        uint256 price;
        address owner;
        uint256 mfgTimeStamp;
    }
 mapping (address => uint256) public balance;
    mapping(uint256 => product) public products;
 mapping (address => uint) pendingWithdraws;

    constructor() public ERC721("GameItem", "ITM") {}
     
 
 
 
 
    function awardItem(string memory tokenURl,string memory _Name,string memory _Id)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURl);
            products[newItemId].Name = _Name;
            products[newItemId].Id = _Id;
            products[newItemId].price = 22222222;
            products[newItemId].url = tokenURl;
            products[newItemId].owner = msg.sender;
            products[newItemId].mfgTimeStamp = uint256(now);
        return newItemId;
    }
    
 /*event  Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, 22222);
    }
 */
 
 
 
 
    function getProduct(uint256 _newItemId)
        public
        view
        
        returns (
            string memory Name,
            string memory Id,
            string memory url,
            address owner,
            uint256 time
        )
    {
        return (
            products[_newItemId].Name,
            products[_newItemId].Id,
            products[_newItemId].url,
            products[_newItemId].owner,
            products[_newItemId].mfgTimeStamp
        );
    }
    function transferFrom(address from, address to, uint256 tokenId) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");

        _transfer(from, to, tokenId);
         products[tokenId].owner = to;
        
    }
 
       function buy1(uint256 _newItemId) public  payable returns (
            string memory Name,
            string memory Id,
            string memory url,
            address owner,
            uint256 time
        )
    {
        require(msg.value == 2 ether,"u need 2ether");
        return (
            products[_newItemId].Name,
            products[_newItemId].Id,
            products[_newItemId].url,
            products[_newItemId].owner = msg.sender,
            products[_newItemId].mfgTimeStamp
        );
    }
    function tr(uint256 _value) public payable  returns (bool success){
       //equire(balance[msg.sender] >= _value,"Insuffcient funds for Transfer source");
        balance[msg.sender] -= _value;
        balance[address(this)] += _value;
        //emit Transfer(msg.sender, _to, _value);
        return true;
    }
    
    
    
    
  
      function getContractBalance() public view onlyOwner returns (uint256)  {
         return address(this).balance;
     }
       function withdrawAmount(uint256 amount) public onlyOwner {
         require(amount <= getContractBalance());
         msg.sender.transfer(amount);
        // emit Transfer(amount);
 
     }

    
}