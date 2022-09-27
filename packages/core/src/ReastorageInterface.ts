import { DataOrUpdaterFn } from "./utils/isUpdaterFn";

export type ReastoreageActions<T> = {
  [key: string]: (...args: any[]) => T;
};

export type ActionCreator<T, A> = (
  prev: T
) => A extends ReastoreageActions<T> ? A : never;

export interface ReastorageInterface<T, A> {
  get(): T;
  getInitialValue(): T;
  set(dataOrUpdater: DataOrUpdaterFn<T>): void;
  reset(): void;
  subscribe(listen: (value: T) => void): VoidFunction;
  actions: ReturnType<ActionCreator<T, A>>;
}

export type Compress = "default" | "utf-16" | false;

export interface Options<T, A> {
  storage?: "local" | "session";
  compress?: Compress;
  actions?: ActionCreator<T, A>;
}

export type Listener<T> = (value: T) => void;
