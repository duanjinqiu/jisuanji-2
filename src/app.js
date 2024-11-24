const app = angular.module("app", []);

app.controller("MainCtrl", function ($scope) {
  $scope.name = "World";
  $scope.$watch("pageTime", (newVal) => {
    if (newVal) {
      today = newVal;
      run();
    }
  });
  run({today});
  function run({today}) {
    const { oneDayDateArr, dayDate } = start({
      startHours,
      endHours,
      step,
      day,
      today,
    });

    const yearMonthDay = dayDate;
    const hoursArr = oneDayDateArr;
    // const yearMonthDay = renderDay(dayDate);
    // const hoursArr = renderHours(oneDayDateArr);
    $scope.yearMonthDay = yearMonthDay;
    $scope.hoursArr = hoursArr;
  }

  $scope.clickYearMonthDay = (ymd) => {
    run();
  };
  $scope.clickOneDay = (oneDate) => {
    run({today: oneDate});
  }
});
