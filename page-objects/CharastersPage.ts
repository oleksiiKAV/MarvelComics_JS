import { ElementHandle, Locator,  Page , expect} from '@playwright/test'
import { AbstractPage } from './AbstractPage'
import{charasterPageTitle} from "./consts"

export class CharactersPage extends AbstractPage {
  // readonly page: Page  
  readonly header: Locator
  readonly logo: Locator
  readonly searchBox: Locator
  readonly searchIcon: Locator
  readonly searchAutocomplete: Locator
  readonly backHomeButton: Locator
  readonly gallery: Locator
  readonly galleryItems: Locator
  readonly galleryNotItems: Locator

  constructor(page: Page) {
    // this.page = page
    super(page)
    this.header = page.locator('header')
    this.logo = this.header.locator('.logo-svg')
    this.searchBox = page.locator('.header-input')
    this.searchIcon = page.locator('.header-icon')
    this.searchAutocomplete = page.locator('#search-results')
    this.backHomeButton = page.locator('.back-home-link')
    this.gallery = page.locator('.gallery')
    this.galleryItems = page.locator('.gallery-item')
    this.galleryNotItems = page.locator(".error-item")
  }

  async visit() {
    await this.page.goto('https://oleksiikav.github.io/MarvelComics_JS/page-2.html')
  }

  async getTitle() {
    
    return await this.page.title()
  }
  
  async clickOnBackHomeButton() {
    console.log(await this.backHomeButton.textContent())
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
    
    await this.searchBox.fill(phrase)
    
    // await this.page.keyboard.press('Enter')
  }

  async getGalleryItems(): Promise<ElementHandle[]> {
    await this.page.waitForSelector('.gallery-item');
    return await this.page.$$('.gallery-item');
  }

}
