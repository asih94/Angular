import { Class } from "src/app/Class";
import Person from "src/app/Person";
import grades from "./grades";


export class Pupil extends Person{
    static id: string | null;

    constructor( 
        public id: string,
        public fullName: string,
        public age: number,
        public city: string,
        public image: string,
        public classes: Class[],
        public grades: grades[]
        ) 
      {
        super(id, fullName, age, city, image);
    }

    public avg(): number {
      var count: number = 0;        
          for (const grade of this.grades) {
              count += grade.grade;
          }        
      return count/this.grades.length;
  }


  };
  
  export default Pupil;
  