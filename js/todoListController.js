todoList.controller('TodoListController', [function() {
  var self = this;

  self.taskList = [];

  self.addTask = function() {
    (self.taskList).push({title: self.newTask, done: false});
    console.log(self.taskList);
  };

  self.deleteDone = function() {
    var doneIndeces = [];

    for (var i = self.taskList.length-1; i >= 0; i--) {
      if(self.taskList[i].done) {
        doneIndeces.push(i);
      };
    };

    doneIndeces.forEach(function(index) {
      self.taskList.splice(index, 1);
    });
  };
}]);
