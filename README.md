# Requirements
MC1 The application shall be implemented as a two-page web application (Start page and Character page).
MC2 The initial page of the application shall contain an "All characters" button, which, when clicked, navigates to the next page.
MC3 The second (Character) page of the application shall include a "BACK HOME" button, allowing users to return to the initial page.
MC4 Header
   MC4.1 The application's header shall have a consistent appearance across both pages.
   MC4.2 The application's header shall be consistently visible on the screen at all times.
   MC4.3 The application's logo shall be prominently displayed within the header.
   MC4.4 Clicking on the logo shall trigger navigation back to the Start page.
   MC4.5 The header shall include a search field for character name searches.
   MC4.6 The search field shall provide an autocomplete feature, suggesting potential matches as users type.
   MC4.7 When users press the Enter key while in the search field on the Start page, the application shall open the Character page, displaying search results.
   MC4.8 When users click the search icon while in the search field on the Start page, the application shall open the Character page, displaying search results.
   MC4.9 When users press the Enter key while in the search field on the Character page, the application shall display search results on the page.
   MC4.10 When users click the search icon while in the search field on the Character page, the application shall display search results on the page.
MC5 The Start page should display descriptions and images of the heroes Black Panther, Hulk, and Spider-Man, rotating every 3 seconds.
## Tests
   mc1_3.spec.ts - MC1-MC3
   mc4 (header).spec.ts - MC4
   mc5 (slider hero).spec.ts - MC5

