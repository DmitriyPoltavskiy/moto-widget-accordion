function openAccordionService($firebaseArray) {

	var accordion = {};

	accordion.openOnlyOne = false;

	return accordion;
}

angular.module('moto-accordionApp')
.factory('openAccordionService', [openAccordionService])