export default class TestAutomationPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.pageTitle = page.locator('h1', { hasText: 'Automation Testing Practice' });
    this.guiElementsLink = page.locator('a', { hasText: 'GUI Elements' });
    this.genderRadio = page.locator('label[for="male"]');
    this.dayCheckboxes = page.locator('input.form-check-input[type="checkbox"]');
    this.countryDropdown = page.locator('#country');
    this.colorDropdown = page.locator('#colors');

    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('input[placeholder="Enter Phone"]');
    this.addressTextarea = page.locator('#textarea');
  }

  async validateTitlePage() {
    await this.pageTitle.waitFor();
  }

  async verifyGuiElementsLinkVisible() {
    await this.guiElementsLink.waitFor();
  }

  async fillCustomerFormDetails(
    userName,
    userMailId,
    userPhone,
    userAddress,
    genderText,
    countryValue,
    color,
    minDays = 4
  ) {

    await this.nameInput.fill(userName);
    await this.emailInput.fill(userMailId);
    await this.phoneInput.fill(userPhone);
    await this.addressTextarea.fill(userAddress);

    await this.page.locator(`label[for="${genderText.toLowerCase()}"]`).click();
    await this.countryDropdown.selectOption(countryValue);
    await this.colorDropdown.selectOption(color);

    const count = await this.dayCheckboxes.count();
    const selectedIndexes = [...Array(count).keys()]
      .sort(() => 0.5 - Math.random())
      .slice(0, minDays);

    for (const index of selectedIndexes) {
      await this.dayCheckboxes.nth(index).check();
    }
  }
}
