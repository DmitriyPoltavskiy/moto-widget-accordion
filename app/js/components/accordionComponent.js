angular.module('motoAccordionApp')
.component('motoAccordion', {
	bindings: {
		openOnlyOne: '=openOnlyOne'
	},
	controller: [
		'$element',
		function($element) {
			this.close = function() {
				$element.children().removeClass('moto-accordion-item-opened');
			};
		}
	]
});