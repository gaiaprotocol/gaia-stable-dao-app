import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC1155ReceiverMockInterface extends utils.Interface {
    contractName: "ERC1155ReceiverMock";
    functions: {
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "registerInterface(bytes4)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "registerInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "BatchReceived(address,address,uint256[],uint256[],bytes,uint256)": EventFragment;
        "Received(address,address,uint256,uint256,bytes,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BatchReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
}
export declare type BatchReceivedEvent = TypedEvent<[
    string,
    string,
    BigNumber[],
    BigNumber[],
    string,
    BigNumber
], {
    operator: string;
    from: string;
    ids: BigNumber[];
    values: BigNumber[];
    data: string;
    gas: BigNumber;
}>;
export declare type BatchReceivedEventFilter = TypedEventFilter<BatchReceivedEvent>;
export declare type ReceivedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber
], {
    operator: string;
    from: string;
    id: BigNumber;
    value: BigNumber;
    data: string;
    gas: BigNumber;
}>;
export declare type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;
export interface ERC1155ReceiverMock extends BaseContract {
    contractName: "ERC1155ReceiverMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1155ReceiverMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        registerInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "BatchReceived(address,address,uint256[],uint256[],bytes,uint256)"(operator?: null, from?: null, ids?: null, values?: null, data?: null, gas?: null): BatchReceivedEventFilter;
        BatchReceived(operator?: null, from?: null, ids?: null, values?: null, data?: null, gas?: null): BatchReceivedEventFilter;
        "Received(address,address,uint256,uint256,bytes,uint256)"(operator?: null, from?: null, id?: null, value?: null, data?: null, gas?: null): ReceivedEventFilter;
        Received(operator?: null, from?: null, id?: null, value?: null, data?: null, gas?: null): ReceivedEventFilter;
    };
    estimateGas: {
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        onERC1155BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC1155ReceiverMock.d.ts.map