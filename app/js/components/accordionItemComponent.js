angular.module('moto-accordionApp')
.component('motoAccordionItem', {
	transclude: {
		'header': 'header',
		'body': 'div'
	},
	template:
	'<div class="panel-heading header" ng-transclude="header" ng-click="$ctrl.open()"></div>' +
	'<section ng-transclude="body" class="content"></section>',
	require: {
		motoAccordion: '^motoAccordion'
	},
	controller: [
		'$element',
		'$attrs',
		'$scope',
		'openAccordionService',
		function($element, $attrs, $scope, openAccordionService) {
			this.$onInit = function () {
				this.open = function() {
					if(!$element.hasClass('isOpen')) {
						if(this.motoAccordion.openOnlyOneCheckbox === true) {
							this.motoAccordion.close();
						}
						$element.addClass('isOpen');
					}
					else {
						$element.removeClass('isOpen');
					}
				}
			}
		}
	]
});