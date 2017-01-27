angular.module('moto-accordionApp', [])
.component('motoAccordionItem', {
	transclude: {
		'header': 'header',
		'body': 'div'
	},
	template:

	'<div class="panel-heading header" ng-transclude="header"></div>' +
	'<section ng-transclude="body" class="content"></section>',

	controller: ['$element', '$attrs', '$scope', function($element, $attrs, $scope) {
		var vm = this;


		
	}]
})
.component('motoAccordion', {
	transclude: true,
	template:

	'<button ng-show="$ctrl.closeAllButton">Close all</button>' +
	'<div ng-transclude></div>',

	bindings: {
		openOnlyOneCheckbox: '=openOnlyOne',
		closeAllButton: '=closeAll'
	},
	controller: ['$element', '$attrs', '$scope', function($element, $attrs, $scope) {
		var vm = this;

	}]
})
