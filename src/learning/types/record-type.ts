//
//
//

namespace RecordType {
  interface Person {
    name: string;
    age: number;
  }

  const person: Record<number, Person> = {
    1: {
      name: 'John',
      age: 30,
    },
  };

  console.log(person);
}
