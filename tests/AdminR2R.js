let Homepage = require('../pages/Homepage');
var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/SeleniumData.xlsx');
var worksheet = workbook.Sheets['Sheet2'];
describe('Validate Admin Home Page', function () {
    it('Admin Page', function () {
        browser.ignoreSynchronization = true;
        //browser.get(worksheet['C2'].v);

        Homepage.get(worksheet['C2'].v);
        browser.manage().window().maximize();
        browser.sleep(10000);
        //element(by.id("username")).sendKeys(worksheet['A2'].v);
        Homepage.enterusername1(worksheet['A2'].v);
        //element(by.id("password")).sendKeys(worksheet['B2'].v);
        Homepage.enterpassword1(worksheet['B2'].v);
        browser.executeScript('window.scrollTo(0,200);');
        //element(by.id("kc-login")).click();
        Homepage.enterclick1();
        browser.getTitle().then(function (title) {

            console.log(title);

        });
        browser.sleep(30000);
        element(by.id('mat-input-1')).sendKeys(worksheet['D2'].v);
        browser.sleep(1000);
        element(by.xpath("//mat-select[@id='mat-select-1']//div[@class='mat-select-arrow']")).click();
        browser.sleep(1000);
        element(by.xpath("//span[contains(text(),'" + worksheet['G5'].v + "')]")).click();
        browser.sleep(1000);
        browser.actions().mouseMove(element(by.xpath("//mat-select[@id='mat-select-2']//div[@class='mat-select-arrow']"))).click().perform();
        browser.sleep(3000);
        element(by.xpath("//span[contains(text(),'" + worksheet['F2'].v + "')]")).click();
        browser.sleep(3000);
        element(by.xpath("//span[contains(text(),'" + worksheet['F3'].v + "')]")).click();
        browser.sleep(3000);
        browser.actions().mouseMove(element(by.xpath("//mat-select[@id='mat-select-3']//div[@class='mat-select-arrow-wrapper']"))).click().perform();
        browser.actions().mouseMove(element(by.xpath("//mat-select[@id='mat-select-3']//div[@class='mat-select-arrow-wrapper']"))).click().perform();
        //element(by.xpath("//mat-select[@id='mat-select-3']//div[@class='mat-select-arrow-wrapper']")).click();
        browser.sleep(5000);
        element(by.xpath("//span[contains(text(),'" + worksheet['I2'].v + "')]")).click();
        browser.sleep(3000);
        element(by.xpath("//span[contains(text(),'CREATE')]")).click();
        browser.sleep(5000);
        element(by.xpath("//th[1]//div[1]//mat-icon[1]")).click();
        element(by.xpath("//input[@id='mat-input-2']")).sendKeys(+worksheet['J2'].v);
        element(by.xpath("//span[contains(text(),'Apply')]")).click();
        browser.sleep(10000);

    });
});