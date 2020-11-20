$(function () {
	'use strict'; // Start of use strict


	/*--------------------------
	sendQuote
	---------------------------- */
	var quote = $('#form-quote'); // contact form	

	// form submit event
	quote.on('submit', function (e) {
		e.preventDefault(); // prevent default form submit

		$.ajax({
			url: 'https://southamerica-east1-emailsender-295900.cloudfunctions.net/neocontrol/sendQuote', // form action url						
			type: 'POST', // form submit method get/post			
			dataType: 'json', // request type html/json/xml
			data: quote.serialize(), // serialize form data			
			success: function (data) {								
				location.reload(); // reset page
			},
			error: function (e) {
				console.log(e)
			}
		});
	});


	/*--------------------------
	sendQuote
	---------------------------- */
	var contact = $('#form-contact'); // contact form	

	// form submit event
	contact.on('submit', function (e) {
		e.preventDefault(); // prevent default form submit

		$.ajax({
			url: 'https://southamerica-east1-emailsender-295900.cloudfunctions.net/neocontrol/sendContact', // form action url						
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

