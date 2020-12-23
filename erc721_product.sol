// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";

/*/contract owned {
    address  public cowner = msg.sender;
    uint256 public price = 22222222;
     modifier onlyOwner {
    require(msg.sender == cowner,"u not owner");
        
 _;
    
}
    
}
*/
contract GameItem is ERC721  {
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
    address  public cowner = msg.sender;
    uint256 public price = 22222222;
     modifier onlyOwner {
    require(msg.sender == cowner,"u not owner");
        
 _;
    
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

        uint256 tokenId = _tokenIds.current();
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURl);
            products[tokenId].Name = _Name;
            products[tokenId].Id = _Id;
            products[tokenId].price = 22222222;
            products[tokenId].url = tokenURl;
            products[tokenId].owner = msg.sender;
            products[tokenId].mfgTimeStamp = uint256(block.timestamp);
        return tokenId;
    }
    
 /*event  Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, 22222);
    }
 */
 
 
 /*function ownerOf(uint256 tokenId) public view override returns (address) {
        return products[tokenId].owner;(tokenId, "ERC721: owner query for nonexistent token");
    }*/
 
  
    
    
    
    
    
      function getProductName(uint256 _tokenId)
        public
        view
        
        returns (
        
            string memory Name
          
          
        )
    {
        return (
             
            products[_tokenId].Name
           
         
       
        );
    }
    
    
    
    function getProdId(uint256 _Index)
        public
        view
        returns (string memory r_token, uint256 r_index,  string memory r_name )
    {
        uint256 _token = tokenOfOwnerByIndex(msg.sender, _Index);
        return (tokenURI(_token), _token,getProductName(_token));
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    function transferFrom(address from, address to, uint256 tokenId) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");

      _transfer(from, to, tokenId);
         products[tokenId].owner = to;
         products[tokenId].Name;
            products[tokenId].Id;
            products[tokenId].url;
            //_transfer(from, to, tokenId);
            products[tokenId].owner  = to;
            products[tokenId].mfgTimeStamp;
    }
 
       function buyproduct(address buy , uint256 tokenId) public  payable returns (
            string memory Name,
            string memory Id,
            string memory url,
            address owner,
            uint256 time
        )
    {
        require(msg.value == 2 ether,"u need 2ether");
             _transfer(buy, msg.sender, tokenId);
        return (
            products[tokenId].Name,
            products[tokenId].Id,
            products[tokenId].url,
            products[tokenId].owner  = msg.sender,
            products[tokenId].mfgTimeStamp
        );
    }
    /*function tr(uint256 _value) public payable  returns (bool success){
       //equire(balance[msg.sender] >= _value,"Insuffcient funds for Transfer source");
        balance[msg.sender] -= _value;
        balance[address(this)] += _value;
        //emit Transfer(msg.sender, _to, _value);
        return true;
    }*/
    
    
    function getconwer() public view returns(address){
        return cowner;
    }
    
    
    
    function getUserBalance(address _user) public view returns (uint256) {
        return balanceOf(_user);
    }
  
      function getContractBalance() public view onlyOwner returns (uint256)  {
         return address(this).balance;
     }
      
       function getContractBalance2() public view  returns (uint256)  {
         return address(this).balance;
     }
      
       function withdrawAmount(uint256 amount) public onlyOwner {
         require(amount <= getContractBalance());
         msg.sender.transfer(amount);
        // emit Transfer(amount);
 
     }
        function withdrawAmount2(uint256 amount) public  {
         require(amount <= getContractBalance());
         msg.sender.transfer(amount);
        // emit Transfer(amount);
 
     }

    
    function money() public payable {}
    
    
}