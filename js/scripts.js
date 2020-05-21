$(function() {
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	$(".add_services").on( "click", function( event ) {
	   event.preventDefault();
	   let count = $(".list_services .field").length;
	   count++;
	   if(count>6){
	   	return
	   }
	   $(".list_services").append('<div class="field"><label>Услуга '+count+':</label><div class="close">х</div><input type="text" class="validate" name=""></div>');

	});

	$("body").on( "click", ".close",  function( event ) {
	   event.preventDefault();
	   $(this).parent().remove();

	});

	$('.dropify').dropify({
    	messages: {
	        'default': 'Картинка №1<br>(шапка)',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});
	$('.dropify2').dropify({
    	messages: {
	        'default': 'Картинка №2<br>(о компании)',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});

	$('.dropify3').dropify({
    	messages: {
	        'default': 'Услуга №1',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});

	$('.dropify4').dropify({
    	messages: {
	        'default': 'Услуга №2',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});

	$('.dropify5').dropify({
    	messages: {
	        'default': 'Услуга №3',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});

	$('.dropify6').dropify({
    	messages: {
	        'default': 'Услуга №4',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});

	$('.dropify7').dropify({
    	messages: {
	        'default': 'Услуга №5',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});

	$('.dropify8').dropify({
    	messages: {
	        'default': 'Услуга №6',
	        'replace': '',
	        'remove':  'x',
	        'error':   'Ошибка.'
	    }
	});

	current_tab=1;
	$(".next").on("click", function( event ) {
	    event.preventDefault();
	    if(!check())
	    {
	    	return false;
	    }

	    if(current_tab==5)
	    {
	    	console.log(5);
		    if(!check_img())
		    {
		    	return false;
		    }
		}

	   	current_tab++
	   	$(".statusbar").addClass("statusbar_"+current_tab)
	    $(".tab").fadeOut();
	    setTimeout(() =>  $("#tab_"+current_tab).fadeIn(), 400);
	    if(current_tab)
	    {

	    	$(".prev").show();
	    }
	    if(current_tab==7){
	    	$(".navigator").hide();
	    }
	    fix(current_tab);
	    //check();
	});
	$(".prev").on("click", function( event ) {
	    event.preventDefault();
	    /*if(!check())
	    {
	    	return false;
	    }*/
	   	current_tab--
	   	current_status = current_tab + 1;
	   	console.log(current_status);
	   	$(".statusbar").removeClass("statusbar_"+current_status)
	    $(".tab").fadeOut();	   
	    setTimeout(() =>  $("#tab_"+current_tab).fadeIn(), 400);
	    if(current_tab==1)
	    {
	    	$(this).hide();
	    }
	    fix(current_tab);	   
	});
		
})


function fix(number)
{
	if(number==6)
	{
		$(".new_site .content").addClass("fix");
	}
	else
	{
		$(".new_site .content").removeClass("fix");
	}

	if(number==5){
		let len = $("#tab_4 .list_services .field").length;
		
		$("#tab_5 .dropify3, #tab_5 .dropify4, #tab_5 .dropify5, #tab_5 .dropify6, #tab_5 .dropify7, #tab_5 .dropify8").each(function( index, element ) {
			if(index<len)
			{
				$(element).parent().show();
			}
			else{
				$(element).parent().hide();
			}	
		});
		
	}
}

function check()
{
	var valid = true;
	$(".tab:visible").find("div.error").remove();
	$(".tab:visible").find(".validate").removeClass("error").each(function( index, element ) {	
		var valid2 = true;	 
		if(this.value.length<3)
		{
			valid = false;
			valid2 = false;
		}
		if (!$(element).inputmask("isComplete") && $(element).attr('type')=='tel'){
			valid = false;
			valid2 = false;
		}
		if($(element).attr('type')=='email'){	
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(!pattern.test($(this).val())){
				valid = false;
				valid2 = false;					
			}	
		}

		if(!valid2)
		{			
			$(element).addClass("error");	
			$(element).after('<div class="error">Поле заполнено неверно</div>');
		}

	});
	if(!valid){
        return false;
    }
    else
    {
    	return true;
    }

}

function check_img(){
	let check = true;
	$("#tab_5 .dropify, #tab_5 .dropify2, #tab_5 .dropify3, #tab_5 .dropify4, #tab_5 .dropify5, #tab_5 .dropify6, #tab_5 .dropify7, #tab_5 .dropify8").each(function( index, element ) {
		$(element).parent().removeClass("error_code");
		if($(element).parent().is(":visible"))
		{
			if($(element).parent().hasClass("has-preview"))
			{

			}
			else
			{
				$(element).parent().addClass("error_code");
				check = false;
			}
		}
	});
	if(!check){
        return false;
    }
    else
    {
    	return true;
    }
}