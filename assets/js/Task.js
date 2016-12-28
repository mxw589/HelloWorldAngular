/**
 * Created by Mark on 27/12/2016.
 */
function Task(owner, title, id){
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.description;
    this.collaborators = [];
    this.completeness = "To Do";
    this.deleted = false;
}

Task.prototype.setOwner = function(owner){
    this.owner = owner;
}

Task.prototype.setTitle = function(title){
    this.title = title;
}

Task.prototype.setDescription = function(description){
    this.description = description;
}

Task.prototype.addCollaborator = function (collaborator){
    this.collaborators.push(collaborator);
}

Task.prototype.setCompleteness = function(completeness){
    this.completeness = completeness;
}