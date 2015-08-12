angular.module('FFF', ['ui.router','foundation', 'foundation.common', 'ngAnimate', 'ngCookies', 'wu.masonry'])

.constant('FIRE_URL', 'https://filifamfotos.firebaseIO.com')

.constant('CLIENT_ID', '5fe903c4adc9d91')

.constant('secret', '92ebb19487a535daddb7f955425d112d0b4f3032')

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

	$stateProvider
	.state('start', {
	    abstract: true,
	    templateUrl: 'assets/landing.html',
  	})
	.state('start.dash', {
		url: '/landing',
	    views: {
	      'login': {
	        templateUrl: 'assets/login.html',
	        controller: 'loginController',
	        controllerAs: 'login'
	      }
	    }
	})
	.state('authorizing', {
		url: '/gallery/?code',
		templateUrl: 'assets/login.html',
        controller: function ($stateParams) {
        	console.log($stateParams)
        	postToken($stateParams);
        }
	})

})

.factory('$imgur', function ($q, $http) {

	var imgur = function(authToken) {
		this.authToken = authToken;
		this.api = 'https://api.imgur.com/3/';
	}

	imgur.prototype = {

		getGallery: function(section, sort, page, dateRange, showViral) {
	        var deferred = $q.defer();
	        var galleryEndpoint = this.apiBase + "/gallery";
	        if(section !== undefined) { galleryEndpoint += "/" + section; }
	        if(sort !== undefined) { galleryEndpoint += "/" + sort; }
	        if(dateRange !== undefined) { galleryEndpoint += "/" + dateRange; }
	        if(showViral !== undefined) { galleryEndpoint += "?showViral=" + showViral; }
	        $http({
	            method: "GET",
	            url: galleryEndpoint,
	            headers: {
	                "Authorization": "Bearer " + this.authToken
	            }
	        })
	        .success(function(result) {
	            deferred.resolve(result);
	        })
	        .error(function(error) {
	            deferred.reject(error);
	        });
	        return deferred.promise;
    	}
    }

	return imgur;
})

.factory('$imgurAuth', function ($q, $http, CLIENT_ID, secret) {

	var imgurAuth = function() {
		this.cID = CLIENT_ID;
		this.auth_url = 'https://api.imgur.com/oauth2/authorize?'
		this.token_url = 'https://api.imgur.com/oauth2/token?'
	}

	imgurAuth.prototype = {

		getAuth: function(response_type, cb) {
			var deferred = $q.defer();
	        var authEndpoint = this.auth_url + "client_id=" + CLIENT_ID;
	        if(response_type !== undefined) { authEndpoint += "&response_type=" + response_type }
	        else{ authEndpoint += "&response_type=token"; }

	        cb(authEndpoint);
	    },

	    postToken: function(stateParams) {
	    	console.log(stateParams)
	    	$http({
	    		method: 'POST',
	    		url: this.token_url,
	    		client_id: CLIENT_ID,
	    		client_secret: secret,
	    		grant_type: authorization_code,
	    		code: stateParams.code
	    	})
	    }
    }

	return imgurAuth;
})