'use strict';

angular.module('FFF').controller('loginController', function ($scope, $imgurAuth, $stateParams) {
	var vm = this;

	var passAuth = new $imgurAuth();

	passAuth.getAuth('code', function (url) {
		vm.imgurAuthLink = url;
		console.log(url);
	});
}).controller('loginAuth', function ($scope, $imgurAuth, $stateParams) {
	var vm = this;

	console.log($stateParams);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9sb2dpbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUVwQixVQUFVLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRTtBQUMxRSxLQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsS0FBSSxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQzs7QUFFaEMsU0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBUyxHQUFHLEVBQUU7QUFDdEMsSUFBRSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUE7QUFDdEIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNoQixDQUFDLENBQUE7Q0FJRixDQUFDLENBRUQsVUFBVSxDQUFDLFdBQVcsRUFBRSxVQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFO0FBQ3BFLEtBQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxRQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0NBR3pCLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvanMvbG9naW5Db250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ0ZGRicpXG5cbi5jb250cm9sbGVyKCdsb2dpbkNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkaW1ndXJBdXRoLCAkc3RhdGVQYXJhbXMpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHR2YXIgcGFzc0F1dGggPSBuZXcgJGltZ3VyQXV0aCgpO1xuXG5cdHBhc3NBdXRoLmdldEF1dGgoJ2NvZGUnLCBmdW5jdGlvbih1cmwpIHtcblx0XHR2bS5pbWd1ckF1dGhMaW5rID0gdXJsXG5cdFx0Y29uc29sZS5sb2codXJsKVxuXHR9KVxuXG5cblxufSlcblxuLmNvbnRyb2xsZXIoJ2xvZ2luQXV0aCcsIGZ1bmN0aW9uICgkc2NvcGUsICRpbWd1ckF1dGgsICRzdGF0ZVBhcmFtcykge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdGNvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcylcblx0XG5cbn0pOyJdfQ==
