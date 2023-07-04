/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
  export namespace Demo {
    export function show(): void {
      const a: FactoryMethodPattern.AbstractProduct | undefined =
        FactoryMethodPattern.ProductFactory.createProduct('A');
      if (a !== undefined) {
        console.log(a.method());
      }

      const b: FactoryMethodPattern.AbstractProduct | undefined =
        FactoryMethodPattern.ProductFactory.createProduct('B');
      if (b !== undefined) {
        console.log(b.method());
      }
    }
  }
}
