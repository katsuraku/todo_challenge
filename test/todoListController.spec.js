describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty task list and empty add tasks box', function() {
    // expect(ctrl.taskList).toBeUndefined();
    expect(ctrl.addTask).toBeUndefined();
  });

  describe('when adding a task', function() {

  var task = 'Learn Angular';

  it('displays the task in the to do list', function() {
    expect(ctrl.taskList).toEqual(task);
  });
});
});
