import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import ViewUtil from "../view/ViewUtil";
import Confirm from "./shared/dialogue/Confirm";
import Prompt from "./shared/dialogue/Prompt";

export default class NftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;

    private id = 0;

    constructor() {
        super(".nft-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el("h3"),
            el("a",
                el("img.send", { src: "/images/shared/icn/icn-send.svg", alt: "send icon" }),
                {
                    click: () => new Prompt(msg("SEND_PROMPT_TITLE"), msg("SEND_PROMPT_DESC"), msg("SEND_PROMPT_BUTTON"), async (to) => {
                        ViewUtil.waitTransactionAndRefresh();
                    }),
                }),
            el("button", msg("BUYBACK_BUTTON"), {
                click: () => new Confirm(msg("BUYBACK_CONFIRM_TITLE"), msg("BUYBACK_CONFIRM_DESC"), msg("BUYBACK_CONFIRM_BUTTON"), () => {

                })
            }),
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/supernova/png/${id}.png`;
        this.imageDisplay.domElement.alt = `supernova ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }

    public delete() {
        super.delete();
    }
}
