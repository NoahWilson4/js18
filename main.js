$(document).on('ready', function() {

// ///// quote base class
// 	var Quote = function(quote, author) {
// 		this.quote = quote;
// 		this.author = author;
// 	}

// ////// user libraries base class
// 	var Users = function(name) {
// 		this.name = name;
// 		this.quotes = [];
// 	}

// 	Users.prototype.render = function() {
// 		if (this.element) return this.element;
// 		var form = $('#quote-form').clone();
// 		form.attr('id', '').addClass('quote-form');
// 		form.on('submit', this.formSubmit);
// 		this.element = $('<div>');
// 		this.element.addClass('user-library').append('<h2>' + this.name + '\'s Quote Collection</h2>').append(form).append('<ul>');
// 	}

// 	Users.prototype.addQuote = function(quote) {
// 		this.quotes.push(quote);
// 	}
// // create user////////////////////
// 	var nameInput = '<input type="text" class="input-name" placeholder="Name...">';


// 	$(document).on('click', '.create-user', function(){
// 		var inputName = $(nameInput).clone();
// 		$('.header').append(inputName);
// 		$('.create-button').removeClass('create-user').addClass('submit-user').text('Submit');
// 		// $(document).on('click', '.submit-user', function(){
// 		// 	var userName = $('.input-name').val();
// 		// 	console.log('userName test: ', userName);
// 		// 	var newUser = new Users(userName);
// 		// 	$('.create-button').removeClass('.submit-user').addClass('.create-user').text('Create New User');
// 		// 	$('.input-name').hide();
// 		// });
// 	});
// 	$(document).on('click', '.submit-user', function(){
// 			var userName = $('.input-name').val();
// 			console.log('userName test: ', userName);
// 			var newUser = new Users(userName);
// 			newUser.render();
// 			$('.create-button').removeClass('.submit-user').addClass('.create-user').text('Create New User');
// 			$('.input-name').hide();
// 		});

	

// 	var newUser = new Users('noah');
// 	var newUser2 = new Users('andrew');

// 	console.log();

// ////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////

///// quote base class
	var Quote = function(quote, author) {
		this.quote = quote;
		this.author = author;
		this.rating = 0;	
	};



	
// ////// render quote to quote collection

	Quote.prototype.render = function(){
		if (this.element) return this.element;
		this.element = $('<div class="quote-box"><div class="quote"> \'' + this.quote + '\'</div><div class="author"> ~' + this.author + '</div><div class="ratings"><div class="buddharate zero"></div><div class="buddharate one"></div><div class="buddharate two"></div><div class="buddharate three"></div><div class="buddharate four"></div><div class="buddharate five"></div></div></div>');
		// this.quoteRating = $('<div class="quote-rating">Rating selector will go here</div>');
		$('.quote-collection').append(this.element);
		// $(this).closest('.quote-box').append(this.quoteRating);
		return this.element;
	}


///// array of all quotes
	var quoteLibrary = [];



// sort by author/////////////////////////////////////////////////
	var authorSortMenu = $('<div class="author-menu"></div>');
	var cancelSort = $('<button id="cancel">X</button>');
	$('.sort-buttons').append(authorSortMenu, cancelSort);
	authorSortMenu.hide();
	cancelSort.hide();

	$(document).on('click', '.sort-author', function(){
		authorSortMenu.show();
		authorSortMenu.append('<div class="view-all">View All</div>');
		cancelSort.show();

		// find individual names
		var quotes = quoteLibrary;
		var authorNames = [];
		for (var i = 0; i < quotes.length; i++) {
				authorNames.push(quotes[i].author)
		}
		authorNames = authorNames.sort();
		authorSortMenu.append('<div class="author-menu-name">' + authorNames[0] + '</div>');
		for (var i = 1; i < authorNames.length; i++) {
			if (authorNames[i] !== authorNames[i - 1]){
				authorSortMenu.append('<div class="author-menu-name">' + authorNames[i] + '</div>');
		}
	}

/////// cancel sort by author
	$('#cancel').on('click', function() {
		authorSortMenu.empty().hide();
		cancelSort.hide();
	})

	})
	$(document).on('click', '.view-all', function(){
		for (var i = 0; i < quoteLibrary.length; i++) {
			$('.quote-collection').append(quoteLibrary[i].element);
			authorSortMenu.hide();
		cancelSort.hide();
		authorSortMenu.empty();
		}
	})
	$(document).on('click', '.author-menu-name', function(authorName){
		var quotes = quoteLibrary;
		authorName = $(this).text();
		console.log('test authorName: ', authorName);
		$('.quote-collection').empty();
		for (var i = 0; i < quotes.length; i++) {
			if (quotes[i].author === authorName) {
				var thisAuthorsQuote = quotes[i];
				console.log('test thisAuthorsQuote: ', thisAuthorsQuote);
			$('.quote-collection').append(thisAuthorsQuote.element);
			}
		}
		authorSortMenu.hide();
		cancelSort.hide();
		authorSortMenu.empty();
	})


/////////// ratings///////////////////////////////////////////////////////////////////
	var ratingSelect = function() {

	}

	$(document).on('mouseover', '.zero', function(){
		console.log('hover test');
			
			$(this).closest('.ratings').find('.one').removeClass('buddharated');
			$(this).closest('.ratings').find('.two').removeClass('buddharated');
			$(this).closest('.ratings').find('.three').removeClass('buddharated');
			$(this).closest('.ratings').find('.four').removeClass('buddharated');
			$(this).closest('.ratings').find('.five').removeClass('buddharated');
		});

	$(document).on('mouseover', '.one', function(){
		console.log('hover test');
			$(this).addClass('buddharated');
			$(this).closest('.ratings').find('.two').removeClass('buddharated');
			$(this).closest('.ratings').find('.three').removeClass('buddharated');
			$(this).closest('.ratings').find('.four').removeClass('buddharated');
			$(this).closest('.ratings').find('.five').removeClass('buddharated');
		});


	// $(document).on('mouseout', '.one', function(){
	// 	console.log('hover test');
	// 		$(this).removeClass('buddharated');
	// 	});

	$(document).on('mouseover', '.two', function(){
		console.log('hover test');
			$(this).addClass('buddharated');
			$(this).closest('.ratings').find('.one').addClass('buddharated');
			$(this).closest('.ratings').find('.three').removeClass('buddharated');
			$(this).closest('.ratings').find('.four').removeClass('buddharated');
			$(this).closest('.ratings').find('.five').removeClass('buddharated');
		});
	// $(document).on('mouseout', '.two', function(){
	// 	console.log('hover test');
	// 		$(this).removeClass('buddharated');
	// 		$(this).closest('.ratings').find('.one').removeClass('buddharated');
	// 	});

	$(document).on('mouseover', '.three', function(){
		console.log('hover test');
			$(this).addClass('buddharated');
			$(this).closest('.ratings').find('.one').addClass('buddharated');
			$(this).closest('.ratings').find('.two').addClass('buddharated');
			$(this).closest('.ratings').find('.four').removeClass('buddharated');
			$(this).closest('.ratings').find('.five').removeClass('buddharated');
		});
	// $(document).on('mouseout', '.three', function(){
	// 	console.log('hover test');
	// 		$(this).removeClass('buddharated');
	// 		$(this).closest('.ratings').find('.one').removeClass('buddharated');
	// 		$(this).closest('.ratings').find('.two').removeClass('buddharated');
	// 	});

	$(document).on('mouseover', '.four', function(){
		console.log('hover test');
			$(this).addClass('buddharated');
			$(this).closest('.ratings').find('.one').addClass('buddharated');
			$(this).closest('.ratings').find('.two').addClass('buddharated');
			$(this).closest('.ratings').find('.three').addClass('buddharated');
			$(this).closest('.ratings').find('.five').removeClass('buddharated');
		});
	// $(document).on('mouseout', '.four', function(){
	// 	console.log('hover test');
	// 		$(this).removeClass('buddharated');
	// 		$(this).closest('.ratings').find('.one').removeClass('buddharated');
	// 		$(this).closest('.ratings').find('.two').removeClass('buddharated');
	// 		$(this).closest('.ratings').find('.three').removeClass('buddharated');
	// 	});

	$(document).on('mouseover', '.five', function(){
		console.log('hover test');
			$(this).addClass('buddharated');
			$(this).closest('.ratings').find('.one').addClass('buddharated');
			$(this).closest('.ratings').find('.two').addClass('buddharated');
			$(this).closest('.ratings').find('.three').addClass('buddharated');
			$(this).closest('.ratings').find('.four').addClass('buddharated');
		});
	// $(document).on('mouseout', '.five', function(){
	// 	console.log('hover test');
			// $(this).removeClass('buddharated');
			// $(this).closest('.ratings').find('.one').removeClass('buddharated');
			// $(this).closest('.ratings').find('.two').removeClass('buddharated');
			// $(this).closest('.ratings').find('.three').removeClass('buddharated');
			// $(this).closest('.ratings').find('.four').removeClass('buddharated');
	// 	});


	//////////add new quote with the form

	$("#quote-form").on('submit', function(e){
		e.preventDefault();
		var submittedQuote = this;
		var form = $(e.target);
		var quote = form.find('[name=quote]').val();
		var author = form.find('[name=author]').val();
		var newQuote = new Quote(quote, author);
		newQuote.render();
		// submittedQuote.addQuote(newQuote);
		quoteLibrary.push(newQuote);
		console.log('quote library: ', quoteLibrary)
		form.find('[name=quote]').val('');
		form.find('[name=author]').val('');
	});


	
var quote1 = new Quote('Life is Cool', 'Buddha');
quote1.render();
quoteLibrary.push(quote1);
var quote2 = new Quote('Life is great', 'Buddha');
quote2.render();
quoteLibrary.push(quote2);
var quote3 = new Quote('Life is wild', 'Buddha');
quote3.render();
quoteLibrary.push(quote3);
var quote4 = new Quote('Life is pretty', 'Buddha');
quote4.render();
quoteLibrary.push(quote4);
var quote5 = new Quote('Life is suffering', 'Buddha');
quote5.render();
quoteLibrary.push(quote5);
var quote6 = new Quote('Life is crazy', 'Me');
quote6.render();
quoteLibrary.push(quote6);
var quote7 = new Quote('Life is what it is', 'Me');
quote7.render();
quoteLibrary.push(quote7);
var quote8 = new Quote('Life is purple', 'Me');
quote8.render();
quoteLibrary.push(quote8);
var quote9 = new Quote('Life is life', 'Me');
quote9.render();
quoteLibrary.push(quote9);
var quote10 = new Quote('Life is wonderful', 'Me');
quote10.render();
quoteLibrary.push(quote10);
var quote11 = new Quote('Life is wowza', 'Brotherman');
quote11.render();
quoteLibrary.push(quote11);
var quote12 = new Quote('Life is totally yes', 'Brotherman');
quote12.render();
quoteLibrary.push(quote12);
var quote13 = new Quote('Life is a dream', 'Brotherman');
quote13.render();
quoteLibrary.push(quote13);
var quote14 = new Quote('Life is sacred', 'Brotherman');
quote14.render();
quoteLibrary.push(quote14);
console.log(quoteLibrary);''












  
});