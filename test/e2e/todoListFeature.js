describe('Todo list', function() {

  var addTaskBox = element(by.model('listCtrl.newTask'));
  var addButton = element(by.className('addBtn'));
  var deleteButton = element(by.className('delBtn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('To do list');
  });

  it('displays a task', function() {

    var tasks = element.all(by.repeater('task in listCtrl.taskList'));

    addTaskBox.sendKeys('Find marbles');
    addButton.click();
    expect(tasks.get(0).getText()).toEqual('Find marbles');
  });

  it('displays multiple tasks', function() {

    var tasks = element.all(by.repeater('task in listCtrl.taskList'));

    addTaskBox.sendKeys('Find marbles');
    addButton.click();
    addTaskBox.sendKeys('Go outside');
    addButton.click();
    expect(tasks.get(0).getText()).toEqual('Find marbles');
    // expect(tasks.get(1).getText()).toEqual('Go outside');
  });

  // it('should know a task is done when the associated box is checked', function() {
  //   var taskStatus = element(by.binding('task.done'));
  //   expect(taskStatus.toEqual('false');
  //   element(by.model('task.done')).click();
  //   expect(taskStatus.toEqual('true')
  // });

  it('removes tasks marked as done when the delete button is clicked', function() {
    var tasks = element.all(by.repeater('task in listCtrl.taskList'));

    addTaskBox.sendKeys('Find marbles');
    addButton.click();
    addTaskBox.sendKeys('Go outside');
    addButton.click();
    element.all(by.model('task.done')).get(0).click();
    deleteButton.click();
    expect(tasks).toEqual('Go outside');
  });
});
