/**
 * utils for typescript.
 *
 * @author yusangeng
 */

export type ConstructorArgTypes<T> = T extends new (...args: infer Args) => any ? Args : never

export type Constructor<Target extends object = object, Args extends any[] = any[]> = new (...args: Args) => Target

export type MergeElementTypes<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First & MergeElementTypes<Rest>
  : unknown
