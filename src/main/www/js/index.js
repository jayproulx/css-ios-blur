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