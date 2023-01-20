import { Course } from "./course";
export class CoursePackage {
    id: bigint;
    packageName: string;
    packageDuration: string;
    createDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    course : Course;
}