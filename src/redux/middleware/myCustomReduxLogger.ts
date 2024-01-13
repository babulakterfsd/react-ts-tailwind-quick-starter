/* eslint-disable @typescript-eslint/no-explicit-any */
export const myCustomReduxLogger =
  (store: any) => (next: any) => (action: any) => {
    next(action);
  };
