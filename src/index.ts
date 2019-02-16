/**
 * mixin helper function.
 *
 * @author Y3G
 */


export type Ctor<T = {}> = new (...args: any[]) => T

type Instance<C> = C extends new (...args: any[]) => infer R ? R : any
type Ret<C> = C extends (...args: any[]) => infer R ? R : any
type IR<M> = Instance<Ret<M>>

export type Mixer<T extends Ctor> = {
  with<M> (mixin: M) : Ctor<Instance<T> & IR<M>>
  with<M1, M2> (m1: M1, m2: M2) : Ctor<Instance<T> & IR<M1> & IR<M2>>
  with<M1, M2, M3> (m1: M1, m2: M2, m3: M3) : Ctor<Instance<T> & IR<M1> & IR<M2> & IR<M3>>
  with<M1, M2, M3, M4> (m1: M1, m2: M2, m3: M3, m4: M4) : Ctor<Instance<T> & IR<M1> & IR<M2> & IR<M3> & IR<M4>>
  with<M1, M2, M3, M4, M5> (m1: M1, m2: M2, m3: M3, m4: M4, m5: M5) : Ctor<Instance<T> & IR<M1> & IR<M2> & IR<M3> & IR<M4> & IR<M5>>
  with<M1, M2, M3, M4, M5, M6> (m1: M1, m2: M2, m3: M3, m4: M4, m5: M5, m6: M6) : Ctor<Instance<T> & IR<M1> & IR<M2> & IR<M3> & IR<M4> & IR<M5> & IR<M6>>
}

export class DefaultSuperClass {}

export function mix<T extends Ctor> (superclass?: T) : Mixer<T> {
  const clazz = superclass || DefaultSuperClass
  
  if (typeof clazz !== 'function') {
    throw new TypeError('superclass is NOT a class or null.')
  }

  return {
    with (...mixins : any[]) {
      return mixins.reduce((prev, mixin) => mixin(prev), clazz)
    }
  }
}

export default mix
