import { ICandidate } from './ICandidate';

export interface IParty {
  readonly name: string;
  readonly candidates: ICandidate[];

  getCandidate(name: string): ICandidate | undefined;
  getCandidateAddress(name: string): string | undefined;
}
