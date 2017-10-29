import {Commit} from 'nodegit';


export type CommitListAction = LoadCommits | SelectCommit;

export interface LoadCommits {
   type: 'LOAD_COMMITS';
   commits: Commit[];
}

export interface SelectCommit {
   type: 'SELECT_COMMIT';
   commit: Commit;
}

