

export type ToolId = 'set' | 'change';

export interface ToolData {
   id: ToolId;
}

export interface ToolsState {
   tools: ToolData[];
}
