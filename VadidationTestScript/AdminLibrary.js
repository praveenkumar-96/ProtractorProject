var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/AdminValidationTestScript.xlsx');
var worksheet = workbook.Sheets['Sheet1'];
describe('validating Library Tab', function () {
    it('Admin Credentials', function () {
        browser.ignoreSynchronization = true;
        browser.get(worksheet['C2'].v);
        browser.manage().window().maximize();
        element(by.id('username')).sendKeys(worksheet['A2'].v);
        element(by.id('password')).sendKeys(worksheet['B2'].v);
        browser.executeScript('window.scrollTo(0,200);');
        element(by.id("kc-login")).click();
    });

    it('Admin Library validation', function () {
        browser.sleep(20000);
        element(by.xpath("//span[contains(text(),' Library ')]")).click();
        var expectedText = 'Work Unit Blueprints Library';
        element(by.xpath("//h3[contains(text(),'Work Unit Blueprints Library')]")).getText().then(function (actualText) {

            if (expectedText === actualText) {

                console.log('title is matching');
            }

            else {

                console.log('title is not matching');
            }
        });
    });
    it('validating row per page is enabled', function () {

        //Rows per page is enabled
        browser.sleep(5000);
        element(by.xpath("//mat-select[@id='mat-select-6']//div[@class='mat-select-arrow']")).isEnabled().then(function (Enabled) {

            if (Enabled) {

                console.log('Rows per page is Enabled');
            }
            else {

                console.log('Rows per page is not Enabled');
            }

        });
    });

    it('Rows per page is Displayed', function () {
        //Rows per page is Displayed
        browser.sleep(5000);
        element(by.xpath("//mat-select[@id='mat-select-6']//div[@class='mat-select-arrow']")).isDisplayed().then(function (Enabled) {

            if (Enabled) {

                console.log('Rows per page is Displayed');
            }
            else {

                console.log('Rows per page is not Displayed');
            }

        });
    });

    it('Checking all options in drop down', function () {
        browser.sleep(5000);
        var alloptions = element(by.xpath("//mat-select[@id='mat-select-6']//div[@class='mat-select-arrow']")).click();

        alloptions.isDisplayed().then(function(alloptionsdisplayed){
 
            console.log(alloptionsdisplayed);

            if(alloptionsdisplayed){

                console.log('All options are displayed');
            }
            else
            {
                console.log('not displayed')
            }

        })
    });

 it('default no of row per page',function(){
  browser.sleep(5000);
  element(by.xpath("//mat-select[@id='mat-select-6']//div[@class='mat-select-arrow'")).click();


});



});