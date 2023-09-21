import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 * 
 * const config: PlaywrightTestConfig = {
    timeout : 30000, 
    retries : 0,
    testDir: 'tests/e2e',
    use : {
        headless : true,
        viewport : {width:1200, height: 720},
        actionTimeout : 10000,
        ignoreHTTPSErrors : true,
        video : 'off',
        screenshot: 'only-on-failure',
    },
    projects:[
        {
            name: 'Chromium',
            use: { browserName: 'chromium'},
        },
        // {
        //     name: 'Firefox',
        //     use: { browserName: 'firefox'},
        // },
        // {
        //     name: 'webkit',
        //     use: { browserName: 'webkit'},
        // },
    ] 
}
export default config
 */
export default defineConfig({
  timeout : 60000, 
    retries : 0,
    testDir: 'tests',
    use : {
        headless : true,
        viewport : {width:1200, height: 720},
        actionTimeout : 30000,
        ignoreHTTPSErrors : true,
        video : 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    reporter: 'html',
    projects:[
        {
            name: 'Chromium',
            use: { browserName: 'chromium'},
        },
        // {
        //     name: 'Firefox',
        //     use: { browserName: 'firefox'},
        // },
        // {
        //     name: 'webkit',
        //     use: { browserName: 'webkit'},
        // },
    ] 
});
