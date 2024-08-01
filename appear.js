// JavaScript Document

//ANCHOR

//REUPLOAD TEST


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
$('.dinosgroup').hide();
$('.dinos').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27').hide();
$('.dinosgroup').fadeToggle();
});


$(document).ready(function(){
$('.candygroup').hide();
$('.candy').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .28').hide();
$('.candygroup').fadeToggle();
});


$(document).ready(function(){
$('.organsgroup').hide();
$('.organs').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .27, .28').hide();
$('.organsgroup').fadeToggle();
});


$(document).ready(function(){
$('.plannergroup').hide();
$('.planner').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .26, .27, .28').hide();
$('.plannergroup').fadeToggle();
});



});

$(document).ready(function(){
$('.virusgroup').hide();
$('.virus').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .25, .26, .27, .28').hide();
$('.virusgroup').fadeToggle();
});



});



$(document).ready(function(){
$('.infographicgroup').hide();
$('.infographic').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .20, .21, .22, .24, .25, .26, .27, .28').hide();
$('.infographicgroup').fadeToggle();
});



});


$(document).ready(function(){
$('.crystalsgroup').hide();
$('.crystals').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .19, .20, .21, .23, .24, .25, .26, .27, .28').hide();
$('.crystalsgroup').fadeToggle();
});



});



$(document).ready(function(){
$('.animalsgroup').hide();
$('.animals').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .18, .19, .20, .22, .23, .24, .25, .26, .27, .28').hide();
$('.animalsgroup').fadeToggle();
});



});

$(document).ready(function(){
$('.connectgroup').hide();
$('.connect').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.connectgroup').fadeToggle();
});



});

$(document).ready(function(){
$('.bigbookgroup').hide();
$('.bigbook').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.bigbookgroup').fadeToggle();
});



});


$(document).ready(function(){
$('.pricebook1group').hide();
$('.pricebook1').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.pricebook1group').fadeToggle();
});



});



$(document).ready(function(){
$('.pricebook2group').hide();
$('.pricebook2').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.pricebook2group').fadeToggle();
});



});


$(document).ready(function(){
$('.owoodgroup').hide();
$('.owood').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.owoodgroup').fadeToggle();
});



});



$(document).ready(function(){
$('.shedraingroup').hide();
$('.shedrain').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.shedraingroup').fadeToggle();
});



});



$(document).ready(function(){
$('.organcardsgroup').hide();
$('.organcards').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.organcardsgroup').fadeToggle();
});




});


$(document).ready(function(){
$('.vitaminsgroup').hide();
$('.vitamins').click(function() {
$('.1, .2, .3, .5, .6, .7, .8, .9, .10, .11, .12, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.vitaminsgroup').fadeToggle();
});



});

$(document).ready(function(){
$('.steamlinegroup').hide();
$('.steamline').click(function() {
$('.1, .2, .3, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.steamlinegroup').fadeToggle();
});



});



$(document).ready(function(){
$('.mushroomgroup').hide();
$('.mushroom').click(function() {
$('.1, .2, .3, .4, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20 .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.mushroomgroup').fadeToggle();
});



});



$(document).ready(function(){
$('.f3postergroup').hide();
$('.f3poster').click(function() {
$('.1, .2, .3, .4, .5, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.f3postergroup').fadeToggle();
});



});



$(document).ready(function(){
$('.okonomigroup').hide();
$('.okonomi').click(function() {
$('.1, .2, .3, .4, .5, .6, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.okonomigroup').fadeToggle();
});



});


$(document).ready(function(){
$('.drwhogroup').hide();
$('.drwho').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.drwhogroup').fadeToggle();
});



});



$(document).ready(function(){
$('.froggroup').hide();
$('.frog').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.froggroup').fadeToggle();
});



});


$(document).ready(function(){
$('.lagoongroup').hide();
$('.lagoon').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.lagoongroup').fadeToggle();
});



});



$(document).ready(function(){
$('.meowcolasgroup').hide();
$('.meowcolas').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28').hide();
$('.meowcolasgroup').fadeToggle();
});





});


