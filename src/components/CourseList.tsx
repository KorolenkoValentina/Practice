import type { Course } from "@/types/course";
import { CourseCard } from "@/components/CourseCard";

interface CourseListProps{
    courses: readonly Course[];
}

export function CourseList({ courses }: CourseListProps){
    if(courses.length===0){
        return (
        <p role="status" className="course-list__empty">Курси відсутні</p>
        )
    }
    return(
        <ul className="course-list">
            {courses.map(course=>(
                <li key={course.id} className="course-list__item">
                    <CourseCard course={course}/>
                </li>
            ))}
        </ul>
    )
}
