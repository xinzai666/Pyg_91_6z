app.controller("statisticsController",function ($scope, statisticsService) {

    $scope.goodsNumSelect=function () {
        statisticsService.goodsNumSelect().success(function (res) {
            $scope.numList = res;
            $scope.nemeArr=[];
            for(var i=0;i<res.length;i++){
                $scope.nemeArr.push(res[i].name)
            }
        })

    }
})