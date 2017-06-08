
const assert = require( "assert" );
const shft = require( "./shft.js" );

assert.deepEqual( shft( true ), [ ], "should be deeply equal" );

assert.deepEqual( shft( 123 ), [ ], "should be deeply equal" );

assert.deepEqual( shft( { }, 2 ), [ ], "should be deeply equal" );

let test1 = shft( [ { "greeting": "hi", "salutation": "dear" }, { "hello": "world" } ], 1 );
assert.deepEqual( test1, [ { "hello": "world" } ], "should be deeply equal" );

let test2 = shft( [ { "greeting": "hi", "salutation": "dear" }, { "hello": "world" } ], 2 );
assert.deepEqual( test2, [ ], "should be deeply equal" );

assert.deepEqual( shft( [ 1, 2, 3 ], 1 ), [ 2, 3 ], "should be deeply equal" );

assert.deepEqual( shft( [ 1, 2, 3 ] ), [ 2, 3 ], "should be deeply equal" );

assert.deepEqual( shft( [ 1, 2, 3 ] ), [ 2, 3 ], "should be deeply equal" );

assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], 2 ), [ 3, 4, 5 ], "should be deeply equal" );

assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], -2 ), [ 4, 5 ], "should be deeply equal" );

console.log( "ok" )
