$(function () {
	'use strict'; // Start of use strict


	/*--------------------------
	sendForm
	---------------------------- */
	var form = $('#form-quote'); // contact form	

	// form submit event
	form.on('submit', function (e) {
		e.preventDefault(); // prevent default form submit

		$.ajax({
			url: 'https://southamerica-east1-emailsender-295900.cloudfunctions.net/neocontrol/sendEmail', // form action url						
			type: 'POST', // form submit method get/post			
			dataType: 'json', // request type html/json/xml
			data: form.serialize(), // serialize form data			
			success: function (data) {								
				location.reload(); // reset page
			},
			error: function (e) {
				console.log(e)
			}
		});
	});



});

