"use strict";var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var assert = require("assert");
var shft = require("./shft.js");

assert.deepEqual(shft([1, 2, 3]), [2, 3], "should return [ 2, 3 ]");

assert.deepEqual(shft([1, 2, 3, 4, 5], 2), [3, 4, 5], "should return [ 3, 4, 5 ]");

assert.deepEqual(shft([1, 2, 3, 4, 5], -2), [4, 5], "should return [ 4, 5 ]");

(function () {

	assert.deepEqual(shft(arguments, 2), ["hello", (0, _for2.default)("hi")], "should return [ 'hello', Symbol.for( 'hi' ) ]");

})((0, _for2.default)("hello"), 2, "hello", (0, _for2.default)("hi"));

console.log("ok");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJzaGZ0IiwiZGVlcEVxdWFsIiwiYXJndW1lbnRzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUNBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxXQUFULENBQWI7O0FBRUFELE9BQU9HLFNBQVAsQ0FBa0JELEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFsQixFQUF1QyxDQUFFLENBQUYsRUFBSyxDQUFMLENBQXZDLEVBQWlELHdCQUFqRDs7QUFFQUYsT0FBT0csU0FBUCxDQUFrQkQsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQU4sRUFBeUIsQ0FBekIsQ0FBbEIsRUFBZ0QsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBaEQsRUFBNkQsMkJBQTdEOztBQUVBRixPQUFPRyxTQUFQLENBQWtCRCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBTixFQUF5QixDQUFDLENBQTFCLENBQWxCLEVBQWlELENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBakQsRUFBMkQsd0JBQTNEOztBQUVBLENBQUUsWUFBVzs7QUFFWkYsUUFBT0csU0FBUCxDQUFrQkQsS0FBTUUsU0FBTixFQUFpQixDQUFqQixDQUFsQixFQUF3QyxDQUFFLE9BQUYsRUFBVyxtQkFBWSxJQUFaLENBQVgsQ0FBeEMsRUFBeUUsK0NBQXpFOztBQUVBLENBSkQsRUFJSyxtQkFBWSxPQUFaLENBSkwsRUFJNEIsQ0FKNUIsRUFJK0IsT0FKL0IsRUFJd0MsbUJBQVksSUFBWixDQUp4Qzs7QUFNQUMsUUFBUUMsR0FBUixDQUFhLElBQWIiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCIuL3NoZnQuanNcIiApO1xyXG5cclxuYXNzZXJ0LmRlZXBFcXVhbCggc2hmdCggWyAxLCAyLCAzIF0gKSwgWyAyLCAzIF0sIFwic2hvdWxkIHJldHVybiBbIDIsIDMgXVwiICk7XHJcblxyXG5hc3NlcnQuZGVlcEVxdWFsKCBzaGZ0KCBbIDEsIDIsIDMsIDQsIDUgXSwgMiApLCBbIDMsIDQsIDUgXSwgXCJzaG91bGQgcmV0dXJuIFsgMywgNCwgNSBdXCIgKTtcclxuXHJcbmFzc2VydC5kZWVwRXF1YWwoIHNoZnQoIFsgMSwgMiwgMywgNCwgNSBdLCAtMiApLCBbIDQsIDUgXSwgXCJzaG91bGQgcmV0dXJuIFsgNCwgNSBdXCIgKTtcclxuXHJcbiggZnVuY3Rpb24oICl7XHJcblxyXG5cdGFzc2VydC5kZWVwRXF1YWwoIHNoZnQoIGFyZ3VtZW50cywgMiApLCBbIFwiaGVsbG9cIiwgU3ltYm9sLmZvciggXCJoaVwiICkgXSwgXCJzaG91bGQgcmV0dXJuIFsgJ2hlbGxvJywgU3ltYm9sLmZvciggJ2hpJyApIF1cIiApO1xyXG5cclxufSApKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSwgMiwgXCJoZWxsb1wiLCBTeW1ib2wuZm9yKCBcImhpXCIgKSApO1xyXG5cclxuY29uc29sZS5sb2coIFwib2tcIiApXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
