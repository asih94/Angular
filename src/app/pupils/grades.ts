export class grades{

    constructor( 
        public subject: string,
        public grade: number
    ) 
      {}

      public toString(){
        return `${this.subject}: ${this.grade}`
      }

  };
  
  export default grades;
  