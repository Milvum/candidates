import IVoteItem from './IVoteItem';

export default interface IVoteCategory extends IVoteItem {
  readonly items: IVoteItem[];
}
