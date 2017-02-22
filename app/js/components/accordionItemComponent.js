angular.module('motoAccordionApp')
.component('motoAccordionItem', {
	transclude: {
		'itemHeader': 'motoAccordionItemHeader',
		'itemBody': 'motoAccordionItemBody'
	},
	template:
	'<div class="panel-heading header" ng-transclude="itemHeader" ng-click="$ctrl.open()"></div>' +
	'<section ng-transclude="itemBody" class="content"></section>',
	require: {
		motoAccordion: '^motoAccordion'
	},
	controller: [
		'$element',
		function($element) {
			this.open = function() {
				if (!$element.hasClass('moto-accordion-item-opened')) {
					if (this.motoAccordion.openOnlyOne === true) {
						this.motoAccordion.close();
					}
					$element.addClass('moto-accordion-item-opened');
				}
				else {
					$element.removeClass('moto-accordion-item-opened');
				}
			};
		}
	]
});