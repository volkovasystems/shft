
const assert = require( "assert" );
const shft = require( "./shft.js" );

assert.deepEqual( shft( [ 1, 2, 3 ] ), [ 2, 3 ], "should be deeply equal" );

assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], 2 ), [ 3, 4, 5 ], "should be deeply equal" );

assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], -2 ), [ 4, 5 ], "should be deeply equal" );

( function( ){

	assert.deepEqual( shft( arguments, 2 ), [ "hello", Symbol.for( "hi" ) ], "should be deeply equal" );

} )( Symbol.for( "hello" ), 2, "hello", Symbol.for( "hi" ) );

console.log( "ok" )
