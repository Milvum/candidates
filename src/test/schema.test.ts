import PartyManager from '../main/';
import { IParty } from '../main/interfaces';
import * as Assert from 'assert';

// Do not remove while no tests are present (we do not want failing pipelines).
describe('Schema', () => {
  it('provides at least one party', () => Assert(PartyManager.getPartyNames().length > 0));

  it('Has more than one candidate per party', () => PartyManager.getPartyNames()
    .map((partyName) => PartyManager.getPartyByName(partyName))
    .forEach((party) => {
      Assert(party !== undefined, `${party} does not exist`);
      Assert(
        (party as IParty).candidates.length > 1,
        `${party} only has ${(party as IParty).candidates.length} mmembers`);
    }));
});
