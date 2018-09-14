import { SearchPageObject } from "../pages/searchPage";
const { When } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();

When(/^I click on "(.*?)" link$/, async (text) => {
    var link = null;
    if (text === "transport > cars") {
      link = search.transportCars;
    } else if (text === "electronics > phones"){
      link = search.electronicsPhones;
    } else if (text === "Audi") {
      link = search.audiCars;
    } else if (text === "Apple") {
      link = search.applePhones;
    }
    await link.click();
});

When(/^I click on Audi link$/, async () => {
    await search.audiCars.click();
});
