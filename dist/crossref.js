'use strict';

jQuery( document ).ready( function( $ ) {
	const listings = document.querySelectorAll( '.-crossref[data-doi]' );

	listings.forEach( function( listing ) {
		const api = 'https://api.crossref.org/works/' + listing.dataset.doi;
		$.getJSON( api, function( data ) {
			let content = '<a href="' + data.message.URL + '" >' + data.message.title + '</a>';
			content += '<span>Author: ' + data.message.author[ '0' ].given + ' ' + data.message.author[ '0' ].family + '</span>';
			$( listing ).html( content );
		} );
	} );
} );
