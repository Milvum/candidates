import * as Ajv from 'ajv';

import { PartyManager, Party } from './models';
import { ICandidate, IParty, IVoteCategory } from './interfaces';

import * as schema from '../../schema/candidates.json';

// TODO: import this non-hardcoded. Once this module is only used server side, we could use fs for this purpose
import * as election from '../../data/election.json';

const parties: IParty[] = [];

const ajv = new Ajv();
const valid = ajv.validate(schema, election);

if (!valid) {
  console.error(ajv.errors);
}

const mainVoteItem: IVoteCategory = election;

// Temporary for the transfer from Party-Candidate -> VoteItem System
parties.push(new Party(mainVoteItem.name, mainVoteItem.items as ICandidate[]));

export default new PartyManager(parties);

export { ICandidate, IParty } from './interfaces';
