import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import Layout from "./Layout";
import NftItem from "../component/NftItem";

export default class Buy implements View {

    private container: DomNode;

    private klayDisplay: DomNode;
    private amountDisplay: DomNode;

    constructor() {
        Layout.current.title = msg("BUY_TITLE");
        Layout.current.content.append(this.container = el(".buy-view",
            el("h1", "Buy / Buyback"),
            el("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }),
            el(".selector-container",
                this.klayDisplay = el("p", "... KLAY"),
                this.amountDisplay = el("p", "... EA"),
                el(".select",
                    el("a.disable", "Kronos"),
                    el("hr"),
                    el("a.disable", "Supernova"),
                    el("hr"),
                    el("a", "Public"),
                ),
            ),
            el(".input-container",
                el("input", { placeholder: msg("BUY_INPUT") }),
                el("a", msg("BUY_NFT_BUTTON")),
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
