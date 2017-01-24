angular.module('widget-accordion', ['ui.bootstrap']);
angular.module('widget-accordion').controller('AccordionCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Заголовок можно передавать из scope контроллера',
      content: 'Контент из scope'
    },
    {
      title: 'ng-repeat будет создавать новый аккордеон пока в scope есть объекты',
      content: 'Контент из scope'
    } 
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
})
.directive('accordeon', function() {
  return {
      restrict: 'A',
      transclude: {
        'header': 'header',
        'body': 'section',
        'footer': 'footer'
      },
      template: '<div style="border: 1px solid black;">' +
                  '<div class="header" ng-transclude="header">Fallback Title</div>' +
                  '<div ng-transclude="body">Fallback Body</div>' +
                  '<div class="footer" ng-transclude="footer">Fallback Footer</div>' +
                '</div>'
    };
})
.controller('accordeonCtrl', ['$scope', function($scope) {
  $scope.header = 'Multi-slot transclusion header';
  $scope.content = 'Multi-slot transclusion content';
  $scope.footer = 'Multi-slot transclusion footer';
}]);
