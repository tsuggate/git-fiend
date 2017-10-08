

export type NodeId = 'set' | 'change';

export interface NodePosition {
   x: number;
   y: number;
}

export interface VNodeI {
   id: NodeId;
   position: NodePosition;
}

export type CommitType = 'commit' | 'merge';


export interface Commit {
   hash: string;
   author: string;
   date: number;
   message: string;
   branch: string;
}

