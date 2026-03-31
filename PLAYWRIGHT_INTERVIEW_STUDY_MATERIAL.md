# Playwright Interview Study Material

Prepared from this project in `C:\ThisPWrightWork` for quick revision before interviews.

---

## 1) What this project taught me

This project shows a practical Playwright learning journey:

1. Basic Playwright test structure
2. Browser, context, and page usage
3. Different locator strategies
4. Assertions with `expect`
5. Checkbox, radio button, dropdown, and form automation
6. Date picker automation
7. Handling alerts and dialogs
8. Working with frames and iframes
9. Drag-and-drop automation
10. Taking screenshots
11. Data-driven testing using JSON
12. Page Object Model (POM)
13. Multi-project configuration
14. Retry, worker, trace, video, and screenshot configuration
15. HTML reporting and Allure reporting
16. Canvas automation and visual verification

---

## 2) Actual commands found from this project

These are the commands I could verify from the repo itself.

### Verified from `package.json`

- `npx playwright test`
- `npx playwright test --config playwright.config.js`
- `npx playwright test --grep`
- `npx playwright test -g`
- `npx playwright test --config playwright.config1.js --project='Chromium Project'`
- `npx playwright test --config playwright.config1.js --project='Firefox Project'`

### Verified from `e2e/Tips.js`

- `npx playwright codegen www.gmail.com`
- `npx playwright ui`

### Verified from `Playwright config cmds.docx`

- `npm run test`
- `npm run config`
- `npx playwright test -g @Validation`
- `npx playwright test --grep @Validation`
- `npm i -D @playwright/test allure-playwright`
- `npx playwright test --reporter=line,allure-playwright`

### Verified from comments inside tests

- `npx playwright test example.spec.js`

---

## 3) Installation and setup flow to remember for interviews

Some setup commands are standard Playwright commands that every interviewer expects you to know. They are not all explicitly stored in the repo, but they are important for explaining the complete workflow from scratch.

### Basic setup from zero

1. Install Node.js
2. Create a project folder
3. Initialize Playwright

Typical setup flow:

```bash
npm init playwright@latest
```

If doing manual package install:

```bash
npm i -D @playwright/test
npx playwright install
```

For Allure support used in this repo:

```bash
npm i -D allure-playwright
```

### Why these matter in interviews

Interviewers often ask:

- How do you install Playwright?
- What gets created after Playwright initialization?
- What is the difference between installing Playwright and installing browsers?
- What dependencies are required for reporting?

Good answer:

- `@playwright/test` gives the Playwright test runner.
- `npx playwright install` installs the browser binaries.
- `allure-playwright` adds Allure result generation support.

---

## 4) Project structure used here

Important folders and files in this project:

- `package.json` → scripts and dependencies
- `playwright.config.js` → base Playwright config
- `playwright.config1.js` → advanced / multi-project config
- `e2e/` → main test folder
- `e2e/Project/` → project-based examples like Swag Labs, screenshots, forms, alerts
- `e2e/Project/PageObjectModel/` → POM classes
- `e2e/Utils/Data.json` → data-driven test data
- `allure-results/` → Allure raw results
- `allure-report/` → generated Allure report
- `playwright-report/` → Playwright HTML report
- `test-results/` → execution artifacts

### Interview answer

If asked "How do you organize a Playwright framework?"

You can say:

- Keep configs at root
- Store tests in `e2e` or `tests`
- Store reusable page classes in a `PageObjectModel` folder
- Store test data in JSON or fixture files
- Store raw report artifacts separately from generated reports

---

## 5) Commands cheat sheet for revision

### Running tests

```bash
npx playwright test
npm run test
```

### Run using a config file

```bash
npx playwright test --config playwright.config.js
npm run config
```

### Run a specific file

```bash
npx playwright test example.spec.js
```

### Run tests by tag or grep

```bash
npx playwright test -g @Validation
npx playwright test --grep @Validation
```

### Run specific project from multi-project config

```bash
npx playwright test --config playwright.config1.js --project="Chromium Project"
npx playwright test --config playwright.config1.js --project="Firefox Project"
```

### Open Playwright UI mode

```bash
npx playwright ui
```

### Generate code using recorder

```bash
npx playwright codegen www.gmail.com
```

### Run with Allure reporter

```bash
npx playwright test --reporter=line,allure-playwright
```

### Interview-ready extra commands to remember

These are useful to know even if they are not explicitly stored in this repo:

```bash
npx playwright show-report
npx playwright test --headed
npx playwright test --debug
npx playwright test --trace on
```

### Allure commands worth remembering

Depending on how Allure CLI is installed in a machine, common commands are:

```bash
allure serve allure-results
allure generate allure-results --clean -o allure-report
```

If using npm wrapper or npx-based setup, command style may vary. In this repo, the strongest evidence is that Allure was run through the Playwright reporter command and report/result folders were generated successfully.

---

## 6) What the config files teach

### `playwright.config.js`

This is the simpler config.

Key points:

- `testDir: './e2e'` → tests are inside `e2e`
- `timeout: 40 * 1000` → max test timeout is 40 seconds
- `expect.timeout: 50 * 1000` → assertion timeout is 50 seconds
- `reporter: 'html'` → Playwright HTML report is enabled
- `browserName: 'chromium'`
- `headless: false` → browser visible while running
- `slowMo: 500` → slows actions by 500 ms for easier viewing/debugging

### Interview explanation

- **Test timeout** controls the full test duration.
- **Expect timeout** controls how long assertions retry.
- **Headed mode** helps while learning/debugging.
- **slowMo** is useful for demo or observation, but often disabled in CI.

### `playwright.config1.js`

This is the more advanced config.

Additional concepts:

- `retries: 3`
- `workers: 2`
- `projects` for multiple browsers
- `screenshot: 'only-on-failure'`
- `trace: 'on-all-retries'`
- `video: 'retry-with-video'`
- device emulation with `devices["Galaxy Tab S4 landscape"]`
- `permissions: ['geolocation']`
- `ignoreHTTPSErrors: true`

### Interview explanation

This file is strong interview material because it shows:

- cross-browser testing
- parallel execution
- retry strategy
- artifact collection on failure
- device emulation
- browser permissions handling
- handling test environments with insecure certificates

---

## 7) Important Playwright concepts learned from my tests

### 7.1 `test`, `expect`, async/await

Seen in multiple files:

- `import { test, expect } from '@playwright/test'`
- async functions are used because Playwright actions are asynchronous
- `await` ensures actions complete before moving ahead

### 7.2 `browser`, `context`, and `page`

From `e2e/example.spec.js`:

- `browser.newContext()` creates an isolated browser session
- `context.newPage()` opens a new tab in that session
- `{ page }` fixture is simpler when a new page is enough

### Interview difference

- **Browser** = actual browser instance
- **Context** = isolated session, like separate profile/incognito
- **Page** = tab inside a context

### 7.3 Locators used in this project

Used locator styles include:

- ID selector: `#user-name`
- class selector: `.inventory_item_name`
- attribute selector: `input[name="postalCode"]`
- text selector: `text=Add to cart`
- `getByText()`
- `getByRole()`
- `getByLabel()`
- `getByPlaceholder()`
- `frameLocator()`

### Interview point

Playwright recommends semantic locators like:

- `getByRole`
- `getByLabel`
- `getByPlaceholder`
- `getByText`

These are generally more maintainable than CSS/XPath when the application supports accessibility well.

### 7.4 Assertions used

Examples in the project:

- `toContainText()`
- `toBeChecked()`
- `toBeVisible()`
- `toBeHidden()`
- `toHaveText()`
- `expect.soft(...)`

### 7.5 Pause and debugging

Used heavily in this learning project:

- `page.pause()`
- `npx playwright ui`
- `npx playwright codegen ...`

These are great for:

- locator troubleshooting
- learning page structure
- seeing action sequence visually

### 7.6 Handling waits

This repo shows:

- `waitForLoadState('networkidle')`
- `locator.waitFor({ state: 'visible' })`
- assertion-based waiting

Interview-safe answer:

- Prefer Playwright auto-waiting and assertions
- Use explicit waits only when there is a real need
- Avoid blind `waitForTimeout()` unless you are debugging or handling a very special case

### 7.7 Handling alerts and dialogs

From `Project/Alerts.spec.js`:

- `page.once('dialog', async (dialog) => { await dialog.dismiss(); })`

This shows event-based alert handling.

### 7.8 Handling frames

From `Project/Alerts.spec.js`:

- `page.frameLocator('#frame1')`

From `GamingUI/canvas-iframe.spec.js`:

- iframe is targeted first, then canvas inside it is handled

### 7.9 Screenshot usage

From `Project/TestWithScreenshot.spec.js`:

- full-page or page screenshot
- element screenshot

Config also shows failure-based screenshots and video/trace setup.

### 7.10 Data-driven testing

From `SwagLabs-POM.spec.js` and `e2e/Utils/Data.json`:

- multiple test datasets are stored in JSON
- tests iterate through data with `for (const i of testdata)`

### 7.11 Page Object Model

This project includes:

- `ObjectRepo.js`
- `LoginPage.js`
- `ProductPage.js`
- `CartPage.js`
- `CheckoutPage.js`

This is important for interview discussion because it shows separation of:

- test logic
- page actions
- reusable methods
- data-driven test design

---

## 8) Test-by-test study notes from this project

### `e2e/example.spec.js`

This file teaches the basics:

- importing `test` and `expect`
- creating browser context and page manually
- using the built-in `page` fixture
- opening a URL with `goto`
- reading page title
- filling input fields
- clicking login button
- checking error message text
- basic checkbox flow
- `test.skip`
- `page.pause()` for debugging

### Interview takeaway

This file is the foundation for explaining Playwright lifecycle and simple UI automation.

---

### `e2e/DatePicker.spec.js`

This file teaches:

- waiting for the page to stabilize
- waiting for a visible element before interaction
- clicking through date picker views
- looping until the desired year range appears
- selecting year, month, and date

### Interview takeaway

This is good for explaining dynamic UI automation and loop-based selection logic.

---

### `e2e/selectcombobox.spec.js`

This file teaches:

- dropdown selection with `selectOption`
- simple page navigation

### Interview takeaway

Know the difference between:

- selecting native HTML `<select>` options with `selectOption`
- selecting custom dropdowns by clicking items manually

---

### `e2e/Project/FormSubmit.spec.js`

This file teaches:

- keyboard interactions
- `Control+A`, `Control+C`, `Control+V`
- focusing fields before typing or pasting

### Interview takeaway

Good example for keyboard automation and field handling.

---

### `e2e/Project/Alerts.spec.js`

This file teaches:

- handling JavaScript dialogs
- dismissing alerts
- hovering elements
- working with frame content using `frameLocator`
- asserting text inside an iframe

### Interview takeaway

Use this when asked about alerts, dialogs, hover, and iframe handling.

---

### `e2e/Project/DragAndDrop.spec.js`

This file teaches:

- `dragTo()` for drag-and-drop automation

### Interview takeaway

This is a classic scenario interviewers like to ask about.

---

### `e2e/Project/TestWithScreenshot.spec.js`

This file teaches:

- verifying hidden vs visible states
- page screenshot
- element screenshot

### Interview takeaway

Good for discussing test evidence and debugging failed UI states.

---

### `e2e/Project/CheckBoxVariant.spec.js`

This file teaches:

- `getByText`
- `getByLabel`
- `getByRole`
- `nth()`
- soft assertions
- placeholder-based locator

### Interview takeaway

This is a very good file for discussing modern locator strategy in Playwright.

---

### `e2e/Project/SwagLabs.spec.js`

This file teaches end-to-end business flow automation:

- login
- product search/selection
- add to cart
- cart verification
- checkout
- final confirmation message validation

### Interview takeaway

This is your strongest plain end-to-end scenario without POM abstraction.

---

### `e2e/Project/SwagLabs-POM.spec.js`

This file teaches:

- POM usage
- object repository usage
- reusable methods
- JSON-based data-driven execution

### Interview takeaway

This is your strongest file for framework design discussion.

---

### `e2e/GamingUI/canvas-iframe.spec.js`

This file teaches advanced concepts:

- environment variable usage with `SLOT_GAME_URL`
- iframe + canvas handling
- `boundingBox()` for coordinate-based actions
- mouse click by coordinates
- visual verification with `toHaveScreenshot`
- reading pixel data from canvas

### Interview takeaway

This is advanced and very impressive for interviews because canvas automation is harder than DOM automation.

---

## 9) My project comments converted into interview-ready notes

The tests already contain many learning comments. Here is the cleaner interview version of those ideas.

### Why use `async` and `await`?

Because Playwright performs asynchronous browser actions such as:

- page navigation
- clicking
- filling
- waiting for locators
- assertions with retries

Without `await`, steps may execute before the previous action completes.

### Why use `{ page }` instead of `{ browser }`?

- `{ page }` is easier when one isolated page is enough
- `{ browser }` is useful when you want custom contexts or multiple pages

### Why use `newContext()`?

Because a browser context provides isolation for:

- cookies
- session storage
- local storage
- login state

### Why use `page.pause()`?

To debug interactively, inspect locators, and understand page behavior.

### Why use `slowMo`?

To slow each action so the test behavior is easier to observe during learning or demos.

### Why use retries?

Retries help identify flaky tests and can stabilize CI when there are temporary issues.

### Why use traces and screenshots?

They help debug failures by showing:

- the sequence of actions
- DOM state
- timing problems
- exact failure point

---

## 10) Page Object Model explanation from this repo

### `ObjectRepo.js`

Acts like a central object creator.

It provides methods like:

- `getLoginPage()`
- `getProductPage()`
- `getCartPage()`
- `getCheckoutPage()`

### `LoginPage.js`

Contains:

- username locator
- password locator
- login button locator
- `goToWebsite(url)`
- `login(userName, password)`

### `ProductPage.js`

Contains:

- product title locators
- cart locator
- logic to add a specific product to cart
- method to click cart

### `CartPage.js`

Contains:

- cart item locator
- checkout locator
- method to verify product presence
- method to click checkout

### `CheckoutPage.js`

Contains:

- first name, last name, zip, continue, finish, confirmation locators
- checkout method
- confirmation assertion method

### Interview benefit of POM

POM improves:

- maintainability
- reusability
- readability
- separation of concerns
- easier updates when locators change

### Interview caution

POM should not become over-engineered. Keep methods focused and readable.

---

## 11) Data-driven testing from this repo

File: `e2e/Utils/Data.json`

This file stores multiple datasets:

- URL
- username
- password
- first name
- last name
- zip
- product name

Then `SwagLabs-POM.spec.js` loops through that data and creates tests dynamically.

### Interview answer

Data-driven testing helps run the same flow with different inputs without duplicating test code.

---

## 12) Reporting: HTML report vs Allure report

### Playwright HTML report

Configured in both config files with:

- `reporter: 'html'`

This creates Playwright’s built-in report in `playwright-report/`.

### Allure report in this project

Evidence found:

- dependency `allure-playwright`
- folder `allure-results/`
- folder `allure-report/`
- command `npx playwright test --reporter=line,allure-playwright`

### Important interview point

In this repo, the config files explicitly show HTML reporter, but Allure was also used through reporter command override. That means:

- default reporting was Playwright HTML
- Allure reporting was also used during execution with a CLI reporter override

This is a nice real-world example of combining built-in and external reporting strategies.

### Allure workflow to explain

1. Run tests with Allure reporter
2. Raw execution data is created in `allure-results/`
3. Generated report is created in `allure-report/`
4. Open report to review pass/fail, steps, attachments, retries, traces, and details

### Why Allure is useful

- richer visualization
- better historical reporting
- attachments and execution details
- better for stakeholder-friendly reports

---

## 13) Strong interview questions with answers based on this project

### Q1. What is Playwright?

Playwright is an end-to-end automation framework used to automate modern web applications across Chromium, Firefox, and WebKit. It supports auto-waiting, powerful locators, network handling, frames, screenshots, tracing, and cross-browser testing.

### Q2. What is the difference between `browser`, `context`, and `page`?

- `browser` is the main browser instance
- `context` is an isolated session
- `page` is a tab within the context

### Q3. Why is Playwright better than many older tools for modern apps?

Because it has:

- auto-waiting
- built-in retries for assertions
- strong cross-browser support
- multiple locator strategies
- trace viewer and screenshot support
- better handling of modern JS apps

### Q4. What is the use of `page.pause()`?

It pauses execution and opens inspector/debug support so you can inspect elements and understand test flow.

### Q5. What is the difference between hard wait and Playwright auto-wait?

- Hard wait pauses for a fixed time
- Auto-wait waits only as long as needed for actionability or assertion conditions

Auto-wait is preferred.

### Q6. What are the common locator strategies you used?

From this project:

- ID
- class
- attribute
- text
- `getByRole`
- `getByLabel`
- `getByText`
- `getByPlaceholder`
- `frameLocator`

### Q7. How did you handle alerts?

Using the dialog event:

- `page.once('dialog', async dialog => await dialog.dismiss())`

### Q8. How did you handle iframes?

Using `frameLocator()` and then locating elements inside the frame.

### Q9. How did you do data-driven testing?

I stored test data in JSON and iterated through it to create tests using the same reusable flow.

### Q10. What is POM and why did you use it?

POM stands for Page Object Model. I used it to separate page actions from test logic, improve maintainability, and reuse page methods.

### Q11. What are retries, trace, video, and screenshots used for?

- retries help with flaky failures
- trace shows step-by-step execution details
- video helps review failure behavior
- screenshots capture UI state at failure or at key steps

### Q12. How did you do reporting?

I used Playwright HTML reporting and also Allure reporting with `allure-playwright`.

### Q13. What advanced scenario did you automate?

Canvas-based UI inside an iframe, using bounding boxes, coordinate clicks, and visual screenshot comparison.

---

## 14) Short revision notes for each major topic

### Basic syntax

- import `test`, `expect`
- async test function
- use `await` with Playwright actions

### Navigation

- `page.goto(url)`
- `page.title()`

### Input handling

- `fill()`
- keyboard actions
- placeholder locators

### Assertions

- visibility
- text
- checked state
- soft assertions

### Debugging

- `page.pause()`
- UI mode
- codegen
- screenshots
- trace/video on retry

### Complex UI

- date picker loops
- alerts/dialogs
- frames
- drag-and-drop
- canvas automation

### Framework design

- JSON data
- reusable classes
- POM
- object repository
- config separation

### Reporting

- Playwright HTML report
- Allure results
- Allure report generation

---

## 15) Interview-friendly explanation of my learning progression

A strong way to explain this project in an interview:

> I started with basic Playwright tests to understand `test`, `page`, locators, and assertions. Then I automated simple UI controls like forms, checkboxes, radio buttons, and dropdowns. After that I moved into more advanced scenarios like date pickers, alerts, frames, drag-and-drop, screenshots, and keyboard actions. Once I became comfortable with test scripting, I structured the framework using Page Object Model and data-driven testing with JSON. I also explored advanced Playwright config features such as retries, workers, trace, screenshot, video, device emulation, and browser project selection. Finally, I generated execution reports using both Playwright HTML reporting and Allure reporting.

That answer is clean, honest, and directly backed by this repo.

---

## 16) Improvement points to revise before interview

These are not problems to be embarrassed about. They are good revision topics.

- Know when to use `browser` vs `page`
- Know when `expect` should be used directly on a locator instead of a boolean
- Know that after unchecking a checkbox, the assertion should reflect unchecked state
- Know that page classes should contain reusable actions and proper assertions where needed
- Know the difference between learning-time `pause()` usage and production CI usage
- Know that config-level reporter and CLI-level reporter can differ

If an interviewer asks about lessons learned, these make good talking points.

---

## 17) Super-quick last-minute cheat sheet

### Top commands

```bash
npm i -D @playwright/test allure-playwright
npx playwright test
npx playwright test --config playwright.config.js
npx playwright test -g @Validation
npx playwright ui
npx playwright codegen www.gmail.com
npx playwright test --reporter=line,allure-playwright
```

### Top concepts

- browser / context / page
- locators
- assertions
- auto-waiting
- dialogs
- frames
- screenshots
- POM
- JSON test data
- retries / workers
- HTML report / Allure report

### Strong real examples from this project

- Swag Labs end-to-end purchase flow
- Date picker automation with loop logic
- Alert and iframe handling
- Screenshot capture
- Canvas automation inside iframe
- Multi-browser config

---

## 18) Best files to mention in interview from this repo

If asked to show or talk through your work, these are the best files:

1. `e2e/example.spec.js` → basic concepts
2. `e2e/DatePicker.spec.js` → dynamic component handling
3. `e2e/Project/Alerts.spec.js` → alerts + frames
4. `e2e/Project/TestWithScreenshot.spec.js` → screenshots
5. `e2e/Project/SwagLabs.spec.js` → end-to-end business flow
6. `e2e/Project/SwagLabs-POM.spec.js` → POM + data-driven testing
7. `e2e/Project/PageObjectModel/*.js` → framework design
8. `playwright.config1.js` → advanced configuration
9. `e2e/GamingUI/canvas-iframe.spec.js` → advanced UI automation
10. `allure-results/` and `allure-report/` → reporting knowledge

---

## 19) Final summary

This project is good interview material because it demonstrates:

- beginner-to-advanced Playwright learning path
- practical UI automation scenarios
- debugging and reporting knowledge
- framework organization with POM
- data-driven testing
- cross-browser and artifact configuration
- visual and canvas automation

For interview preparation, the strongest story is:

**I did not only run tests; I learned Playwright from setup, locator strategies, assertions, component handling, reporting, framework design, and advanced UI cases.**

---

## 20) Personal one-line intro for interview

Use this if needed:

> I built and practiced a Playwright automation project where I covered core web automation, reusable page object design, JSON-driven test execution, multi-browser configuration, debugging with UI mode/codegen, and reporting through both Playwright HTML and Allure.
