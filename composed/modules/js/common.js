function getParam(){
	// 参考: https://qiita.com/tonkatu_tanaka/items/99d167ded9330dbc4019
	var argv = new Object;
	var pairs = location.search.substring(1).split('&');

	for(var i=0;i<pairs.length;i++){
		var div_val = pairs[i].split('=');
		argv[div_val[0]] = div_val[1];
	}

	return argv;
}