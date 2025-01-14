/**
 * mixin helper function.
 *
 * @author yusangeng
 */

import { type Constructor } from './type-utils'
import { type Mixer } from './mixer'

export { type Constructor } from "./type-utils";
export { type Mixer } from "./mixer";

class DefaultSuperClass { }

type _MixerType<T> = T extends Constructor ? Mixer<T> : never
type MixerType<T> = T extends undefined ? Mixer<typeof DefaultSuperClass> : _MixerType<T>

export function mix<T extends Constructor>(superclass?: T): MixerType<T> {
  const clazz = superclass || DefaultSuperClass

  if (typeof clazz !== 'function') {
    throw new TypeError('The argument "superclass" of function "mix" should be a class.')
  }

  return {
    with(...mixins: any[]) {
      return mixins.reduce((prev, mixin) => mixin(prev), clazz)
    }
  } as MixerType<T>
}

export function catagory<T extends object, U extends T>(fn: (superclass: Constructor<T>) => Constructor<U>) {
  return fn
}

// 兼容老函数名
export const mixin = catagory

export default mix
