"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "shft",
              			"path": "shft/shft.js",
              			"file": "shft.js",
              			"module": "shft",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/shft.git",``
              			"test": "shft-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Get remaining elements starting from the given index.
              
              		Default index is 1. This will always return a new array.
              
              		Refer to the documentation of Array.prototype.splice for more information.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"raze": "raze"
              		}
              	@end-include
              */

var arid = require("arid");
var raze = require("raze");

var shft = function shft(array, index) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"array:required": Array,
                                        			"index:required": "number"
                                        		}
                                        	@end-meta-configuration
                                        */

	if (arid(array)) {
		return [];
	}

	if (typeof index != "number" || index === 0) {
		index = 1;
	}

	return raze(array).splice(index);
};

module.exports = shft;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsInJhemUiLCJzaGZ0IiwiYXJyYXkiLCJpbmRleCIsInNwbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUUsT0FBTyxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ3pDOzs7Ozs7Ozs7QUFTQSxLQUFJTCxLQUFNSSxLQUFOLENBQUosRUFBbUI7QUFDbEIsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsS0FBSSxPQUFPQyxLQUFQLElBQWdCLFFBQWhCLElBQTRCQSxVQUFVLENBQTFDLEVBQTZDO0FBQzVDQSxVQUFRLENBQVI7QUFDQTs7QUFFRCxRQUFPSCxLQUFNRSxLQUFOLEVBQWNFLE1BQWQsQ0FBc0JELEtBQXRCLENBQVA7QUFDQSxDQW5CRDs7QUFxQkFFLE9BQU9DLE9BQVAsR0FBaUJMLElBQWpCIiwiZmlsZSI6InNoZnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJzaGZ0XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInNoZnQvc2hmdC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJzaGZ0LmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zaGZ0LmdpdFwiLGBgXHJcblx0XHRcdFwidGVzdFwiOiBcInNoZnQtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRHZXQgcmVtYWluaW5nIGVsZW1lbnRzIHN0YXJ0aW5nIGZyb20gdGhlIGdpdmVuIGluZGV4LlxyXG5cclxuXHRcdERlZmF1bHQgaW5kZXggaXMgMS4gVGhpcyB3aWxsIGFsd2F5cyByZXR1cm4gYSBuZXcgYXJyYXkuXHJcblxyXG5cdFx0UmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gb2YgQXJyYXkucHJvdG90eXBlLnNwbGljZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XHJcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xyXG5cclxuY29uc3Qgc2hmdCA9IGZ1bmN0aW9uIHNoZnQoIGFycmF5LCBpbmRleCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogQXJyYXksXHJcblx0XHRcdFx0XCJpbmRleDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGFyaWQoIGFycmF5ICkgKXtcclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIGluZGV4ICE9IFwibnVtYmVyXCIgfHwgaW5kZXggPT09IDAgKXtcclxuXHRcdGluZGV4ID0gMTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByYXplKCBhcnJheSApLnNwbGljZSggaW5kZXggKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2hmdDtcclxuIl19
//# sourceMappingURL=shft.support.js.map
