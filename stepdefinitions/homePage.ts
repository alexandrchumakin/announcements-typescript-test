import { browser } from "protractor";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given(/^I am on ss.com search page$/, async () => {
      await expect(browser.getTitle()).to.eventually.equal("SS.COM - Announcements");
});
