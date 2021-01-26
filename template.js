function header(){
	var html_text = `
		<h1>ギタキチ工具系列</h1>
		<ul id="nav">
		<li><a href="index.html">top<a></li>
		<li><a href="8x8.html">8x8<a></li>
		<li><a href="comptemp.html">気温グラフ<a></li>
		</ul>
	`;
	var element = document.getElementById("header");
	element.innerHTML = html_text;
}
