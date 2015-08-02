describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty task list and empty add tasks box', function() {
    // expect(ctrl.taskList).toBeUndefined();
    expect(ctrl.newTask).toBeUndefined();
  });

  describe('when adding a task', function() {

    it('displays the task in the to do list', function() {
      ctrl.newTask = 'Learn Angular';
      ctrl.addTask();
      expect(ctrl.taskList).toEqual([{title:'Learn Angular', done:false}]);
    });
  });

  describe('when adding another task', function() {

    var items = [{title:'Learn Angular', done:false}, {title:'Buy irn bru', done:false}]

    it('displays both the first task and the new task in the to do list', function() {
      ctrl.newTask = 'Learn Angular';
      ctrl.addTask();
      ctrl.newTask = 'Buy irn bru'
      ctrl.addTask();
      expect(ctrl.taskList).toEqual(items);
    });
  });

  describe('when marking a task done', function() {

    xit('displays the task text in grey and struck through', function() {
      ctrl.newTask = {title:'Find Nemo', done: false};
      ctrl.addTask();
      // ACTION TO REPRESENT CHECKING BOX TO MARK TASK DONE
      expect(ctrl.taskList).toEqual({title:'Find Nemo', done: true})
    });
  });

  describe('when deleting tasks that are marked as done', function() {
    xit('removes the tasks that have been marked done from the list', function() {
      ctrl.newTask = {title:'Find Nemo', done: false};
      ctrl.addTask();
      ctrl.newTask = {title:'Ascend', done: false};
      ctrl.addTask();
      // ACTION TO REPRESENT CHECKING BOX TO MARK TASK DONE ON SECOND TASK
      ctrl.deleteDone();
      expect(ctrl.taskList).toEqual({title:'Find Nemo', done: false})
    });
  });

  // describe('when editing a task', function() {
  //
  //   it('changes the text of the task according to what the user types in', function() {
  //     ctrl.newTask = 'Learn Angular';
  //     ctrl.editTask('');
  //     expect(ctrl.taskList).toEqual()
  //   })
  // }
});
