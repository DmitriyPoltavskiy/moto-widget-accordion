angular.module('moto-accordionApp', [])
.component('motoAccordionItem', {
	transclude: {
		'header': 'header',
		'body': 'div'
	},
	template:

	'<div class="panel-heading header" ng-click="$ctrl.openAccordion()" ng-transclude="header"></div>' +
	'<section ng-transclude="body" class="content"></section>',

	controller: ['$element', '$attrs', '$scope', function($element, $attrs, $scope) {
		var vm = this;
		vm.isOpen = false;

		$scope.$on('closeOtherAccodion', function (event) {
			vm.isOpen = true;
			vm.openAccordion();
		});

		vm.openAccordion = function() {
			if(!vm.isOpen) {

				if($scope.$parent.$parent.$ctrl.openOnlyOneActivate) {
					$scope.$emit('openAccordion');
				}
				
				$element.find('section').addClass('isOpen');
				vm.isOpen = true;

			}
			else if(vm.isOpen) {
				$element.find('section').removeClass('isOpen');
				vm.isOpen = false;
			}
		}
	}]
})
.component('motoAccordion', {
	transclude: true,
	template:

	'<button ng-show="$ctrl.closeAllButton" ng-click="$ctrl.closeAllItem()">Close all</button>' +
	'<div ng-transclude></div>',

	bindings: {
		openOnlyOneCheckbox: '=openOnlyOne',
		closeAllButton: '=closeAll'
	},
	controller: ['$element', '$attrs', '$scope', function($element, $attrs, $scope) {
		var vm = this;
		vm.openOnlyOneActivate = false;

		vm.closeAllItem = function() {
			$scope.$broadcast('closeOtherAccodion');
		}

		if(vm.openOnlyOneCheckbox === true) {
			vm.openOnlyOneActivate = true;

			$scope.$on('openAccordion', function (event) {
				$scope.$broadcast('closeOtherAccodion');
			});
		}
	}]
})
