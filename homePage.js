$(document).ready(function(){

$("#tradeWeb").click(function(){
	$(".twMarket").show();
	$(".bbgMarket").hide();
	alert("You are in trade web!")
});
$("#bloomberg").click(function(){
	$(".bbgMarket").show();
	$(".twMarket").hide(); 
});
});