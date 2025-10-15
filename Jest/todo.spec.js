import { launch } from "puppeteer";
import tasks from "./toDoListTasks.json";

describe("Функциональное тестирование списка задач (Jest + Puppeteer)", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch({
      headless: false,
      slowMo: 50,
    });

    page = await browser.newPage();
    await page.goto("https://todomvc.com/examples/emberjs/todomvc/dist/");
    const title = await page.$eval("h1", (el) => el.textContent);
    expect(title).toMatch(/todos/i);
  });

  it("Добавление одной задачи", async () => {
    await page.type("input.new-todo", "Стать Миллиардером");
    await page.keyboard.press("Enter");
    const todoText = await page.$eval(
      ".todo-list li label",
      (el) => el.textContent
    );
    expect(todoText).toContain("Стать Миллиардером");
  });

  tasks.forEach((task) => {
    it(`Добавление задачи: ${task}`, async () => {
      await page.type("input.new-todo", task);
      await page.keyboard.press("Enter");

      const items = await page.$$eval(".todo-list li label", (els) =>
        els.map((el) => el.textContent)
      );
      expect(items).toContain(task);
    });
  });

  afterAll(async () => {
    await page.click("input.toggle");
    await page.click("a#ember6");
    let todoListItems = await page.$$(".todo-list li label");
    expect(todoListItems.length).toBeGreaterThan(0);
    await page.click("a#ember5");
    todoListItems = await page.$$(".todo-list li label");
    expect(todoListItems.length).toBeGreaterThanOrEqual(0);
    await page.click("button.clear-completed");
    await browser.close();
  });
});
