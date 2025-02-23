/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface TraderJoeVeJoeInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment;
    'boostedMasterChef()': FunctionFragment;
    'burnFrom(address,uint256)': FunctionFragment;
    'decimals()': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setBoostedMasterChefJoe(address)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'boostedMasterChef'
      | 'burnFrom'
      | 'decimals'
      | 'mint'
      | 'name'
      | 'owner'
      | 'renounceOwnership'
      | 'setBoostedMasterChefJoe'
      | 'symbol'
      | 'totalSupply'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'boostedMasterChef', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'burnFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mint', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setBoostedMasterChefJoe', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'boostedMasterChef', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBoostedMasterChefJoe', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'Burn(address,uint256)': EventFragment;
    'Mint(address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'UpdateBoostedMasterChefJoe(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateBoostedMasterChefJoe'): EventFragment;
}

export interface BurnEventObject {
  account: string;
  value: BigNumber;
}
export type BurnEvent = TypedEvent<[string, BigNumber], BurnEventObject>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface MintEventObject {
  beneficiary: string;
  value: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface UpdateBoostedMasterChefJoeEventObject {
  user: string;
  boostedMasterChef: string;
}
export type UpdateBoostedMasterChefJoeEvent = TypedEvent<[string, string], UpdateBoostedMasterChefJoeEventObject>;

export type UpdateBoostedMasterChefJoeEventFilter = TypedEventFilter<UpdateBoostedMasterChefJoeEvent>;

export interface TraderJoeVeJoe extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TraderJoeVeJoeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    boostedMasterChef(overrides?: CallOverrides): Promise<[string]>;

    burnFrom(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    mint(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    setBoostedMasterChefJoe(
      _boostedMasterChef: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  boostedMasterChef(overrides?: CallOverrides): Promise<string>;

  burnFrom(
    _from: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  mint(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  setBoostedMasterChefJoe(
    _boostedMasterChef: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    boostedMasterChef(overrides?: CallOverrides): Promise<string>;

    burnFrom(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBoostedMasterChefJoe(_boostedMasterChef: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Burn(address,uint256)'(account?: PromiseOrValue<string> | null, value?: null): BurnEventFilter;
    Burn(account?: PromiseOrValue<string> | null, value?: null): BurnEventFilter;

    'Mint(address,uint256)'(beneficiary?: PromiseOrValue<string> | null, value?: null): MintEventFilter;
    Mint(beneficiary?: PromiseOrValue<string> | null, value?: null): MintEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'UpdateBoostedMasterChefJoe(address,address)'(
      user?: PromiseOrValue<string> | null,
      boostedMasterChef?: null,
    ): UpdateBoostedMasterChefJoeEventFilter;
    UpdateBoostedMasterChefJoe(
      user?: PromiseOrValue<string> | null,
      boostedMasterChef?: null,
    ): UpdateBoostedMasterChefJoeEventFilter;
  };

  estimateGas: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    boostedMasterChef(overrides?: CallOverrides): Promise<BigNumber>;

    burnFrom(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    setBoostedMasterChefJoe(
      _boostedMasterChef: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    boostedMasterChef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnFrom(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    setBoostedMasterChefJoe(
      _boostedMasterChef: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
