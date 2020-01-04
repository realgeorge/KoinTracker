var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {

var bg = chrome.extension.getBackgroundPage();
				 
					 if(bg.coin=="ETH"){
						 $scope.s = {switch:true};
					 }
					 
				  bg.updatePrices(function(){
					 $scope.$apply(function(){
						 $scope.prices = bg.prices;
					 })  
				  });	 
				 $scope.prices = bg.prices;

$scope.save = function(){
	var s = $scope.s.switch;
	var coin;
	 if(s){
		 coin = "ETH";
	 } else {
		 coin = "BTC";
	 }
	 
	 bg.coin = coin;
	 bg.updateBadge();
}


});