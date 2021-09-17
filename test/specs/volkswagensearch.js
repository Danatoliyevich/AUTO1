const ActionPage = require('../pageobjects/action.page');

describe('check volswagen golf <25000k miles', () => {

    it('should open page and check cookies message', async () => {
        ActionPage.open();
        await browser.pause(5000);
        ActionPage.clickacceptCookies();
        await browser.pause(3000);


        
     });
     it('should click mark and model button', async () => {
        ActionPage.clickmarkModelButton();
        await browser.pause(3000);
        
     });
     it('should chose volkswagen', async () => {
        ActionPage.clickvolswagenButton();
        await browser.pause(3000);
        
     });
     it('should chose golf', async () => {
        ActionPage.clickgolfButton();
        await browser.pause(3000);
        
     });
     it('should click basic button', async () => {
        ActionPage.clickbasicButton();
        await browser.pause(3000);
        
     });
     it('should click Bis button', async () => {
        ActionPage.clickbisButton();
        await browser.pause(3000);
        
     });
     it('should click 25000 km button', async () => {
        ActionPage.clickbis25kButton();
        await browser.pause(3000);
        
     });
     it('should check result', async () => {
        expect(ActionPage.viewedvolswagenButton).toBeDisplayed();
        expect(ActionPage.viewedGolfButton).toBeDisplayed();
        expect(ActionPage.viewedKilometersButton).toBeDisplayed()
        
     });


     
});