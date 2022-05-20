/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MinterRoleInterface extends ethers.utils.Interface {
  functions: {
    "addMinter(address)": FunctionFragment;
    "renounceMinter()": FunctionFragment;
    "isMinter(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceMinter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isMinter", values: [string]): string;

  decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;

  events: {
    "MinterAdded(address)": EventFragment;
    "MinterRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
}

export class MinterRole extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MinterRoleInterface;

  functions: {
    addMinter(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addMinter(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceMinter(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceMinter()"(overrides?: Overrides): Promise<ContractTransaction>;

    isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isMinter(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addMinter(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addMinter(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceMinter(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceMinter()"(overrides?: Overrides): Promise<ContractTransaction>;

  isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isMinter(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addMinter(account: string, overrides?: CallOverrides): Promise<void>;

    "addMinter(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceMinter(overrides?: CallOverrides): Promise<void>;

    "renounceMinter()"(overrides?: CallOverrides): Promise<void>;

    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;

    "isMinter(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    MinterAdded(account: string | null): EventFilter;

    MinterRemoved(account: string | null): EventFilter;
  };

  estimateGas: {
    addMinter(account: string, overrides?: Overrides): Promise<BigNumber>;

    "addMinter(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceMinter(overrides?: Overrides): Promise<BigNumber>;

    "renounceMinter()"(overrides?: Overrides): Promise<BigNumber>;

    isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isMinter(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMinter(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addMinter(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceMinter(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceMinter()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    isMinter(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isMinter(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
