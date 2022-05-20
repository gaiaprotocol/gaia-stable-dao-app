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

interface PauserRoleMockInterface extends ethers.utils.Interface {
  functions: {
    "onlyPauserMock()": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "removePauser(address)": FunctionFragment;
    "renouncePauser()": FunctionFragment;
    "addPauser(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onlyPauserMock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removePauser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePauser",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addPauser", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "onlyPauserMock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renouncePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;

  events: {
    "PauserAdded(address)": EventFragment;
    "PauserRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
}

export class PauserRoleMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PauserRoleMockInterface;

  functions: {
    onlyPauserMock(overrides?: CallOverrides): Promise<[void]>;

    "onlyPauserMock()"(overrides?: CallOverrides): Promise<[void]>;

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removePauser(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removePauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renouncePauser(overrides?: Overrides): Promise<ContractTransaction>;

    "renouncePauser()"(overrides?: Overrides): Promise<ContractTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onlyPauserMock(overrides?: CallOverrides): Promise<void>;

  "onlyPauserMock()"(overrides?: CallOverrides): Promise<void>;

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isPauser(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removePauser(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removePauser(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renouncePauser(overrides?: Overrides): Promise<ContractTransaction>;

  "renouncePauser()"(overrides?: Overrides): Promise<ContractTransaction>;

  addPauser(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPauser(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    onlyPauserMock(overrides?: CallOverrides): Promise<void>;

    "onlyPauserMock()"(overrides?: CallOverrides): Promise<void>;

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removePauser(account: string, overrides?: CallOverrides): Promise<void>;

    "removePauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renouncePauser(overrides?: CallOverrides): Promise<void>;

    "renouncePauser()"(overrides?: CallOverrides): Promise<void>;

    addPauser(account: string, overrides?: CallOverrides): Promise<void>;

    "addPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    PauserAdded(account: string | null): EventFilter;

    PauserRemoved(account: string | null): EventFilter;
  };

  estimateGas: {
    onlyPauserMock(overrides?: CallOverrides): Promise<BigNumber>;

    "onlyPauserMock()"(overrides?: CallOverrides): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removePauser(account: string, overrides?: Overrides): Promise<BigNumber>;

    "removePauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renouncePauser(overrides?: Overrides): Promise<BigNumber>;

    "renouncePauser()"(overrides?: Overrides): Promise<BigNumber>;

    addPauser(account: string, overrides?: Overrides): Promise<BigNumber>;

    "addPauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onlyPauserMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "onlyPauserMock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPauser(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removePauser(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removePauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renouncePauser(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renouncePauser()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}