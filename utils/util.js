var genRandomDataSet = function(size){
	var dataset = [];
	for(var i = 1; i <= size; i++){
		dataset.push(Math.round(Math.random() * 20 + 1));
	}
	return dataset;
}