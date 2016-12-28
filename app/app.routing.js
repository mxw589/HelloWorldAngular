/**
 * Created by Mark on 28/12/2016.
 */
angular
    .module("schedulingApp")
    .config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.html"
        })
        .when("/tileGrid", {
            template : "<tile-grid></tile-grid>"
        });
}]);