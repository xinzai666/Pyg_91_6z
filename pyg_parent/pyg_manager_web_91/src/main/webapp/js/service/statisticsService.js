app.service("statisticsService",function ($http) {
    this.goodsNumSelect=function () {
        return $http.get("../../statistics/goodsNumSelect")

    }

})