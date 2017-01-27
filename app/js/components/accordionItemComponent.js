angular.module('moto-accordionApp')
.component('motoAccordionItem', {
	transclude: {
		'header': 'header',
		'body': 'div'
	},
	template:

	'<div class="panel-heading header" ng-transclude="header" ng-click="$ctrl.open()"></div>' +
	'<section ng-transclude="body" class="content"></section>',

	controller: [
		'$element',
		'$attrs',
		'$scope',
		'openAccordionService',
		function($element, $attrs, $scope, openAccordionService) {
			var vm = this;
			vm.isOpen = false;

			// vm.open = function() {
			// 	$element.toggleClass('isOpen');
			// }

			// vm.open = function() {
			// 	if(!vm.isOpen) {
			// 		$element.addClass('isOpen');
			// 		vm.isOpen = true;
			// 	}
			// 	else {
			// 		$element.removeClass('isOpen');
			// 		vm.isOpen = false;
			// 	}
			// }
			console.log('element ', $element);
			

			vm.open = function() {
				if(!vm.isOpen) {
					$element.addClass('isOpen');
					vm.isOpen = true;
				}
				else {
					$element.removeClass('isOpen');
					vm.isOpen = false;
				}
			}


			

		}
	]
});