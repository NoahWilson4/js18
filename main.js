$(document).on('ready', function() {

// ///// quote base class
	var Quote = function(quote, author) {
		this.quote = quote;
		this.author = author;
	}

////// user libraries base class
	var Users = function(name) {
		this.name = name;
		this.quotes = [];
	}

	Users.prototype.render = function() {
		if (this.element) return this.element;
		var form = $('#quote-form').clone();
		form.attr('id', '').addClass('quote-form');
		form.on('submit', this.formSubmit);
		this.element = $('<div>');
		this.element.addClass('user-library').append('<h2>' + this.name + '\'s Quote Collection</h2>').append(form).append('<ul>');
	}

	Users.prototype.addQuote = function(quote) {
		this.quotes.push(quote);
	}
// create user////////////////////
	var nameInput = '<input type="text" class="input-name" placeholder="Name...">';


	$(document).on('click', '.create-user', function(){
		var inputName = $(nameInput).clone();
		$('.header').append(inputName);
		$('.create-button').removeClass('create-user').addClass('submit-user').text('Submit');
		// $(document).on('click', '.submit-user', function(){
		// 	var userName = $('.input-name').val();
		// 	console.log('userName test: ', userName);
		// 	var newUser = new Users(userName);
		// 	$('.create-button').removeClass('.submit-user').addClass('.create-user').text('Create New User');
		// 	$('.input-name').hide();
		// });
	});
	$(document).on('click', '.submit-user', function(){
			var userName = $('.input-name').val();
			console.log('userName test: ', userName);
			var newUser = new Users(userName);
			newUser.render();
			$('.create-button').removeClass('.submit-user').addClass('.create-user').text('Create New User');
			$('.input-name').hide();
		});

	

	var newUser = new Users('noah');
	var newUser2 = new Users('andrew');

	console.log();







  
});