import { Class } from "src/app/Class";
import Person from "src/app/Person";


export class Teacher extends Person{
    static id: string | null;

    constructor( 
        public id: string,
        public fullName: string,
        public age: number,
        public city: string,
        public image: string,
        public subject: string[],
        public classes: Class[],
        public seniority: number,
        public numOfHours: number,
        public hourSalary:number
        ) 
      {
        super(id, fullName, age, city, image);
    }
  };
  
  export default Teacher;
  