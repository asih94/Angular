import Person from "src/app/Person";


export class Employee extends Person{
  static id: string | null;
  static salaryForHour: number;
  static numOfHourMonth: number;
  static employee: any;

    constructor( 
        public id: string,
        public fullName: string,
        public age: number,
        public city: string,
        public image: string,
        public workName: string,
        public numOfHourMonth: number,
        public salaryForHour: number
        ) 
      {
        super(id, fullName, age, city, image);
    }


  };
  
  export default Employee;
  