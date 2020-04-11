let PreparerHomepage = require('../pages/PreparerPOM');
var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/PreparerData.xlsx');
var worksheet = workbook.Sheets['Sheet1'];
describe('Validate Preparer Home Page', function () {
     
        beforeEach(function()  {
            browser.ignoreSynchronization = true;
            browser.get(worksheet['C2'].v);
            browser.waitForAngularEnabled(false);

        });


    it('Admin Page', function () {
        browser.manage().window().maximize();
        //browser.executeScript("document.body.style.zoom='100%'");
        browser.sleep(2000);
        /*enter username*/
        PreparerHomepage.enterusername1(worksheet['A2'].v);
        /*enter passwor*/
        PreparerHomepage.enterpassword1(worksheet['B2'].v);
        browser.executeScript('window.scrollTo(0,200);');
        /*enter click*/
        PreparerHomepage.enterclick1();
        browser.getTitle().then(function (title) {

            console.log(title);

        });
        browser.sleep(15000);
        /*Click on Month dropdown*/
        PreparerHomepage.clickmonth1();
        browser.sleep(3000);
        /*click on Month Feb19*/
        PreparerHomepage.clickFeb191();
        browser.sleep(10000);
        /*Click on Account drop down*/
        PreparerHomepage.clickaccountfilter1();
        /*enter on Filter*/
        PreparerHomepage.enterinaccountfilter1(worksheet['E3'].v);
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        browser.sleep(3000);
        /*click on workunut*/
        PreparerHomepage.clickonworkitem1();
        browser.sleep(7000);
        /*click on recon tab*/
        PreparerHomepage.clickrecontab1();
        browser.sleep(5000);
        /*click on select column*/
        PreparerHomepage.selectcolumns1();
        browser.sleep(3000); 
        /*click on status*/
        browser.actions().mouseMove(PreparerHomepage.clickstatuscolumn1()).click().perform();
        //browser.actions().mouseMove(PreparerHomepage.clickstatuscolumn1()).click().perform();
        //PreparerHomepage.clickstatuscolumn1();
        /*click on journal*/
        browser.sleep(3000);
        browser.actions().mouseMove(PreparerHomepage.clickjournalcolumn1()).click().perform();
        //browser.actions().mouseMove(PreparerHomepage.clickjournalcolumn1()).click().perform();
        //PreparerHomepage.clickjournalcolumn1();
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        browser.sleep(4000);
        /*click on first pencil1*/
        PreparerHomepage.clickonfirstpencil1();
        /*enter open item1*/
        browser.sleep(3000);
        PreparerHomepage.enteropenitembalance1(worksheet['G2'].v);
        /*click on submit*/
        PreparerHomepage.clickonsubmit1();
        browser.sleep(4000);
        /*click on validate and submit*/
        PreparerHomepage.clickonvalidateandsubmit1();
        browser.sleep(5000);
        /*click on refresh*/
        PreparerHomepage.clickonrefresh1();
        browser.sleep(30000);
        /*click on submit*/
        //element(by.xpath("//span[contains(text(),'SUBMIT')]")).click();

    });
});
     
      
