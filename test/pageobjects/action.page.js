const Page = require('./page');
class ActionPage extends Page {


    
    get markModelButton () { return $("//span[normalize-space()='Marke & Modell']") }
    get volswagenButton () { return $("//ul[@class='list___2iBtR']//input[@value='Volkswagen']") }
    get golfButton () { return $("//input[@value='Golf']") }
    get basicButton () { return $("//span[normalize-space()='Basic']") }
    get bisButton () { return $("//select[@data-qa-selector='select-mileage-to']") }
    get bis25kButton () { return $('//select[@data-qa-selector="select-mileage-to"]//option[@value="2"][contains(text(),"25.000 km")]') }
    get viewedvolswagenButton () { return $("//button[normalize-space()='Marke: Volkswagen']") }
    get viewedGolfButton () { return $("//button[normalize-space()='Modell: Golf']") }
    get viewedKilometersButton () { return $("//button[normalize-space()='Kilometer: Bis 25.000 km']") }
    get acceptCookies () { return $('//div[@class="actions___elpML"]//button[@class="button___2R6qU size-sm___3TKQS default___1FRAY"]') }

    clickacceptCookies() { 
        this.acceptCookies.click();
    }
    clickmarkModelButton() { 
        this.markModelButton.click();
    }
    clickvolswagenButton() { 
        this.volswagenButton.click();
    }
    clickgolfButton() { 
        this.golfButton.click();
    }

    clickbasicButton() { 
        this.basicButton.click();
    }
    clickbisButton() { 
        this.bisButton.click();
    }
    clickbis25kButton() { 
        this.bis25kButton.click();
    }















    open () {
        return super.open('de/search/');
    }
}

module.exports = new ActionPage();    