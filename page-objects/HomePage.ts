import { Locator, Page, expect } from '@playwright/test'

import{homePageTitle} from "./consts"

export class HomePage {
  readonly page: Page
  readonly header: Locator
  readonly logo: Locator
  readonly searchBox: Locator
  readonly searchAutocomplete: Locator
  readonly searchIcon: Locator
  readonly allCharastersButton: Locator
  
  readonly datalistElement: Locator

  constructor(page: Page) {
    this.page = page
    this.header = page.locator('.header')
    this.searchBox = page.locator('.header-input')
    this.searchIcon = page.locator('.header-icon')
    this.searchAutocomplete = page.locator('#search-results')
    this.allCharastersButton = page.locator('.hero-all-characters-btn')
    this.datalistElement =  this.page.locator('search-results')

  }

  async visit() {
    await this.page.goto('https://oleksiikav.github.io/MarvelComics_JS/')
    // await this.page.goto('http://localhost:5173/')
  }

  async isHeaderVisible() {
    return await this.header.isVisible();
  }

  async getTitle() {
    return await this.page.title()
  }

  async clickOnAllCharastersButton() {
    await this.allCharastersButton.click()
  }

  async VerifyPageIsOpened() {
    await this.allCharastersButton.waitFor();

    await expect(await this.getTitle()).toBe(homePageTitle);

  }

  async clickOnLogo() {
    await this.logo.click()
  }

  async isLogoVisible() {
    return await this.logo.isVisible();
  }

  async isSearchInputVisible() {
    return await this.searchBox.isVisible();
  }
  
  async searchFor(phrase: string) {
    
    await this.searchBox.fill(phrase)
    
    // await this.page.keyboard.press('Enter')
  }

  async isDatalistVisible() {
    await this.datalistElement.waitFor()
    return await this.datalistElement.isVisible();
  }

  async getDatalistOptions() {
    return await this.datalistElement.evaluate((datalist) => {
      const options = datalist.querySelectorAll('option');
      return Array.from(options).map(option => option.value);
    });}
 
}
