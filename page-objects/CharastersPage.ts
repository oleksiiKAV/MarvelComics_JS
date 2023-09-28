import { Locator,  Page , expect} from '@playwright/test'

import{charasterPageTitle} from "./consts"

export class CharactersPage {
  readonly page: Page
  readonly header: Locator
  readonly logo: Locator
  readonly searchBox: Locator
  readonly backHomeButton: Locator
  readonly gallery: Locator

  constructor(page: Page) {
    this.page = page
    this.header = page.locator('header')
    this.logo = this.header.locator('.logo-svg')
    this.searchBox = page.locator('#searchQuery')
    this.backHomeButton = page.locator('.back-home-link')
    this.gallery = page.locator('.gallery-item')
  }

  async visit() {
    await this.page.goto('https://oleksiikav.github.io/MarvelComics_JS/page-2.html')
  }

  async getTitle() {
    return await this.page.title()
  }
  
  async clickOnBackHomeButton() {
    await this.backHomeButton.click()
  }

  async VerifyPageIsOpened()
  {
      await this.backHomeButton.waitFor();
      
      await expect(await this.getTitle()).toBe(charasterPageTitle);
  
  }

  async clickOnLogo() {
    await this.logo.click()
  }

  async searchFor(phrase: string) {
    await this.searchBox.type(phrase)
    await this.page.keyboard.press('Enter')
  }
}
