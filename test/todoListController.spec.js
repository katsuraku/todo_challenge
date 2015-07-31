describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty task list and empty add tasks box', function() {
    expect(ctrl.taskList).toBeUndefined();
    expect(ctrl.newTask).toBeUndefined();
  });

  describe('when adding a task', function() {

    it('displays the task in the to do list', function() {
      ctrl.newTask = 'Learn Angular';
      ctrl.addTask();
      expect(ctrl.taskList).toEqual('Learn Angular');
    });
  });
});
