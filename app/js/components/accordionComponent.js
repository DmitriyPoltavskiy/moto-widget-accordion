angular.module('moto-accordionApp')
.component('motoAccordion', {
	bindings: {
		openOnlyOne: '=openOnlyOne'
	},
	controller: [
		'$element',
		'$attrs',
		'$scope',
		function($element, $attrs, $scope) {
			this.$onInit = function () {
				this.close = function () {
					$element.children().removeClass('isOpen');
				}
			}
		}
	]
});