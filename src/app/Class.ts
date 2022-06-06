export class Class{

    constructor(
      public id:string,
      public class_name:string,
      public numOfStusents:number,
      public adressInSchool:string,
    ) { }

    public toString(){
      return `class id: ${this.id}, class name: ${this.class_name}, number of students in class: ${this.numOfStusents}, class adress: ${this.adressInSchool}`
    }
  };
  
