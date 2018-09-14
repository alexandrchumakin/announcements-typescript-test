import { browser, protractor } from "protractor";
import { TablePageObject } from "../pages/tablePage";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const table: TablePageObject = new TablePageObject();

When(/^I select the first announcement$/, async () => {
    await table.firstAnnouncement.click();
});

When(/^I add to favorites$/, async () => {
    browser.wait(protractor.ExpectedConditions.presenceOf(table.addToFav), 3000);
    await table.addToFav.click();
    browser.switchTo().alert().accept();
});

Then(/^I see memo with "(.*?)"$/, async (text) => {
    browser.wait(protractor.ExpectedConditions.presenceOf(table.memo), 3000);
    await expect(table.memo.getText()).to.eventually.contains(text);
});


Then(/^I return to home page$/, async () => {
    browser.wait(protractor.ExpectedConditions.presenceOf(table.homeLabel), 3000);
    await table.homeLabel.click();
});
