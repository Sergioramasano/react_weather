export const increment = (payload:number) => ({ type: 'ADD', payload });
export const decrement = (payload:number) => ({ type: 'DELETE', payload })
export const reset = () => ({ type: 'RESET', null: null })