// For full API documentation, including code examples, visit https://wix.to/94BuAAs

$w.onReady(function () {
	//TODO: write your page related code here...
	$w('#button2').onClick(function(){
		let source = $w('#dropdown1').value;
		let destination = $w("#input1").value;
		$w("#html1").postMessage({source, destination});
	})

	$w("#html1").onMessage(function(event){
		var distance = event.data;
		var result;
		if(distance < 20)
			result = "free";
		else if(distance < 40)
			result = "The fee is $" + parseFloat((distance - 20) * 3).toFixed(2);
		else
			result = "we can manually quote on the work.";

		$w("#text13").text = "Delivery to the above address is:" + distance + "km\n" + result;
	})
});


