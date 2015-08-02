todoList.controller('TodoListController', [function() {
  var self = this;

  self.taskList = [];

  self.addTask = function() {
    // var task = {title: self.newTask}
    (self.taskList).push({title: self.newTask, done: false});
    console.log(self.taskList);
  }
  //
  // self.isChecked = function(index) {
  //   self.taskList[index].done = true;
  //   console.log(self.taskList[index]);
  // }

  // self.deleteDone = function(task) {
  //
  //   self.taskList = self.taskList.filter(function() {
  //     return !task.done;
  //   })
  //
  //   $filter('filter')(array, expression, comparator)
  //
  // };

}]);
