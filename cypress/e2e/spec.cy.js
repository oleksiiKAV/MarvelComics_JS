
describe('template spec', () => {

  it('MC1 The application shall be implemented as a two-page web application (Start page and Character page). MC2 The initial page of the application shall contain an "All characters" button, which, when clicked, navigates to the next page.', () => {
    cy.visit('https://oleksiikav.github.io/MarvelComics_JS/index.html')
    cy.get('.hero-all-characters-btn').as('AllCharacters').should('be.visible')
    cy.get('@AllCharacters').click()
    cy.url().should('include','MarvelComics_JS/page-2.html')
    cy.get('.back-home-link').should('be.visible')

  })

})