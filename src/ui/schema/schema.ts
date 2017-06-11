

export type NodeId = 'set' | 'change';

export interface NodePosition {
   x: number;
   y: number;
}

export interface VNodeI {
   id: NodeId;
   position: NodePosition;
}