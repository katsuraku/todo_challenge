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

  it('displays tasks', function() {

    var tasks = element.all(by.repeater('task in listCtrl.taskList'))

    addTaskBox.sendKeys('Find marbles');
    addButton.click();
    expect(tasks.get(0).getText()).toEqual('Find marbles');
  });

});
