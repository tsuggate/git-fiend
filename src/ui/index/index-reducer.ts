

export type IndexAction = DoNothing;

export interface DoNothing {
   type: 'NOTHING';
}

export interface State {

}

export function indexReducer(s: State, action: IndexAction): State {
   switch (action.type) {
      case 'NOTHING':
         return s;
      default:
         return s;
   }
}