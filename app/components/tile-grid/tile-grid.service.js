/**
 * Created by Mark on 26/12/2016.
 */
angular.module("tileGrid")
    .service("taskService", function() {
    var currentHighestId = 0;

    this.getAliveTasks = function () {
        var aliveTasks = [];
        for(var i = 0; i < tasks.length; i++){
            if(!tasks[i].deleted){
                aliveTasks.push(tasks[i]);
            }
        }
        return aliveTasks;
    };

    this.addTask = function(owner, title){
        var id = generateId();
        tasks.push(new Task(id, owner, title));
    };

    this.deleteTask = function(id){
        for(var i = 0; i < tasks.length; i++){
            if(tasks[i].id === id){
                tasks[i].deleted = true;
            }
        }
    };

    generateId = function() {
        currentHighestId++;
        return currentHighestId;
    };

    var users = [
        new User("Mark"),
        new User("Kathy")
    ];

    var tasks = [
        new Task(users[0], "Important Meeting - Mark", generateId()),
        new Task(users[0], "Lesser Meeting", generateId()),
        new Task(users[1], "Important Meeting - Kathy", generateId()),
    ];


});

