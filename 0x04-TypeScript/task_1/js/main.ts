interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // Index signature to allow additional properties
}

class ImpTeacher implements Teacher {
    public readonly firstName: string;
    public readonly lastName: string;
    public fullTimeEmployee: boolean;
    public yearsOfExperience?: number;
    public location: string;

    // Index signature to allow additional properties
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number, additionalProps?: { [key: string]: any }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience) {
            this.yearsOfExperience = yearsOfExperience;
        }
        
        // Assign additional properties if provided
        if (additionalProps) {
            for (const key in additionalProps) {
                if (additionalProps.hasOwnProperty(key)) {
                    this[key] = additionalProps[key];
                }
            }
        }
    }
}

//const teacher = new ImpTeacher("John", "Doe", true, "New York", 10, { contract: true, subject: "Math" });

interface Directors extends Teacher {
  numberOfReports: number;
}


//print teacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};


interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
  public firstName:string
  public lastName:string


  constructor(firstName:string, lastName:string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework():string {
    return 'Currently working'
  }

  displayName():string {
    return this.firstName
  }
}

const student: StudentClassInterface = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
