/**
 * mixin helper function.
 *
 * @author Y3G
 */


export type Constructible<T> = {
  new (...args: any[]): T
}

export type C<T> = Constructible<T>

export type Mixin<M> = <T>(superclass: Constructible<T>) => Constructible<T & M>

export type With<T> = {
  with<M> (m: Mixin<M>) : Constructible<T & M>
  with<M, N> (m: Mixin<M>, n: Mixin<N>) : Constructible<T & M & N>
  with<M, N, O> (m: Mixin<M>, n: Mixin<N>, o: Mixin<O>) : Constructible<T & M & N & O>
  with<M, N, O, P> (m: Mixin<M>, n: Mixin<N>, o: Mixin<O>, p: Mixin<P>) : Constructible<T & M & N & O & P>
  with<M, N, O, P, Q> (m: Mixin<M>, n: Mixin<N>, o: Mixin<O>, p: Mixin<P>, q: Mixin<Q>) : Constructible<T & M & N & O & P & Q>
  with<M, N, O, P, Q, R> (m: Mixin<M>, n: Mixin<N>, o: Mixin<O>, p: Mixin<P>, q: Mixin<Q>, r: Mixin<R>) : Constructible<T & M & N & O & P & Q & R>
}

export class DefaultSuperClass {}

export const $ = (superclass: any) : any => superclass as any

export function mix<T> (superclass?: Constructible<T>) : With<T> {
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
