import { expect } from "chai";
import { launch } from "puppeteer";
import tasks from "./toDoListTasks.js";

describe("Функциональное тестирование списка задач (Mocha + Chai + Puppeteer)", function () {
  let browser, page;

  before(async () => {
    browser = await launch({
      headless: false,
      slowMo: 50
      });
    page = await browser.newPage();
    await page.goto("https://todomvc.com/examples/emberjs/todomvc/dist/");
    const text = await page.$eval("h1", (el) => el.textContent);
    expect(text).to.include("todos");
  });

  it("Добавление одной задачи", async () => {
    await page.type("input.new-todo", "Стать Миллиардером");
    await page.keyboard.press("Enter");
    const todoText = await page.$eval(".todo-list li", (el) => el.textContent);
    expect(todoText).to.include("Стать Миллиардером");
  });

Object.values(tasks).forEach((task) => {
  it(`Добавление задачи: ${task}`, async () => {
    await page.type("input.new-todo", task);
    await page.keyboard.press("Enter");
    const todoText = await page.$$eval(".todo-list li", (els) =>
  els.map((el) => el.textContent.trim())
);
expect(todoText).to.include(task);
  });
});


  after(async () => {
    await page.click("input.toggle");
    await page.click("button.clear-completed");
    await browser.close();
  });
});
