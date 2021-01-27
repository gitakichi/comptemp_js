function header(){
	var html_text = `
		<h1>ギタキチ工具系列</h1>
		<ul id="nav">
		<li><a href="index.html">top<a></li>
		<li><a href="8x8.html">8x8<a></li>
		<li><a href="comptemp.html">気温グラフ<a></li>
		<li><a href="https://github.com/gitakichi"><i class="fab fa-github"></i></a></li>
		</ul>
	`;
	var element = document.getElementById("header");
	element.innerHTML = html_text;
}
