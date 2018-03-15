import IVoteItem from './IVoteItem';

export default interface IVoteCandidate extends IVoteItem {
  readonly address: string;
}
