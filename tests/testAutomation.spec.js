import { test, expect } from '@playwright/test';
import TestAutomationPage from '../pages/testAutomationPage';
import testData from '../test-data/testAutomationPageData.json';

test.describe('Automation Testing Practice', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(testData.URL);
  });

  test('Validate the Automation Testing Practice URL', async ({ page }) => {
    await expect(page).toHaveURL(testData.URL);
  });

  test('Validate page title', async ({ page }) => {
    const testAutomationPage = new TestAutomationPage(page);
    await testAutomationPage.validateTitlePage();
  });

  test('Verify GUI Elements link visibility', async ({ page }) => {
    const testAutomationPage = new TestAutomationPage(page);
    await testAutomationPage.verifyGuiElementsLinkVisible();
  });

  test('Fill customer form with valid details', async ({ page }) => {
    const testAutomationPage = new TestAutomationPage(page);

    await testAutomationPage.fillCustomerFormDetails(
      testData.USER_NAME,
      testData.USER_MAIL_ID,
      testData.USER_PHONE_NO,
      testData.USER_ADDRESS,
      testData.GENDER_CHECK_BOX,
      testData.COUNTRY_NAME,
      testData.COLOUR
    );
  });
});
