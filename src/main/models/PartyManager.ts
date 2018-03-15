import {
  IParty,
  ICandidate,
  IPartyManager,
} from '../interfaces';

export default class PartyManager implements IPartyManager {
  public readonly parties: IParty[];

  public constructor(parties: IParty[]) {
    this.parties = parties;
  }

  /* Obtain the names of the loaded parties */
  public getPartyNames(): string[] {
    return this.parties.map((party) => party.name);
  }

  /* Obtain a party object based on its name */
  public getPartyByName(name: string): IParty | undefined {
    return this.parties.find((party) => party.name === name);
  }
}
