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

				if($scope.$parent.$parent.$ctrl.openOnlyOneIsChecked) {
					$scope.$emit('openAccordion');
				}
				
				$element.find('section').addClass('isOpen');
				vm.isOpen = true;

			}
			else if(vm.isOpen) {

				if($scope.$parent.$parent.$ctrl.openOnlyOneIsChecked) {
					$scope.$emit('closeAllAccordeon');
				}

				$element.find('section').removeClass('isOpen');
				vm.isOpen = false;
			}
		}
	}]
})
.component('motoAccordion', {
	transclude: true,
	template:

	'<label ng-show="$ctrl.openOnlyOneActivateCheckbox">' +
		'<input type="checkbox" ng-click="$ctrl.openOnlyOne()" name="">' + 
		'Toggle - Open only one at a time' + 
	'</label>' +
	'<button ng-show="$ctrl.closeAllButton" ng-click="$ctrl.closeAllItem()">Close all</button>' +
	'<div ng-transclude></div>',
	
	bindings: {
		openOnlyOneActivateCheckbox: '=openOnlyOne',
		closeAllButton: '=closeAll'
	},
	controller: ['$element', '$attrs', '$scope', function($element, $attrs, $scope) {
		var vm = this;

		vm.closeAllItem = function() {
			$scope.$broadcast('closeOtherAccodion');
		}

		vm.openOnlyOne = function() {
			if(!vm.openOnlyOneIsChecked) {
				vm.openOnlyOneIsChecked = true;

				$scope.$on('openAccordion', function (event) {
					$scope.$broadcast('closeOtherAccodion');
				});

				$scope.$on('closeAllAccordeon', function (event) {
					$element.find('section').removeClass('isOpen');
				});
			}
			else if(vm.openOnlyOneIsChecked) {
				vm.openOnlyOneIsChecked = false;
			}
		}
	}]
})
