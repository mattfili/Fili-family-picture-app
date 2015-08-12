angular.module('FFF')

.controller('loginController', function ($scope, $imgurAuth, $stateParams) {
	var vm = this;

	var passAuth = new $imgurAuth();

	passAuth.getAuth('code', function(url) {
		vm.imgurAuthLink = url
		console.log(url)
	})



})

.controller('loginAuth', function ($scope, $imgurAuth, $stateParams) {
	var vm = this;

	console.log($stateParams)
	

});