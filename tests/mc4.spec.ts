import { test, expect } from '@playwright/test'

import { HomePage } from '../page-objects/HomePage'
import { CharactersPage } from '../page-objects/CharastersPage'


test.describe('MC4 Header', () => {
  let homePage: HomePage
  let charactersPage: CharactersPage
  let context

  test.beforeEach(async ({ page }) => {
    // context = await browser.newContext();
    // const page = await context.newPage();

    homePage = new HomePage(page)
    charactersPage = new CharactersPage(page)
    await homePage.visit()
  })
  // test.afterEach(async () => {
  //   await context.close();
  // });

  test("MC4.1 The application's header shall have a consistent appearance across both pages.",
    async ({ page }) => {
      // await homePage.header.screenshot({animations: 'disabled', path: 'header.png' })
      const header1 = await homePage.header.innerHTML()
      
      await homePage.clickOnAllCharastersButton();
      charactersPage.VerifyPageIsOpened
      // await page.keyboard.press('Home');
      const header2 = await charactersPage.header.innerHTML()
      
      // expect(await charactersPage!.header.screenshot({animations: 'disabled'})).toMatchSnapshot('header.png')
      expect(header1).toEqual(header2)   
    });

  test("MC4.2 The application's header shall be consistently visible on the screen at all times.", async ({ page }) => {
    await page.keyboard.press('End');
    expect(homePage.isHeaderVisible).toBeTruthy();
  });

  test("MC4.3 The application's logo shall be prominently displayed within the header.", async ({ page }) => {
    expect(homePage.isLogoVisible).toBeTruthy();
  });

  test("MC4.4 Clicking on the logo shall trigger navigation back to the initial page.", async ({ page }) => {
    await homePage.allCharastersButton.click()
    charactersPage.VerifyPageIsOpened()
    await charactersPage.logo.click()
    homePage.VerifyPageIsOpened
  });

  test("MC4.5 The header shall include a search field for character name searches.", async ({ page }) => {
    homePage.wait(5000)
    expect(homePage.isSearchInputVisible).toBeTruthy();
  });

  test("MC4.6 The search field shall provide an autocomplete feature, suggesting potential matches as users type.", async ({ page }) => {
    // await homePage.VerifyPageIsOpened()
    await homePage.searchFor('iro')
   await page.waitForTimeout(4000)
 
    const datalistOptions = await page.evaluate(() => {
      const options = document.querySelectorAll<HTMLOptionElement>('#search-results option');
      return Array.from(options).map(option => option.value);
    });
    // await page.pause() 
    // console.log(datalistOptions); 
    expect(datalistOptions.length).toBeGreaterThan(0);
  });

  test("MC4.7 When users press the Enter key while in the search field, the application shall open the next page, displaying search results.", async ({ page }) => {
    // await homePage.VerifyPageIsOpened()
    await homePage.searchFor('iro')
   await page.waitForTimeout(4000)
 
    const datalistOptions = await page.evaluate(() => {
      const options = document.querySelectorAll<HTMLOptionElement>('#search-results option');
      return Array.from(options).map(option => option.value);
    });
    page.keyboard.press('Enter');
    // console.log(datalistOptions); 
    charactersPage.VerifyPageIsOpened;

  });
 

  test.only("MC4.8 When users click the search icon while in the search field, the application shall open the next page, displaying search results.", async ({ page }) => {
     
    page.keyboard.press('End');
    
    console.log(await page.locator(".hero-all-characters-btn").textContent())
    await homePage.allCharastersButton.click()
    page.keyboard.press('End');
    
    
    page.keyboard.press('Home');
    await page.pause()
    page.keyboard.press('End');
    // const galleryList = await page.$$('.gallery-item');
    const galleryList = await charactersPage.getGalleryItems();

// Print the count of <li> elements in the .gallery list
console.log('Number of <li> elements in the gallery:', galleryList.length);

// Loop through the <li> elements and log their text content
for (let i = 0; i < galleryList.length; i++) {
  const liText = await galleryList[i].textContent();
  console.log(`Text content of <li> element ${i + 1}:`, liText);
}
 });

})