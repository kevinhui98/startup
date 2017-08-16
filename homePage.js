$(document).ready(function() {

	var term;
	var market;

	$("#tradeWeb").click(function() {
		$("#dropdownMenuButton").text("TW UST US RTS");
		// alert($("#tradeWeb").text());
		// $(".twMarket").show();
		// $(".bbgMarket").hide();
	});
	$("#bloomberg").click(function() {
		$("#dropdownMenuButton").text("BBG IRS US RTS");
		// $(".bbgMarket").show();
		// $(".twMarket").hide();
	});
	
	
	$("#searchBtn").click(function() {
		term = $("#term").val()
		market = $("#dropdownMenuButton").text();
		if (term === "TRSY_20170809_1305" && market === "TW UST US RTS") {
			$("#nicePage1305").show();
			$("nicePage344").hide();
		} else if(term === "TRSY_20170809_344" && market === "TW UST US RTS"){
			$("#nicePage344").show();
			$("#nicePage1305").hide();
		} else if(term === "00000323_20170809_07" && market === "BBG IRS US RTS"){
			$("#nicePage323").show();
			$("#nicePage487").hide();
		} else if(term === "00000487_20170809_07" && market === "BBG IRS US RTS"){
			$("#nicePage487").show();
			$("#nicePage323").hide();
		}

	});
	$("#moreInfo").click(function() {
	    $("#extraInfo").show();
	});
});
