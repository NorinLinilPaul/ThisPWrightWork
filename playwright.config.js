// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 40*1000, //40s
  expect:{
    timeout: 50*1000 //50s ;only for assertions, not for the entire test. It specifies the maximum time to wait for an assertion to pass before considering it a failure. This is useful for handling cases where the expected condition may take some time to be met, such as waiting for an element to appear on the page or for a certain state to be reached. By setting a timeout for assertions, you can ensure that your tests fail gracefully if the expected conditions are not met within a reasonable timeframe, rather than hanging indefinitely.
  },
  
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    headless: false, //to make chrome headless false, so that we can see the browser while running the test
    slowMo: 500, // 0.5 second pause between each action for easy viewing
  },

  // /* Configure projects for major browsers */
  // projects: [
    
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

