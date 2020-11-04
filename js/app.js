
 /** Stevens
 * Copyright 2017-2018 Stevens Authors
 * Copyright 2017-2018 SC, Inc.*/

$(function(){
$(window).scroll(function() {
var scrollNavColor = jQuery(window).scrollTop();
if ( scrollNavColor > 250 ){
$('#mainNav .navbar-nav .nav-item .nav-link').css({'color':'#189dd9'});
} else if (scrollNavColor < 250) {
$('#mainNav .navbar-nav .nav-item .nav-link').css({'color':'#fff'});} });
$('li.nav-item .dropdown-menu a.nav-link:nth-child(-n+3)').css({ 'color':'#189dd9' });
$(window).scroll(function(){
	var scrollDrop = $(window).scrollTop();
		if(scrollDrop > 250){
			$('li.nav-item .dropdown-menu a.nav-link:nth-child(-n+3)').css({ 'color':'#189dd9' });}
		else if (scrollDrop < 250) {
	$('li.nav-item .dropdown-menu a.nav-link:nth-child(-n+3)').css({ 'color':'#189dd9' }); }});

$(".toggleblue").click(function(){
	if( $(this).attr("class") === "toggleblue" ){
		$(this).toggleClass("toggleblue").toggleClass("active-xpans active-xpans:after");
			console.log("Active");
	  $("#tb-xpans").show(500);
  } else if( $(this).attr("class") === "active-xpans active-xpans:after" ){
	  $(this).toggleClass("toggleblue").toggleClass("active-xpans active-xpans:after");
			console.log("Désactive");
				$("#tb-xpans").animate({
					height:"toggle" // 'toggle' close bottom !
				}).hide(500).fadeOut("slow");
	} else { console.log("ERROR !"); }});

$(".toggle-second").on("click", function(){
	if( $(this).attr("class") === "toggle-second" ){
		$(this).toggleClass("toggle-second").toggleClass("xpans-second-active xpans-second-active:after");
			console.log("Active 1");
	  $("#tb2-xpans").show(500);
  } else if( $(this).attr("class") === "xpans-second-active xpans-second-active:after" ){
	  $(this).toggleClass("toggle-second").toggleClass("xpans-second-active xpans-second-active:after");
			console.log("Désactive 1");
				$("#tb2-xpans").animate({
					height:"toggle"
				}).hide(500).fadeOut("slow");
	} else { console.log("ERROR !"); }});

$(window).scroll(function() {
	var info = $('.informations-xpans'), scrollInfo = $(window).scrollTop();
	if ( scrollInfo > 450 ){ info.addClass('info-xpans').css('right', '50px'); }
	else if ( scrollInfo < 450 ){ info.addClass('info-xpans').css('right','-260px'); }});

$(window).scroll(function(){
	var scrollRemove = $(window).scrollTop();
	if( scrollRemove > 3100 ) {
		infoRight.css( "right","-290px" );
		console.log("remove");
} else if (scrollRemove < 0) {
	  console.log("remove none") }});

var infoRight = $('.informations-xpans');
$(window).scroll(function(){
var a = parseInt($("#xpansone").innerHeight() + 10 ),
	 	b = parseInt($("#xpansteam25").innerHeight() + 100 ),
		c = parseInt($("#xpansproforce10").innerHeight() + 900 ),
		link = $(".xpans-more"),
		scroll = $(window).scrollTop();
		if(scroll < a && b > scroll){
					infoRight.css({
					"background": "#d400ff", "background": "-moz-linear-gradient(-45deg, #d400ff 1%, #5b00db 100%)",
					"background": "-webkit-linear-gradient(-45deg, #d400ff 1%,#5b00db 100%)", /* Chrome10-25,Safari5.1-6 */
					"background": "linear-gradient(135deg, #d400ff 1%,#5b00db 100%)",
					"box-shadow": "0px 11px 45px -10px rgba(224,22,211,1)",
					"-webkit-box-shadow": "0px 11px 45px -10px rgba(224,22,211,1)" });
					link.html("<a>En savoir plus sur xpans one</a>").attr("href", "xpansone.html");
			} else if (b < scroll && scroll <= c){
					infoRight.css({
					"background": "#2fe3ed", "background": "-moz-linear-gradient(-45deg, #2fe3ed 0%, #22acdd 100%)",
					"background": "linear-gradient(135deg, #ffaa1d 0%,#ff2410 100%)",
					"background": "linear-gradient(135deg, #ffaa1d 0%,#ff2410 100%)",
					"box-shadow": "0px 11px 45px -10px rgba(255,151,23,1)",
					"-webkit-box-shadow": "0px 11px 45px -10px rgba(255,151,23,1)" });
					link.html("<a>En savoir plus sur xpans team</a>").attr("href", "xpansteam25.html");
			} else if (scroll >= c){
					infoRight.css({
					"background": "#ff1962", "background": "-moz-linear-gradient(-45deg, #ff1962 0%, #ff1f1c 99%)",
					"background": "-webkit-linear-gradient(-45deg, #ff1962 0%,#ff1f1c 99%)",
					"background": "linear-gradient(135deg, #ff1962 0%,#ff1f1c 99%)",
					"box-shadow": "0px 11px 45px -10px rgba(255,71,71,1)",
					"-webkit-box-shadow": "0px 11px 45px -10px rgba(255,71,71,1)" });
					link.html("<a>En savoir plus sur xpans infinity</a>").attr("href", "xpansproforce10.html"); }}); });
