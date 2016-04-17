// JavaScript Document

//ANCHOR


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//SCROLL SNAP



//CHECK BOXES

$(document).ready(function(){
//#all already checked
 $( "#all1").prop('checked', true);
    	 if ($(this).is(":checked"))
		   $(".all").prop("checked", true)
		   else
		$(".all").prop("checked", false);

//LEAVE ALONE
//when #all is checked, all other checkboxes are checked
    $(document).on(' change','input[name="all"]',function() {
            $('.allcheck').prop("checked" , this.checked);
    });


//when #all is checked, all images are shown
	$( ".allcheck").prop('checked', true);
		$("#all1").click(function(event){
		   if ($(this).is(":checked"))

      $(".all").show();
    else
      $(".all").hide();
    });
	 


//when #cat checkbox is clicked, cat image appears
		$("#typography1").click(function(event){
		   if ($(this).is(":checked"))
      $(".typography").show();
    else
      $(".typography").hide();
    });
	
		$("#illustration1").click(function(event){
		   if ($(this).is(":checked"))
      $(".illustration").show();
    else
      $(".illustration").hide();
    });

	
	

});

//GALLERY


$(document).ready(function(){
$('.connectgroup').hide();
$('.connect').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.connectgroup').fadeToggle();
});



});



$(document).ready(function(){
$('.bigbookgroup').hide();
$('.bigbook').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.bigbookgroup').fadeToggle();
});



});


$(document).ready(function(){
$('.pricebook1group').hide();
$('.pricebook1').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.pricebook1group').fadeToggle();
});



});



$(document).ready(function(){
$('.pricebook2group').hide();
$('.pricebook2').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.pricebook2group').fadeToggle();
});



});


$(document).ready(function(){
$('.owoodgroup').hide();
$('.owood').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.owoodgroup').fadeToggle();
});



});



$(document).ready(function(){
$('.shedraingroup').hide();
$('.shedrain').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.shedraingroup').fadeToggle();
});



});



$(document).ready(function(){
$('.organcardsgroup').hide();
$('.organcards').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.organcardsgroup').fadeToggle();
});



});

$(document).ready(function(){
$('.phrasebookgroup').hide();
$('.phrasebook').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.phrasebookgroup').fadeToggle();
});



});




$(document).ready(function(){
$('.platypusgroup').hide();
$('.platypus').click(function() {
$('.1, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.platypusgroup').fadeToggle();
});



});




$(document).ready(function(){
$('.vitaminsgroup').hide();
$('.vitamins').click(function() {
$('.1, .2, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.vitaminsgroup').fadeToggle();
});



});


$(document).ready(function(){
$('.steamlinegroup').hide();
$('.steamline').click(function() {
$('.1, .2, .3, .5, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.steamlinegroup').fadeToggle();
});



});



$(document).ready(function(){
$('.mushroomgroup').hide();
$('.mushroom').click(function() {
$('.1, .2, .3, .4, .6, .7, .8, .9, .10, .11, .12, .13').hide();
$('.mushroomgroup').fadeToggle();
});



});



$(document).ready(function(){
$('.f3postergroup').hide();
$('.f3poster').click(function() {
$('.1, .2, .3, .4, .5, .7, .8, .9, .10, .11, .12, .13').hide();
$('.f3postergroup').fadeToggle();
});



});



$(document).ready(function(){
$('.okonomigroup').hide();
$('.okonomi').click(function() {
$('.1, .2, .3, .4, .5, .6, .8, .9, .10, .11, .12, .13').hide();
$('.okonomigroup').fadeToggle();
});



});


$(document).ready(function(){
$('.drwhogroup').hide();
$('.drwho').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .9, .10, .11, .12, .13').hide();
$('.drwhogroup').fadeToggle();
});



});



$(document).ready(function(){
$('.froggroup').hide();
$('.frog').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .10, .11, .12, .13').hide();
$('.froggroup').fadeToggle();
});



});


$(document).ready(function(){
$('.lagoongroup').hide();
$('.lagoon').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .11, .12, .13').hide();
$('.lagoongroup').fadeToggle();
});



});



$(document).ready(function(){
$('.meowcolasgroup').hide();
$('.meowcolas').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .12, .13').hide();
$('.meowcolasgroup').fadeToggle();
});



});

$(document).ready(function(){
$('.onboardgroup').hide();
$('.onboard').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .13').hide();
$('.onboardgroup').fadeToggle();
});



});

$(document).ready(function(){
$('.natgeogroup').hide();
$('.natgeo').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12').hide();
$('.natgeogroup').fadeToggle();
});



});


