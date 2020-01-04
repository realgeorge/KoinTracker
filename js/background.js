chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({
      url: 'https://cryptools.org/',
      active: true
    });
  
    return false;
  });

var coin = "BTC";

var apiKey = "21bb9daeacff6d5a91b09bb3a2a8da791ce56f90029c46abb53290334d614e1c";
var prices = {};

  function updatePrices(callback){
      
      $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key="+apiKey,function(res){
             prices.BTC = res.USD;	
          $.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key="+apiKey,function(res2){
                prices.ETH = res2.USD;		
             
            updateBadge();	
           if(callback){
               callback();
           }			   
      })
      })
  }
  
  
  function updateBadge(){
      var p = prices[coin];
      
      chrome.browserAction.setBadgeText({text:parseInt(p).toString()});
  }
  
  
  updatePrices();
  
  setTimeout(function(){
      updatePrices();	 
  },1000*60*1);