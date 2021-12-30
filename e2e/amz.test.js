const puppeteer = require("puppeteer");
let browser = null;
let page = null;
const timeOut = 60000;
jest.setTimeout(timeOut);

describe("AMAZON TEST", () => {
  beforeAll(async () => {
    // headless: trueにするとブラウザを開かない
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 720,
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  test("うどん", async () => {
    await page.goto("https://www.amazon.co.jp/");
    const searchBox = await page.$("#twotabsearchtextbox");
    await searchBox.type("うどん");
    await searchBox.press("Enter");

    await page.waitForNavigation();
    const products = await page.$$(
      'div[class="s-expand-height s-include-content-margin s-border-bottom s-latency-cf-section"]'
    );
    expect(products.length).toBe(48);
  });
});
