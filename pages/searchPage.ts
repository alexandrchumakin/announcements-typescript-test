import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public transportCars: ElementFinder
    public audiCars: ElementFinder
    public electronicsPhones: ElementFinder
    public applePhones: ElementFinder

    constructor() {
        this.transportCars = $("#mtd_97");
        this.audiCars = $("#ahc_103");
        this.electronicsPhones = $("#mtd_14025");
        this.applePhones = $("#ahc_26729")
    }
}
