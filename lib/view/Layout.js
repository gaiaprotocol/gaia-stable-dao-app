"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const MobileMenu_1 = __importDefault(require("../component/shared/menu/MobileMenu"));
const PCMenu_1 = __importDefault(require("../component/shared/menu/PCMenu"));
const UserInfo_1 = __importDefault(require("../component/shared/menu/UserInfo"));
class Layout {
    constructor() {
        Layout.current = this;
        let select;
        skydapp_browser_1.BodyNode.append((this.container = (0, skydapp_browser_1.el)(".layout", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".nav", (0, skydapp_browser_1.el)(".logo", (0, skydapp_browser_1.el)("a", { href: "/" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/img/img-logo-none-text.png", alt: "gaia stable dao logo" }))), new PCMenu_1.default(), (0, skydapp_browser_1.el)(".right", select = (0, skydapp_browser_1.el)("select.language-select", (0, skydapp_browser_1.el)("option", "νκ΅­μ΄ π°π· ", { value: "ko" }), (0, skydapp_browser_1.el)("option", "English πΊπΈ ", { value: "en" }), {
            change: () => {
                skydapp_browser_1.BrowserInfo.changeLanguage(select.domElement.value);
            },
        }), new UserInfo_1.default(), (0, skydapp_browser_1.el)("a.menu-button", (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/icn-menu.svg", alt: "menu" }), {
            click: (event, button) => {
                const rect = button.rect;
                new MobileMenu_1.default({ left: rect.right - 170, top: rect.bottom }).appendTo(skydapp_browser_1.BodyNode);
            },
        })))), (0, skydapp_browser_1.el)("main", (this.content = (0, skydapp_browser_1.el)(".content"))), (0, skydapp_browser_1.el)("footer", (0, skydapp_browser_1.el)(".footer-container", (0, skydapp_browser_1.el)(".sns", (0, skydapp_browser_1.el)("a.opensea", { href: "https://opensea.io/collection/gaia-stable-dao", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/icn-opensea.svg" })), (0, skydapp_browser_1.el)("a.discord", { href: "https://discord.com/invite/SjM4meh3hd", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/icn-discord.svg" })), (0, skydapp_browser_1.el)("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/icn-twitter.svg" })), (0, skydapp_browser_1.el)("a.gitbook", { href: "https://gaiaprotocol.notion.site/Gaia-Stable-DAO-879aa42859b4407a990602be267183e5", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/shared/icn/icn-gitbook.svg" }))), (0, skydapp_browser_1.el)(".link-tree", (0, skydapp_browser_1.el)("a.kronos", "Gaia Genesis", { href: "https://app.gaiagenesis.org/", target: "_blank" }), (0, skydapp_browser_1.el)(".hr"), (0, skydapp_browser_1.el)("a.supernova", "Gaia Supernova", { href: "https://app.gaiasupernova.com/", target: "_blank" }), (0, skydapp_browser_1.el)(".hr"), (0, skydapp_browser_1.el)("a.stableDAO", "Gaia Stable DAO", { href: "https://gaiastabledao.com/", target: "_blank" })), (0, skydapp_browser_1.el)(".copyright", "COPYRIGHT β Gaia Protocol. ALL RIGHTS RESERVED"))))));
        select.domElement.value = skydapp_browser_1.BrowserInfo.language;
    }
    set title(title) {
        document.title = `${title} | Gaia Stable DAO`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map