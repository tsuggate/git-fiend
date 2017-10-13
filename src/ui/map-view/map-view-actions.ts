import {Commit} from 'nodegit';


export type MapViewAction = LoadCommits;

export interface LoadCommits {
   type: 'LOAD_COMMITS';
   commits: Commit[];
}

