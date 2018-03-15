import {
  IParty,
  ICandidate,
} from '../interfaces';

export default class Party implements IParty {
  public readonly name: string;
  public readonly candidates: ICandidate[];

  public constructor(name: string, candidates: ICandidate[]) {
    this.name = name;
    this.candidates = candidates;
  }

  /* Obtain a candidate based on their name */
  public getCandidate(name: string): ICandidate | undefined {
    return this.candidates.find((optional) => optional.name === name);
  }

  /* Obtain the address of a candidate based on their name */
  public getCandidateAddress(name: string): string | undefined {
    const candidate = this.getCandidate(name);

    if (candidate === undefined) {
      return;
    }

    let address = candidate.address;

    // ensure each address starts with 0x
    if (!address.startsWith('0x')) {
      address = `0x${address}`;
    }

    return address;
  }
}
