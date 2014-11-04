// JavaScript Document

//SCROLL SNAP



//CHECK BOXES

$(document).ready(function(){
//#all already checked
$( "#all1").prop('checked', true);
    	 if ($(this).is(":checked"))
		   $(".all").prop("checked", true)
		   else
		$(".all").prop("checked", false);


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
	
		$("#branding1").click(function(event){
		   if ($(this).is(":checked"))
      $(".branding").show();
    else
      $(".branding").hide();
    });
	
		$("#informational1").click(function(event){
		   if ($(this).is(":checked"))
      $(".informational").show();
    else
      $(".informational").hide();
    });
	
		$("#print1").click(function(event){
		   if ($(this).is(":checked"))
      $(".print").show();
    else
      $(".print").hide();
    });
	
		$("#poster1").click(function(event){
		   if ($(this).is(":checked"))
      $(".poster").show();
    else
      $(".poster").hide();
    });
	
		$("#book1").click(function(event){
		   if ($(this).is(":checked"))
      $(".book").show();
    else
      $(".book").hide();
    });
	
	

});

//GALLERY

$(document).ready(function(){
$('.phrasebookgroup').hide();
$('.phrasebook').click(function() {
	$('.2, .3, .4, .5, .6, .7, .8, .9, .10, .11').hide();
$('.phrasebookgroup').fadeToggle();
});


$('.hcol-c1 img').click(function() {
    var thmb = this;
    var src = this.src;
    $('.hcol-b1 img').fadeOut(200,function(){
        thmb.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});




$(document).ready(function(){
$('.platypusgroup').hide();
$('.platypus').click(function() {
$('.1, .3, .4, .5, .6, .7, .8, .9, .10, .11').hide();
$('.platypusgroup').fadeToggle();
});


$('.hcol-c2 img').click(function() {
    var thmb2 = this;
    var src = this.src;
    $('.hcol-b2 img').fadeOut(200,function(){
        thmb2.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});




$(document).ready(function(){
$('.vitaminsgroup').hide();
$('.vitamins').click(function() {
$('.1, .2, .4, .5, .6, .7, .8, .9, .10, .11').hide();
$('.vitaminsgroup').fadeToggle();
});


$('.hcol-c3 img').click(function() {
    var thmb3 = this;
    var src = this.src;
    $('.hcol-b3 img').fadeOut(200,function(){
        thmb3.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});


$(document).ready(function(){
$('.steamlinegroup').hide();
$('.steamline').click(function() {
$('.1, .2, .3, .5, .6, .7, .8, .9, .10, .11').hide();
$('.steamlinegroup').fadeToggle();
});


$('.hcol-c4 img').click(function() {
    var thmb4 = this;
    var src = this.src;
    $('.hcol-b4 img').fadeOut(200,function(){
        thmb4.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});



$(document).ready(function(){
$('.mushroomgroup').hide();
$('.mushroom').click(function() {
$('.1, .2, .3, .4, .6, .7, .8, .9, .10, .11').hide();
$('.mushroomgroup').fadeToggle();
});


$('.hcol-c5 img').click(function() {
    var thmb5 = this;
    var src = this.src;
    $('.hcol-b5 img').fadeOut(200,function(){
        thmb5.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});



$(document).ready(function(){
$('.f3postergroup').hide();
$('.f3poster').click(function() {
$('.1, .2, .3, .4, .5, .7, .8, .9, .10, .11').hide();
$('.f3postergroup').fadeToggle();
});


$('.vcol-c1 img').click(function() {
    var thmb6 = this;
    var src = this.src;
    $('.vcol-b1 img').fadeOut(200,function(){
        thmb6.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});



$(document).ready(function(){
$('.okonomigroup').hide();
$('.okonomi').click(function() {
$('.1, .2, .3, .4, .5, .6, .8, .9, .10, .11').hide();
$('.okonomigroup').fadeToggle();
});


$('.vcol-c2 img').click(function() {
    var thmb7 = this;
    var src = this.src;
    $('.vcol-b2 img').fadeOut(200,function(){
        thmb7.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});


$(document).ready(function(){
$('.drwhogroup').hide();
$('.drwho').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .9, .10, .11').hide();
$('.drwhogroup').fadeToggle();
});


$('.hcol-c6 img').click(function() {
    var thmb8 = this;
    var src = this.src;
    $('.hcol-b6 img').fadeOut(200,function(){
        thmb8.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});



$(document).ready(function(){
$('.froggroup').hide();
$('.frog').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .10, .11').hide();
$('.froggroup').fadeToggle();
});


$('.vcol-c3 img').click(function() {
    var thmb9 = this;
    var src = this.src;
    $('.vcol-b3 img').fadeOut(200,function(){
        thmb9.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});


$(document).ready(function(){
$('.lagoongroup').hide();
$('.lagoon').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .11').hide();
$('.lagoongroup').fadeToggle();
});


$('.hcol-c7 img').click(function() {
    var thmb10 = this;
    var src = this.src;
    $('.hcol-b7 img').fadeOut(200,function(){
        thmb10.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});



$(document).ready(function(){
$('.meowcolasgroup').hide();
$('.meowcolas').click(function() {
$('.1, .2, .3, .4, .5, .6, .7, .8, .9, .10').hide();
$('.meowcolasgroup').fadeToggle();
});


$('.hcol-c8 img').click(function() {
    var thmb11 = this;
    var src = this.src;
    $('.hcol-b8 img').fadeOut(200,function(){
        thmb11.src = this.src;
        $(this).fadeIn(200)[0].src = src;
    });
});
});

