import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";

export default class BuyMetaverseForum implements View {

    private container: DomNode;

    private ticketDisplay: DomNode;
    private priceDisplay: DomNode;
    private salesDisplay: DomNode;

    constructor() {
        Layout.current.title = msg("BUY_TITLE");
        Layout.current.content.append(this.container = el(".buy-view",
            el("h1", "메타포 패스 구매"),
            el("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }),
            el(".selector-container",
                this.salesDisplay = el("p", "SALES: ... EA"),
                this.ticketDisplay = el("p", "TICKET: ... 개"),
                this.priceDisplay = el("p", "PRICE: ... KUSDT"),
            ),
            el(".input-container",
                el("input", { placeholder: msg("BUY_INPUT") }),
                el(".button-container",
                    el("a.disabled", msg("BUY_APPROVE_BUTTON")),
                    el("a", msg("BUY_NFT_BUTTON")),
                ),
                el("a.usdt", msg("BUY_USDT_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167", target: "_blank" }),
            ),
            el(".nft-container",
                el("h2", msg("MY_NFT_TITLE")),
                el("section",
                    // new NftItem(),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
