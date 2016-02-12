$(document).ready(function()
{
	/*var height = $(window).height();
	$("#home").css('height', height);
	$(window).resize(function()
	{
		var height = $(window).height();
		$("#home").css('height', height);
	});*/
	var texts = ['to have a successful career?', 'to crack exams with high score?', 'to study at your dream college?'];
	var counter = 0;
	setInterval(change, 2500);
    function change() {
        $("#home-content .container-left .two").effect( "highlight",{color:'rgba(0,117,43,0.7)'},600);
        $("#home-content .container-left .two").text(texts[counter]);
        counter++;
        if(counter >= texts.length) { counter = 0; }
    }
	$("#home .login").click(function()
	{
		$("#home .login-popup").slideToggle(300);
	});
	$("#logo").click(function()
	{
		window.location.href = "http://www.spearxinc.in";
	});
	$("#home-content .container-right .two").click(function()
	{
		$('html, body').scrollTo("#benefits",500,"easeInOutExpo");
	});
});