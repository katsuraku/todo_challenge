describe('Todo list', function() {

  var addTaskBox = element(by.model('listCtrl.newTask'))
  var addButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('To do list');
  });

  it('displays a task', function() {

    var tasks = element.all(by.repeater('task in listCtrl.taskList'))

    addTaskBox.sendKeys('Find marbles');
    addButton.click();
    expect(tasks.get(0).getText()).toEqual('Find marbles');
  });

  it('displays multiple tasks', function() {

    var tasks = element.all(by.repeater('task in listCtrl.taskList'))

    addTaskBox.sendKeys('Find marbles');
    addButton.click();
    addTaskBox.sendKeys('Go outside');
    addButton.click();
    expect(tasks.get(0).getText()).toEqual('Find marbles');
    // expect(tasks.get(1).getText()).toEqual('Go outside');
  });

});
