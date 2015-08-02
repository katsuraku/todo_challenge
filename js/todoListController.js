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

  self.deleteDone = function() {
    var doneIndeces = [];

    for (var i = self.taskList.length-1; i >= 0; i--) {
      if(self.taskList[i].done) {
        doneIndeces.push(i);
      };
    };
    
    doneIndeces.forEach(function(index) {
      self.taskList.splice(index, 1);
    })
  };


    // self.taskList.forEach
    // $self.taskList.splice(self.taskList.indexOf(person), 1 );
    // self.taskList = self.taskList.filter(function() {
    //   return !task.done;
    // })
    //
    // $filter('filter')(array, expression, comparator)



}]);
