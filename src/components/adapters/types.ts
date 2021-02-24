import {DaoConstants} from './enums';

export type Adapters = {
  adapterId: string;
  adapterName: DaoConstants;
  adapterDescription: string;
};

export type AddAdapterArguments = [
  // `adapterId`
  string,
  // `adapterAddress`
  string,
  // `acl`
  number
];

export type ConfigurationArguments = [
  // `dao`
  string,
  // `proposalId`
  string,
  // `keys`
  string[],
  // `values`
  number[]
];

export type GuildKickArguments = [
  // `dao`
  string,
  // `proposalId`
  string,
  // `memberToKick`
  string,
  // `data`
  string
];

export type RagequitArguments = [
  // `dao`
  string,
  // `sharesToBurn`
  number,
  // `lootToBurn`
  number,
  // `tokens`
  string[]
];

export type FinancingArguments = [
  // `dao`
  string,
  // `proposalId`
  string,
  // `applicant`
  string,
  // `token`
  string,
  // `amount`
  number,
  // `details`
  string
];

export type ManagingArguments = [
  // `dao`
  string,
  // `proposalId`
  string,
  // `adapterId`
  string,
  // `adapterAddress`
  string,
  // `keys`
  string[],
  // `values`
  number[],
  // `_flags`
  number
];

export type AdapterFormArguments =
  | ConfigurationArguments
  | GuildKickArguments
  | RagequitArguments
  | FinancingArguments
  | ManagingArguments
  | undefined;

export type AddAdapterFunction =
  | 'createFinancingRequest'
  | 'createAdapterChangeRequest'
  | 'configureDao'
  | 'submitConfigurationProposal'
  | 'submitKickProposal'
  | 'ragequit';

// type AclFlag =  // @todo typify its deps
//   | 'ADD_ADAPTER'
//   | 'ADD_EXTENSION'
//   | 'JAIL_MEMBER'
//   | 'PROCESS_PROPOSAL'
//   | 'SUBMIT_PROPOSAL'
//   | 'SPONSOR_PROPOSAL'
//   | 'SET_CONFIGURATION'
//   | 'REMOVE_ADAPTER'
//   | 'REMOVE_EXTENSION'
//   | 'NEW_MEMBER'
//   | 'UNJAIL_MEMBER'
//   | 'UPDATE_DELEGATE_KEY';
