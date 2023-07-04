namespace FlyweightPattern {
  export interface Flyweight {
    operation(s: string): void;
  }

  export class ConcreteFlyweight implements Flyweight {
    public operation(s: string): void {
      console.log('`operation` of ConcreteFlyweight', s, ' is being called!');
    }
  }

  export class FlyweightFactory {
    private fliesMap: { [s: string]: Flyweight } = <any>{};

    constructor() {}

    public getFlyweight(key: string): Flyweight {
      if (this.fliesMap[key] === undefined || null) {
        this.fliesMap[key] = new ConcreteFlyweight();
      }
      return this.fliesMap[key];
    }
  }
}
