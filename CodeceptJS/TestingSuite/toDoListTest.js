const tasks = require("./toDoListTasks.json");
Feature("Функциональное тестирование cписка задач");
Before(({ I }) => {
  I.amOnPage("https://todomvc.com/examples/emberjs/todomvc/dist/");
  I.see("todos");
});
Scenario("Добавление задачи", ({ I }) => {
  I.fillField("input.new-todo", "Стать Миллиардером");
  I.pressKey("Enter");
});


  tasks.forEach((task) => {
    Scenario(`Добавление задачи ${task}` , ({ I }) => {
    I.fillField("input.new-todo", task);
    I.pressKey("Enter");
  });
});

After(({ I }) => {
  I.click("input.toggle");
  I.click("button.clear-completed");
});