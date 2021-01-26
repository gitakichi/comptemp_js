var kanji0 = "都市1";
var htemp0 = [0,0,0,0,0,0,0,0,0,0,0,0];
var ltemp0 = [0,0,0,0,0,0,0,0,0,0,0,0];
var kanji1 = "都市2";
var htemp1 = [0,0,0,0,0,0,0,0,0,0,0,0];
var ltemp1 = [0,0,0,0,0,0,0,0,0,0,0,0];
var kanji2 = "都市3";
var htemp2 = [0,0,0,0,0,0,0,0,0,0,0,0];
var ltemp2 = [0,0,0,0,0,0,0,0,0,0,0,0];

function citylist(){
	var html_text = `<select id=\"city0\">\n`;
	for(var i = 0;i < weather.length;i++){
		html_text += `<option value=\"${i}\">${weather[i]['kanji']}</option>\n`;
	}
	html_text += `</select>\n`;
	
	html_text += `<select id=\"city1\">\n`;
	for(var i = 0;i < weather.length;i++){
		html_text += `<option value=\"${i}\">${weather[i]['kanji']}</option>\n`;
	}
	html_text += `</select>\n`;
	
	html_text += `<select id=\"city2\">\n`;
	for(var i = 0;i < weather.length;i++){
		html_text += `<option value=\"${i}\">${weather[i]['kanji']}</option>\n`;
	}
	html_text += `</select>\n`;
	
	html_text += `<button type="button" onclick="drawChart(3)">build</button>\n`;
	//document.write(html_text);
	var element = document.getElementById("selector_area");
	element.innerHTML = html_text;
}


function drawChart(city_len) {
	var ctx = document.getElementById("myLineChart");
	
	var city0 = document.getElementById("city0").value;
	var city1 = document.getElementById("city1").value;
	var city2 = document.getElementById("city2").value;
	
	//console.log(weather[city0]['kanji'],weather[city0]['province']);
	//console.log(weather[city1]['kanji'],weather[city1]['province']);
	//console.log(weather[city2]['kanji'],weather[city2]['province']);
	
	var kanji0 = weather[city0]['kanji'];
	var htemp0 = weather[city0]['htemp'];
	var ltemp0 = weather[city0]['ltemp'];
	var kanji1 = weather[city1]['kanji'];
	var htemp1 = weather[city1]['htemp'];
	var ltemp1 = weather[city1]['ltemp'];
	var kanji2 = weather[city2]['kanji'];
	var htemp2 = weather[city2]['htemp'];
	var ltemp2 = weather[city2]['ltemp'];

	let json0={
		label:kanji0+'の最高気温',
		data: htemp0,
		borderColor: "rgba(255,0,0,1)",
		backgroundColor: "rgba(0,0,0,0)"
	};
	let json1={
		label: kanji0+'の最低気温',
		data: ltemp0,
		borderColor: "rgba(0,0,255,1)",
		backgroundColor: "rgba(0,0,0,0)"
	};
	let json2={
		label: kanji1+'の最高気温',
		data: htemp1,
		borderColor: "rgba(255,165,0,1)",
		backgroundColor: "rgba(0,0,0,0)"
	};
	let json3={
		label: kanji1+'の最低気温',
		data: ltemp1,
		borderColor: "rgba(0,0,0,1)",
		backgroundColor: "rgba(0,0,0,0)"
	};
	let json4={
		label: kanji2+'の最高気温',
		data: htemp2,
		borderDash: [5, 5],
		borderColor: "rgba(255,0,0,1)",
		backgroundColor: "rgba(0,0,0,0)"
	};
	let json5={
		label: kanji2+'の最低気温',
		data: ltemp2,
		borderDash: [5, 5],
		borderColor: "rgba(0,0,255,1)",
		backgroundColor: "rgba(0,0,0,0)"
	};

	let json_dataset = [json0,json1,json2,json3,json4,json5];
	let title_city = {
		display: true,
		text: kanji0+'の平均気温(2018)'
	};
	
	if (city_len==1){
		json_dataset = [json0,json1];
		title_city = {
			display: true,
			text: kanji0+'の平均気温(2018)'
		};
		console.log("chart of 1 dataset");
	}
	else if (city_len==2){
		json_dataset = [json0,json1,json2,json3];
		title_city = {
			display: true,
			text: kanji0+'と'+kanji1+'の平均気温(2018)'
		};
		console.log("chart of 2 dataset");
	}
	else{
		json_dataset = [json0,json1,json2,json3,json4,json5];
		title_city = {
			display: true,
			text: kanji0+'と'+kanji1+'と'+kanji2+'の平均気温(2018)'
		};
		console.log("chart of 3 dataset");
	}

	window.mylineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			datasets: json_dataset,
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			title: title_city,
			scales: {
				yAxes: [{
					ticks: {
						suggestedMax: 30,
						suggestedMin: 0,
						stepSize: 10,
						callback: function (value, index, values) {
							return value + '[℃]'
						}
					}
				}]
			},
		}
	});
	$('#myLineChart').css('width','100%');
	$('#myLineChart').css('height','450px');
}
