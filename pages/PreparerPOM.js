var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/PreparerData.xlsx');
var worksheet = workbook.Sheets['Sheet1'];

let PreparerHomepage = function () {
   
   let enterusername = element(by.id("username"));
   let enterpassword = element(by.id("password"));
   let enterclick = element(by.id("kc-login"));
   let clickmonth = element(by.xpath("//div[@class='mat-select-arrow']"));
   let clickFeb19 = element(by.xpath("//span[contains(text()," + worksheet['D2'].v + ")]"));
   let clickaccountfilter = element(by.xpath("//div[@class='padding-bottom-0_5']//div[3]//div[3]//span[1]//span[1]"));
   let enterinaccountfilter = element(by.xpath("//div[@class='ag-filter-body']//input[@placeholder='Filter...']"));
   let clickonworkitem = element(by.xpath("//div[contains(text(),'"+worksheet['F3'].v+"')]"));
   let clickrecontab = element(by.xpath("//a[@class='mat-tab-link mat-button ng-star-inserted']//span[@class='mat-button-wrapper'][contains(text(),'Recon')]"));
   let selectcolumns = element(by.xpath('/html[1]/body[1]/app-root[1]/main[1]/div[1]/div[1]/div[1]/div[2]/mat-drawer-container[1]/mat-drawer-content[1]/app-dashboard[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/app-recon[1]/div[1]/div[1]/app-trade-payable-recon[1]/div[1]/div[1]/div[1]/app-recon-landing[1]/div[1]/span[1]/span[1]/recon-details-table[1]/app-gl-sl-table[1]/div[1]/div[2]/app-table-grid[1]/table[1]/thead[1]/tr[1]/th[10]/button[1]/span[1]/app-icon[1]/img[1]'));
   let clickstatuscolumn = element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Status')]"));
   let clickjournalcolumn =element(by.xpath("//span[@class='mat-option-text'][contains(text(),'Journal Description')]"));
   let clickonfirstpencil = element(by.xpath('/html[1]/body[1]/app-root[1]/main[1]/div[1]/div[1]/div[1]/div[2]/mat-drawer-container[1]/mat-drawer-content[1]/app-dashboard[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/app-recon[1]/div[1]/div[1]/app-trade-payable-recon[1]/div[1]/div[1]/div[1]/app-recon-landing[1]/div[1]/span[1]/span[1]/recon-details-table[1]/app-gl-sl-table[1]/div[1]/div[2]/app-table-grid[1]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/button[1]/span[1]/app-icon[1]/img[1]'));
   let enteropenitembalance = element(by.xpath("//input[@id='mat-input-3']"));
   let clickonopenitemsubmit = element(by.xpath("//span[contains(text(),'SUBMIT')]"));
   let clickonvalidateandsubmit = element(by.xpath("//span[contains(text(),' Validate & Submit ')]"));
   let clickonrefresh = element(by.xpath("//mat-icon[contains(text(),' refresh')]"));
   let clickonsubmit=element(by.xpath("//span[contains(text(),'SUBMIT')]"));
   this.get = function (url) {

      browser.get(url);

   };

   this.enterusername1 = function (username) {

      enterusername.sendKeys(username);

   }

   this.enterpassword1 = function (password) {

      enterpassword.sendKeys(password);

   }

   this.enterclick1 = function (click) {

      enterclick.click(click);

   }

   this.clickmonth1 = function (clkmn) {

      clickmonth.click(clkmn);
   }

   this.clickFeb191 = function (clkfeb19) {

      clickFeb19.click(clkfeb19);
   }

   this.clickaccountfilter1 = function (clkaccfilter) {

      clickaccountfilter.click(clkaccfilter);

   }

   this.enterinaccountfilter1 = function (entaccfilter) {

      enterinaccountfilter.sendKeys(entaccfilter);

   }

   this.clickonworkitem1 = function (clkwrkitem) {

      clickonworkitem.click(clkwrkitem);
   }

   this.clickrecontab1 = function (clkrecon) {

      clickrecontab.click(clkrecon);
   }

   this.selectcolumns1 = function () {

      selectcolumns.click();
   }

   this.clickstatuscolumn1 = function (clkstatus) {

      return  clickstatuscolumn;

   }

   this.clickjournalcolumn1 = function (clkjournal) {

       return clickjournalcolumn;

   }

   this.clickonfirstpencil1 = function (clkfirstpencil) {

      clickonfirstpencil.click(clkfirstpencil);

   }

   this.enteropenitembalance1 = function (enteropenitem) {

      enteropenitembalance.sendKeys(enteropenitem);

   }

   this.clickonopenitemsubmit1 = function (clkopenitemsubmit) {

      clickonopenitemsubmit.click(clkopenitemsubmit);

   }

   this.clickonvalidateandsubmit1 = function (clkvalidateandsubmit) {

      clickonvalidateandsubmit.click(clkvalidateandsubmit);
   }

   this.clickonrefresh1 = function (clkrefresh) {

      clickonrefresh.click(clkrefresh);

   }

   this.clickonsubmit1 = function(clksubmit){

      clickonsubmit.click(clksubmit);
   }

   

};



module.exports = new PreparerHomepage();