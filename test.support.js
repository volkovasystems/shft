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

var assert = require("assert");



//: @client:
var shft = require("./shft.support.js");
//: @end-client






//: @client: 

describe("shft", function () {

	describe("`shft( [ 1, 2, 3 ] )`", function () {
		it("should return [ 2, 3 ]", function () {

			assert.deepEqual(shft([1, 2, 3]), [2, 3]);

		});
	});

	describe("`shft( [ 1, 2, 3, 4, 5 ], 2 )`", function () {
		it("should return [ 3, 4, 5 ]", function () {

			assert.deepEqual(shft([1, 2, 3, 4, 5], 2), [3, 4, 5]);

		});
	});

	describe("shft( [ 1, 2, 3, 4, 5 ], -2 )", function () {
		it("should return [ 4, 5 ]", function () {

			assert.deepEqual(shft([1, 2, 3, 4, 5], -2), [4, 5]);

		});
	});

});

//: @end-client









// ( function( ){

// 	assert.deepEqual( shft( arguments, 2 ), [ "hello", Symbol.for( "hi" ) ], "should return [ 'hello', Symbol.for( 'hi' ) ]" );

// } )( Symbol.for( "hello" ), 2, "hello", Symbol.for( "hi" ) );

// console.log( "ok" )
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic2hmdCIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0MsS0FBSSx3QkFBSixFQUE4QixZQUFPOztBQUVwQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFOLENBQWxCLEVBQXVDLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBdkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNuREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPOztBQUV2Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQU4sRUFBeUIsQ0FBekIsQ0FBbEIsRUFBZ0QsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBaEQ7O0FBRUMsR0FKRjtBQUtDLEVBTkQ7O0FBUUFDLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNsREMsS0FBSSx3QkFBSixFQUE4QixZQUFPOztBQUVuQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQU4sRUFBeUIsQ0FBQyxDQUExQixDQUFsQixFQUFpRCxDQUFFLENBQUYsRUFBSyxDQUFMLENBQWpEOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBLENBMUJEOztBQTRCQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJzaGZ0XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInNoZnQvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3NoZnQuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCIuL3NoZnQuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcblxyXG5kZXNjcmliZSggXCJzaGZ0XCIsICggKSA9PiB7XHJcblx0XHJcblx0ZGVzY3JpYmUoIFwiYHNoZnQoIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIFsgMiwgMyBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBzaGZ0KCBbIDEsIDIsIDMgXSApLCBbIDIsIDMgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBzaGZ0KCBbIDEsIDIsIDMsIDQsIDUgXSwgMiApYFwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gWyAzLCA0LCA1IF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRhc3NlcnQuZGVlcEVxdWFsKCBzaGZ0KCBbIDEsIDIsIDMsIDQsIDUgXSwgMiApLCBbIDMsIDQsIDUgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInNoZnQoIFsgMSwgMiwgMywgNCwgNSBdLCAtMiApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiBbIDQsIDUgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggc2hmdCggWyAxLCAyLCAzLCA0LCA1IF0sIC0yICksIFsgNCwgNSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAoIGZ1bmN0aW9uKCApe1xyXG5cclxuLy8gXHRhc3NlcnQuZGVlcEVxdWFsKCBzaGZ0KCBhcmd1bWVudHMsIDIgKSwgWyBcImhlbGxvXCIsIFN5bWJvbC5mb3IoIFwiaGlcIiApIF0sIFwic2hvdWxkIHJldHVybiBbICdoZWxsbycsIFN5bWJvbC5mb3IoICdoaScgKSBdXCIgKTtcclxuXHJcbi8vIH0gKSggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIDIsIFwiaGVsbG9cIiwgU3ltYm9sLmZvciggXCJoaVwiICkgKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCBcIm9rXCIgKVxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
