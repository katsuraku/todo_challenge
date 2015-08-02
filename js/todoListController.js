todoList.controller('TodoListController', [function() {
  var self = this;

  self.taskList = [];

  self.addTask = function() {
    // var task = {title: self.newTask}
    (self.taskList).push({title: self.newTask, done: false});
  }

  // self.deleteTask = function() {
  //   (self.taskList).remove(self.thisTask)
  // }

  // self.isChecked = function(index) {
  //
  // }

}]);
