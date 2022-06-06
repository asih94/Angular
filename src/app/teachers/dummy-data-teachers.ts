import { Teacher } from "./Teacher";
import { Class } from "../Class";


var t1:Teacher=new Teacher("234561","Amit Sasson",34,"Haifa",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQ9TGcWNNWsRzdrRJYyK92HvvWd5KHdCFLg&usqp=CAU",
["History", " Biology"],[new Class("1","History",40,"9.1.97"),],5,300,30);

var t2:Teacher=new Teacher("264798","Noa Shemesh",29,"jerusalem",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32xQbCt33dzpkHhN_MatDHcHITovf_6vmkw&usqp=CAU",
["Math", " Geometry", " Physics"],[new Class("2","Math",67,"8.3.22"),],2,220,28.5);

var t3:Teacher=new Teacher("345612","Aviad Cohen ",49,"Petah-Tikwa",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2obAUsbOAb2HSihiUadDLYRL0CZO5KmIYcQ&usqp=CAU",
[" Gmara", " Torha"],[new Class("3","Kodesh",118,"7.2.15"),],23,350,45);

var t4:Teacher=new Teacher("2415654","Elinor Halperin",36,"Shoham",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvZDEPHr-rHXcp8dZ2jTx4qcigmBy-Qunvw&usqp=CAU",
["English"],[new Class("4","language",33,"55.3.4"),],14,274,42);

var t5:Teacher=new Teacher("2126497","Moti Haviv",53,"Tel-Aviv",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SZaJU1S1A-7Hit1fFY21KZnnasJ4luFRtA&usqp=CAU",
["sport"],[new Class("5","sport",49,"54.2.6"),],30,125,38);

var t6:Teacher=new Teacher("2231647","Miryam Levi",51,"Ariel",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6G1QQurnwzxJ5dcLIjc1oiouLrlFrsH4rg&usqp=CAU",
["Theater" ],[new Class("6","show ",40,"51.2.4"),],23,130,45);


export const teachers = [t1,t2,t3,t4,t5,t6];



