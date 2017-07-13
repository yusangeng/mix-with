/**
 * @file mixin helper function
 * @author Y3G
 */

class DummyBaseClass {}

/**
 * mixin工具函数
 *
 * @export
 * @param {Function} superclass 基类
 * @returns mixer对象, 拥有with方法用来mixin
 */
export default function mix (superclass) {
  const cls = superclass || DummyBaseClass
  
  if (typeof cls !== 'function') {
    throw new TypeError('superclass is NOT a class or null.')
  }

  return {
    with (...mixins) {
      return (mixins || []).reduce((prev, mixin) => mixin(prev), cls)
    }
  }
}
