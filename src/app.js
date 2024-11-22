const app = angular.module("app", []);

app.controller("MainCtrl", function ($scope) {
  $scope.name = "World";
  console.log(`MainCtrl`);
  const pwoe = 2323;
  pwoe = 'abc';
  // $scope.$watch("pageTime", (newVal) => {
  //   if (newVal) {
        
  //   }
  // });
  // const yearMonthDay = renderYearMonthDay();
  // const hoursArr = renderHours(0);
  // $scope.yearMonthDay = yearMonthDay;
  // $scope.hoursArr = hoursArr;
});
