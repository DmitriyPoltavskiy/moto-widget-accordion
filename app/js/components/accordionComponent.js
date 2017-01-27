angular.module('moto-accordionApp')
.component('motoAccordion', {
	transclude: true,
	template:

	'<button ng-show="$ctrl.closeAllButton">Close all</button>' +
	'<div ng-transclude></div>',

	bindings: {
		openOnlyOneCheckbox: '=openOnlyOne',
		closeAllButton: '=closeAll'
	},
	controller: [
		'$element',
		'$attrs',
		'$scope',
		'openAccordionService',
		function($element, $attrs, $scope, openAccordionService) {

			var vm = this;

			openAccordionService.openOnlyOne = vm.openOnlyOneCheckbox;
			// console.log('ctrl ', openAccordionService.openOnlyOne);
			// console.log('element ', $element);
		}
	]
});