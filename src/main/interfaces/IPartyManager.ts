import { ICandidate } from './ICandidate';
import { IParty } from './IParty';

export interface IPartyManager {
  readonly parties: IParty[];

  getPartyNames(): string[];
  getPartyByName(name: string): IParty | undefined;
}
