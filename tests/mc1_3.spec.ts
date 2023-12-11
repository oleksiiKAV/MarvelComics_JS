import { test, expect, BrowserContext } from '@playwright/test';

import { HomePage } from '../page-objects/HomePage'
import { CharactersPage } from '../page-objects/CharastersPage'



test.describe('The application shall have two pages and navigation between them', () => {
  let homePage: HomePage
  let charactersPage: CharactersPage
  let context: BrowserContext

  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    const page = await context.newPage();

    homePage = new HomePage(page)
    charactersPage = new CharactersPage(page)
    await homePage.visit()
  })
  test.afterAll(async () => {
    await context.close();
  });

  test('MC1 The application shall be implemented as a two-page web application (Start page and Character page). MC2 The initial page of the application shall contain an "All characters" button, which, when clicked, navigates to the next page.',
    async ({ page }) => {
      homePage.VerifyPageIsOpened
      await homePage.clickOnAllCharastersButton();
      charactersPage.VerifyPageIsOpened
    });

  test('MC3 The second (Character) page of the application shall include a "BACK HOME" button, allowing users to return to the initial page.', async ({ page }) => {

    await homePage.clickOnAllCharastersButton();
    await expect(charactersPage.backHomeButton).toBeVisible()
    await charactersPage.clickOnBackHomeButton()
    homePage.VerifyPageIsOpened
  });

})