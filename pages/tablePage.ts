import { $, ElementFinder } from "protractor";

export class TablePageObject {
    public firstAnnouncement: ElementFinder
    public addToFav: ElementFinder
    public memo: ElementFinder
    public homeLabel: ElementFinder

    constructor() {
        this.firstAnnouncement = $("input[type='checkbox']");
        this.addToFav = $("#a_fav_sel");
        this.memo = $("#mnu_fav_id");
        this.homeLabel = $("img[class='page_header_logo']")
    }
}
