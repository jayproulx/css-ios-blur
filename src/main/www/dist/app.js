require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"1akwcQ":[function(require,module,exports){
angular.module( "skins", [] )
	.filter( 'titlecase', function () {
		return function ( s ) {
			s = ( s === undefined || s === null ) ? '' : s;
			return s.toString().toLowerCase().replace( /\b([a-z])/g, function ( ch ) {
				return ch.toUpperCase();
			} );
		};
	} )

	.controller( "NavCtrl", ["$scope", "$http", function ( $scope, $http ) {
		$scope.selectedSkin = "ios7";
		$scope.selectedFont = "lato";
		$scope.users = [];

		$http.get( 'http://api.randomuser.me/0.4/?lego&randomapi&results=8' ).then( function ( result ) {
			$scope.users = result.data.results;
			console.log( $scope.users );
		} );

		$scope.setSkin = function ( skinName ) {
			$( "#skin" ).attr( "href", "dist/skins/" + skinName + ".css" );
			$scope.selectedSkin = skinName;
		};

		$scope.setFont = function ( fontName ) {
			$( "#font" ).attr( "href", "dist/fonts/" + fontName + ".css" );
			$scope.selectedFont = fontName;
		};
	}] );
},{}],"js/index":[function(require,module,exports){
module.exports=require('1akwcQ');
},{}]},{},["1akwcQ"])
;