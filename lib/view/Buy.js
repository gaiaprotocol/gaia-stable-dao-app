"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const NftItem_1 = __importDefault(require("../component/NftItem"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const GaiaKronosContract_1 = __importDefault(require("../contracts/GaiaKronosContract"));
const GaiaStableDAOContract_1 = __importDefault(require("../contracts/GaiaStableDAOContract"));
const GaiaStableDAOOperatorV2Contract_1 = __importDefault(require("../contracts/GaiaStableDAOOperatorV2Contract"));
const GaiaSupernovaContract_1 = __importDefault(require("../contracts/GaiaSupernovaContract"));
const oUSDCContract_1 = __importDefault(require("../contracts/oUSDCContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Buy {
    constructor() {
        this.tabType = "public";
        this.ticket = 0;
        this.price = ethers_1.BigNumber.from(0);
        this.count = ethers_1.BigNumber.from(1);
        this.tokenIds = [];
        this.tabStore = new skydapp_browser_1.Store("tab-store");
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("BUY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".buy-view", (0, skydapp_browser_1.el)("h1", "Buy / Buyback"), (0, skydapp_browser_1.el)("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }), (0, skydapp_browser_1.el)(".selector-container", this.salesDisplay = (0, skydapp_browser_1.el)("p", "SALES: ... EA"), this.ticketDisplay = (0, skydapp_browser_1.el)("p", "TICKET: ... ???"), this.priceDisplay = (0, skydapp_browser_1.el)("p", "PRICE: ... oUSDC"), this.totalDisplay = (0, skydapp_browser_1.el)("p", "TOTAL: ... oUSDC"), (0, skydapp_browser_1.el)(".select", this.kronosTab = (0, skydapp_browser_1.el)("a.disable", "Kronos", { click: () => this.loadTab("kronos") }), (0, skydapp_browser_1.el)("hr"), this.supernovaTab = (0, skydapp_browser_1.el)("a.disable", "Supernova", { click: () => this.loadTab("supernova") }), (0, skydapp_browser_1.el)("hr"), this.publicTab = (0, skydapp_browser_1.el)("a.disabled", "Public", { click: () => this.loadTab("public") }))), (0, skydapp_browser_1.el)(".input-container", this.notice = (0, skydapp_browser_1.el)("p"), (0, skydapp_browser_1.el)("input", {
            placeholder: (0, skydapp_browser_1.msg)("BUY_INPUT"),
            change: (event, input) => {
                this.count = ethers_1.BigNumber.from(input.domElement.value);
                this.loadTotal();
            },
        }), (0, skydapp_browser_1.el)(".button-container", this.approveButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_APPROVE_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    if ((await oUSDCContract_1.default.allowance(address, GaiaStableDAOOperatorV2Contract_1.default.address)).eq(0)) {
                        await oUSDCContract_1.default.approve(GaiaStableDAOOperatorV2Contract_1.default.address, ethers_1.constants.MaxUint256);
                    }
                    else {
                        new Alert_1.default("??????", "?????? ?????? ?????? ???????????????.");
                    }
                }
            },
        }), this.buyButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_NFT_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    if ((await oUSDCContract_1.default.allowance(address, GaiaStableDAOOperatorV2Contract_1.default.address)).eq(0)) {
                        new Alert_1.default("??????", "oUSDC ?????? ????????? ???????????????.");
                    }
                    else if (await GaiaStableDAOContract_1.default.isMinter(GaiaStableDAOOperatorV2Contract_1.default.address) !== true) {
                        new Alert_1.default("??????", "?????? ???????????? ????????????.");
                    }
                    else {
                        let nft = ethers_1.constants.AddressZero;
                        if (this.tabType === "kronos") {
                            nft = GaiaKronosContract_1.default.address;
                        }
                        if (this.tabType === "supernova") {
                            nft = GaiaSupernovaContract_1.default.address;
                        }
                        if (this.count.toNumber() > 10) {
                            new Alert_1.default("??????", "??? ?????? ?????? 10????????? ????????? ???????????????.");
                        }
                        else if (this.count.toNumber() > this.ticket) {
                            new Alert_1.default("??????", `?????? ?????? ?????? ????????? ${this.ticket}??? ?????????.`);
                        }
                        else {
                            await GaiaStableDAOOperatorV2Contract_1.default.mintStableDAO(this.count, nft);
                            new Alert_1.default("?????? ??????!", "Gaia Stable DAO ????????? ??????????????????. ???????????????!");
                            ViewUtil_1.default.waitTransactionAndRefresh();
                        }
                    }
                }
            },
        })), (0, skydapp_browser_1.el)("a.usdc", (0, skydapp_browser_1.msg)("BUY_USDC_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167", target: "_blank" })), (0, skydapp_browser_1.el)(".warning-container", (0, skydapp_browser_1.el)("p", "???????????? Mesh Swap?????? ???????????? ??????????????? ???????????? ????????? ????????? ????????? ????????? ??????????????????.")), (0, skydapp_browser_1.el)(".nft-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("MY_NFT_TITLE")), this.nftList = (0, skydapp_browser_1.el)("section"))));
        this.interval = setInterval(() => this.loadSales(), 1000);
        if (this.tabStore.get("type") === undefined) {
            this.loadTab("public");
        }
        else {
            this.loadTab(this.tabStore.get("type"));
        }
        this.loadNFTsDebouncer.run();
        Wallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadSales() {
        if (await GaiaStableDAOContract_1.default.isMinter(GaiaStableDAOOperatorV2Contract_1.default.address) !== true) {
            this.notice.empty().appendText("?????? ???????????? ????????????.");
        }
        else {
            this.notice.empty().appendText("?????? ??????????????????.");
        }
        const sales = await GaiaStableDAOContract_1.default.totalSupply();
        this.salesDisplay.empty().appendText(`SALES: ${sales} EA`);
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            if ((await oUSDCContract_1.default.allowance(address, GaiaStableDAOOperatorV2Contract_1.default.address)).eq(0)) {
                this.approveButton.deleteClass("disabled");
                this.buyButton.addClass("disabled");
            }
            else {
                this.approveButton.addClass("disabled");
                this.buyButton.deleteClass("disabled");
            }
        }
    }
    async loadTab(type) {
        this.tabStore.set("type", this.tabType = type);
        this.kronosTab.addClass("disable");
        this.supernovaTab.addClass("disable");
        this.publicTab.addClass("disable");
        this.ticketDisplay.style({ display: "block" });
        this.ticketDisplay.empty();
        this.ticket = 999999;
        if (type === "kronos") {
            this.kronosTab.deleteClass("disable");
            this.price = ethers_1.utils.parseUnits("1200", 6);
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                const balance = (await GaiaKronosContract_1.default.balanceOf(address)).toNumber();
                const minted = (await GaiaStableDAOOperatorV2Contract_1.default.mintedAmountWithGaiaKronos(address)).toNumber();
                this.ticket = balance < minted ? 0 : balance - minted;
                this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} ???`);
            }
        }
        if (type === "supernova") {
            this.supernovaTab.deleteClass("disable");
            this.price = ethers_1.utils.parseUnits("1250", 6);
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                const balance = (await GaiaSupernovaContract_1.default.balanceOf(address)).toNumber();
                const minted = (await GaiaStableDAOOperatorV2Contract_1.default.mintedAmountWithGaiaSupernova(address)).toNumber();
                this.ticket = balance < minted ? 0 : balance - minted;
                this.ticketDisplay.empty().appendText(`TICKET: ${this.ticket} ???`);
            }
        }
        if (type === "public") {
            this.publicTab.deleteClass("disable");
            this.price = ethers_1.utils.parseUnits("1300", 6);
            this.ticketDisplay.style({ display: "none" });
        }
        this.priceDisplay.empty().appendText(`PRICE: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.price, 6))} oUSDC`);
        this.loadTotal();
    }
    async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.count.mul(this.price), 6))} oUSDC`);
    }
    async loadNFTs() {
        this.nftList.empty();
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract_1.default.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append((0, skydapp_browser_1.el)("p.empty", "?????? ???????????? Stable DAO??? ????????????."));
            }
            const promises = [];
            this.tokenIds = [];
            skydapp_common_1.SkyUtil.repeat(balance, (i) => {
                const promise = async (index) => {
                    const item = new NftItem_1.default().appendTo(this.nftList);
                    const tokenId = (await GaiaStableDAOContract_1.default.tokenOfOwnerByIndex(address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
        }
        const promises = [];
        await Promise.all(promises);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Buy;
//# sourceMappingURL=Buy.js.map