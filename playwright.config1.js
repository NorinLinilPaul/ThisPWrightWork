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
  retries: 3, // Retry failed tests up to 3 times
  workers: 1, // Run tests sequentially to avoid interference in canvas automation
  timeout: 40*1000, //40s
  expect:{
    timeout: 50*1000 //50s ;only for assertions, not for the entire test. It specifies the maximum time to wait for an assertion to pass before considering it a failure. This is useful for handling cases where the expected condition may take some time to be met, such as waiting for an element to appear on the page or for a certain state to be reached. By setting a timeout for assertions, you can ensure that your tests fail gracefully if the expected conditions are not met within a reasonable timeframe, rather than hanging indefinitely.
  },
  
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  projects:[{

name: "Chromium Project",

use: {
    browserName: 'chromium',
    headless: false, //to make chrome headless false, so that we can see the browser while running the test
    slowMo: 500, // 0.5 second pause between each action for easy viewing
    screenshot: "only-on-failure", // Capture screenshots only when a test fails, 
    trace: "on-all-retries", // Record trace only when retrying a failed test,
    video: "retry-with-video", // Record video only when retrying a failed test,
    // viewport: { width:800, height: 720 }, // Set a consistent viewport size for website testing, especially important for canvas-based games to ensure elements are in expected positions
    ...devices["Galaxy Tab S4 landscape"], // Use a specific device profile for mobile testing, which can help identify responsive design issues and ensure the application works well on different screen sizes and orientations.
    permissions:["geolocation"], // Grant geolocation permission to the browser context, which is essential for testing features that rely on location data, such as maps or location-based services, ensuring that tests can simulate user interactions that require geolocation access without manual intervention.  
    ignoreHTTPSErrors: true // Ignore HTTPS errors, which can be useful when testing against development or staging environments with self-signed certificates, allowing tests to proceed without being blocked by security warnings.
  
  
  }
},
{
name: "Firefox Project",

use: {
    browserName: 'firefox',
    headless: false, //to make firefox headless false, so that we can see the browser while running the test
    slowMo: 500, // 0.5 second pause between each action for easy viewing
  }

}
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
 // Enables screenshot diff for Canvas automation

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

