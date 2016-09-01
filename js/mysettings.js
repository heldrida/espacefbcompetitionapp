angular.module('mySettings', [])
.constant('mySettings', {
	base_path: window.location.hostname.indexOf('tlnscompetitions') > -1 ? '/emerge_space' : '/emerge_space',
	wp_base_path: window.location.hostname.indexOf('tlnscompetitions') > -1 ? '/emerge_space/wordpress' : '/emerge_space/wordpress',
	app_id: 1773740642869136
});