

// ajax page load
$(document).ready(function() {

	//initial
	$('#content').load('content/home.php');

	//handle menu clicks
	$('ul li a').click(function() {
		var page = $(this).attr('href');
		
		$('#content').load(page);
				
		// function slideContent(x) {
	 //    	$('#content').animate({'right':'0px'}, 1500);
	 //    	$("#content").animate({'left':'300','opacity':'0'}, 2000, function(){	
		// 	    $(this).css({'left':'0','opacity':'1'});
		// 	});
			
	 //    }
		
		return false;

	});
});


//practice

	// $('#content').load('content/home.php');

    // $('ul li a').click(function(){
    
	   //  var page = $(this).attr('href');
	   //  $('#content').hide('fast',loadContent);
	   //  $('#load').remove();
	   //  $('#wrapper').append('<span id="load">LOADING...</span>');
	   //  $('#load').fadeIn('normal');
	   //  function loadContent() {
	   //  	$('#content').load(page,showNewContent());
	   //  }
	   //  function showNewContent() {
	   //  	$('#content').show('slow',hideLoader());
	   //  }
	   //  function hideLoader() {
	   //  	$('#load').fadeOut('normal');
	   //  }
	   //  return false;
	    
    // });



// email jquery ajax
function _(id){ return document.getElementById(id); }

function submitForm(){
	_("mybtn").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	formdata.append( "e", _("e").value );
	formdata.append( "m", _("m").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "email.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				// _("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
				$("#my_form")[0].reset();
				// document.write('');
				_("my_form").innerHTML += '<div>sucess mah niga</div>';
				_("mybtn").disabled = false;
				_("status").innerHTML = 'Add another';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}


