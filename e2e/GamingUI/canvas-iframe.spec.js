import { test, expect } from "@playwright/test";

test("Gaming-Level Canvas Automation on Real Website", async ({ page }) => {

  // Step 1: Navigate to REAL canvas-in-iframe site
  const slotGameUrl = process.env.SLOT_GAME_URL || "https://your-slot-url.example/game";
  if (
    slotGameUrl.includes("example-slot-site.com") ||
    slotGameUrl.includes("your-slot-url.example")
  ) {
    throw new Error(
      "Set a real SLOT_GAME_URL before running this test (current value is a template URL)."
    );
  }
  await page.goto(slotGameUrl);

  // Step 2: Select the first iframe containing the canvas
  const frame = page.frameLocator("iframe").first();

  // Step 3: Locate the canvas inside iframe
  const canvas = frame.locator("canvas");
  await expect(canvas).toBeVisible();

  // Step 4: Get canvas bounding box (like game viewport)
  const box = await canvas.boundingBox();
  if (!box) {
    throw new Error("Canvas bounding box not available. Ensure canvas is visible and rendered.");
  }

  // Simulated gaming UI button zones (canvas has no DOM)
  const SPIN_BUTTON = {
    x: box.x + box.width * 0.88,   // right-bottom region
    y: box.y + box.height * 0.80
  };

  const BET_BUTTON = {
    x: box.x + box.width * 0.15,   // left-bottom region
    y: box.y + box.height * 0.80
  };

  // Step 5: "Increase Bet" — simulating slot bet button click
  await page.mouse.click(BET_BUTTON.x, BET_BUTTON.y);
  await page.waitForTimeout(500);

  // Step 6: "SPIN" — simulating slot spin button click
  await page.mouse.click(SPIN_BUTTON.x, SPIN_BUTTON.y);

  // Step 7: Simulate reel spin time (3–5 seconds typical)
  await page.waitForTimeout(3500);

  // Step 8: Visual verification of the game after "spin"
  await expect(canvas).toHaveScreenshot("slot-spin-result.png");

  // OPTIONAL Gaming-Level Validation:
  // Check pixel color in region = reel stop simulation
  const pixelData = await frame.evaluate(() => {
    const c = document.querySelector("canvas");
    const ctx = c.getContext("2d");
    // sample pixel from hypothetical reel area
    return ctx.getImageData(100, 50, 1, 1).data;
  });

  console.log("Sample Pixel Data:", pixelData);
});