todoList.controller('TodoListController', [function() {
  var self = this;

  self.taskList = [];

  self.addTask = function() {
    (self.taskList).push(self.newTask);
  }

}]);
