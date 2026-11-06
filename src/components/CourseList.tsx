import type { Course, CourseCardProps } from "@/types/course";
import { CourseCard } from "@/components/CourseCard";

interface CourseListProps extends Omit<CourseCardProps, 'course'>{
    courses: readonly Course[];
}

export function CourseList({ courses, onToggle, onDelete, onToggleFavorite }: CourseListProps){
    if(courses.length===0){
        return (
        <p role="status" className="course-list__empty">Курси відсутні</p>
        )
    }
    return(
        <ul className="course-list">
            {courses.map(course=>(
                <li key={course.id} className="course-list__item">
                    <CourseCard course={course} onToggle={onToggle} onDelete={onDelete} onToggleFavorite={onToggleFavorite}/>
                </li>
            ))}
        </ul>
    )
}
