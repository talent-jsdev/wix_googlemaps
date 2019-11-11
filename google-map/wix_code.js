// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixWindow from 'wix-window';
import wixData from 'wix-data';

$w.onReady(function () {
	//TODO: write your page related code here...
	$w('#button2').onClick(function(){
		let source = $w('#dropdown1').value;
		let destination = $w("#input1").value;
		if(source !== '' && destination !== ''){
			$w("#html1").postMessage({source, destination});
		} else {
			var error = '';
			if(source === ''){
				error += "Please input DELIVER FROM.\n";
			}
			if(destination === ''){
				error += "Please input DELIVERY ADDRESS.";
			}
			$w("#text13").text = error;
		}
	})

	var dataStructure = function (source, destination, distance) {
		this.source = source;
		this.destination = destination;
		this.distance = distance;
	};

	$w("#html1").onMessage(function(event){
		let source = $w('#dropdown1').value;
		let destination = $w("#input1").value;
		var distance = Math.round(event.data);
		var insert_data = new dataStructure(source, destination, distance);
		wixData.insert("calc", insert_data);
		// var distance = event.data;
		var result;
		if(distance < 20)
			result = "free";
		else if(distance < 40)
			result = "The fee is $" + (distance - 20) * 3;
		else {
			result = "we can manually quote on the work.";
			wixWindow.openLightbox("Contact (What's Up?)");
		}

		$w("#text13").text = "Delivery to the above address is:" + distance + "km\n" + result;
	})
});


