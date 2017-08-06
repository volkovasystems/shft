"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "shft",
			"path": "shft/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/shft.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"shft": "shft"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const shft = require( "./shft.js" );
//: @end-server

//: @client:
const shft = require( "./shft.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:
describe( "shft", ( ) => {

	describe( "`shft( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 2, 3 ]", ( ) => {

			assert.deepEqual( shft( [ 1, 2, 3 ] ), [ 2, 3 ] );

		} );
	} );


	describe( "`shft( [ 1, 2, 3, 4, 5 ], 2 )`", ( ) => {
		it( "should be equal to [ 3, 4, 5 ]", ( ) => {

			assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], 2 ), [ 3, 4, 5 ] );

		} );
	} );


	describe( "`shft( [ 1, 2, 3, 4, 5 ], -2 )`", ( ) => {
		it( "should be equal to [ 4, 5 ]", ( ) => {

			assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], -2 ), [ 4, 5 ] );

		} );
	} );

} );


//: @end-server


//: @client:

describe( "shft", ( ) => {

	describe( "`shft( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 2, 3 ]", ( ) => {

			assert.deepEqual( shft( [ 1, 2, 3 ] ), [ 2, 3 ] );

		} );
	} );


	describe( "`shft( [ 1, 2, 3, 4, 5 ], 2 )`", ( ) => {
		it( "should be equal to [ 3, 4, 5 ]", ( ) => {

			assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], 2 ), [ 3, 4, 5 ] );

		} );
	} );


	describe( "`shft( [ 1, 2, 3, 4, 5 ], -2 )`", ( ) => {
		it( "should be equal to [ 4, 5 ]", ( ) => {

			assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], -2 ), [ 4, 5 ] );

		} );
	} );
	
} );

//: @end-client

//: @bridge:

describe( "shft", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`shft( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 2, 3 ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return shft( [ 1, 2, 3 ] );
				}

			).value;

			assert.deepEqual( result, [ 2, 3 ] );

		} );
	} );


	describe( "`shft( [ 1, 2, 3, 4, 5 ], 2 )`", ( ) => {
		it( "should be equal to [ 3, 4, 5 ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return shft( [ 1, 2, 3, 4, 5 ], 2 );
				}

			).value;

			assert.deepEqual( result, [ 3, 4, 5 ] );

		} );
	} );


	describe( "`shft( [ 1, 2, 3, 4, 5 ], -2 )`", ( ) => {
		it( "should be equal to [ 4, 5 ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return shft( [ 1, 2, 3, 4, 5 ], -2 );
				}

			).value;

			assert.deepEqual( result, [ 4, 5 ] );

		} );
	} );

} );

//: @end-bridge
