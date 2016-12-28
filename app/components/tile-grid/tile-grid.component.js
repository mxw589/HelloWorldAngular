/**
 * Created by Mark on 28/12/2016.
 */
angular
    .module("tileGrid")
    .component("tileGrid", {

    templateURL : "app/components/tile-grid/tile-grid.template.html",

    controller : function TileGridController($scope) {

        init();

        function init() {
            $scope.tasks = taskService.getAliveTasks();
        }
    }

});