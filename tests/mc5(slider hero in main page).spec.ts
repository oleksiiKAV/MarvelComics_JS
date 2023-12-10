import { test, expect, Locator } from '@playwright/test';

import { HomePage } from '../page-objects/HomePage'
import { CharactersPage } from '../page-objects/CharastersPage'



test.describe('Automatic switch heroies on the Start page', () => {
  let homePage: HomePage
  let charactersPage: CharactersPage
  let context:any

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

  test('Displays hero cards for "Black Panther," "Spider-Man," and "Hulk"', async ({ page }) => {    
    // Wait for the page to load
    const heroCards = await homePage.page.locator('.hero-slide');

    expect(heroCards).toHaveCount(3);

    const heroCardTitles = await heroCards.locator('.decorate-ellipse-title').all();
    const cardTexts = await Promise.all(heroCardTitles.map(async title => await title.innerText()));    

    const expectedHeroNames = ['BLACK PANTHER', 'HULK', 'SPIDER MAN'];
    expect(cardTexts).toEqual(expectedHeroNames);

    // Additional checks for concise description can be added here
  });

  test('MC5.1 "The Start page should display descriptions and images of the heroes Black Panther, Hulk, and Spider-Man, rotating every 3 seconds."', async ({ }) => {
   
    homePage.VerifyPageIsOpened
    // Wait for the page to load
    const slide =  await homePage.page.locator('div [data-mod="blue"]')
    // const cardTexts = await slide.innerText(); 
    
    // console.log(await homePage.allCharastersButton.)
    const buttonColor = await homePage.page.evaluate(() => {
      const button = document.querySelector('.hero-all-characters-btn');
      if (!button) {
        throw new Error('Button not found');
      }
    
      const styles = window.getComputedStyle(button);
      return styles.backgroundColor;
    });

    const slide1 =  await homePage.page.locator('div [data-mod="green"]')
    const slide2 =  await homePage.page.locator('div [data-mod="bordo"]')
        // console.log(await slide.getProperty("class"))

    await expect(slide).toHaveClass ("hero-slide")
    await expect(buttonColor).toBe('rgb(52, 56, 127)') // blue

    let slideImg= await homePage.page.locator('.image-card-main-img').first()
    let slideImgSrc= await slideImg.getAttribute("src")    
    await expect(slideImg).toBeVisible()
    await expect(slideImgSrc).toContain("panther")

    await expect(slide1).toHaveClass ("hero-slide visually-hidden")
    await expect(slide2).toHaveClass ("hero-slide visually-hidden")
    
    await homePage.wait(4000);

    await expect( slide).toHaveClass ("hero-slide visually-hidden")
    await expect( slide1).toHaveClass ("hero-slide")
     slideImg= await homePage.page.locator('div:nth-child(4) > picture > .image-card-main-img')
     slideImgSrc= await slideImg.getAttribute("src")
    await expect(slideImg).toBeVisible()
    await expect(slideImgSrc).toContain("hulk")
    await expect( slide2).toHaveClass ("hero-slide visually-hidden")
    
    await homePage.wait(4000);

    await expect( slide).toHaveClass ("hero-slide visually-hidden")
    await expect( slide1).toHaveClass ("hero-slide visually-hidden")
    await expect( slide2).toHaveClass ("hero-slide")
    slideImg= await homePage.page.locator('div:nth-child(5) > picture > .image-card-main-img')
    slideImgSrc= await slideImg.getAttribute("src")
   await expect(slideImg).toBeVisible()
   await expect(slideImgSrc).toContain("spider")
    
  });

 
        
      



  

})