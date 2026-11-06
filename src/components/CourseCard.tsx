
import type { CourseCardProps } from "@/types/course";
import { priceFormatter } from "@/data/courses";
import { Badge } from "@/ui/Badge";
import { Card } from "@/ui/Card";


const levelLabels={
    beginner:'Початковий',
    intermediate:'Середній',
    advanced:'Високий'
};


 export function CourseCard({ course, onToggle, onDelete , onToggleFavorite}: CourseCardProps){

    const isFree= course.price===0;
    const priceLabel= isFree ? 'Безкоштовно' : priceFormatter.format(course.price);
  return(
    <Card>
        <div className="course-card__badges">
            
            <Badge >{levelLabels[course.level]}</Badge>
              {isFree && <Badge tone="success">Безкоштовно</Badge>}
           
        </div>
        <h3 className="course-card__title">{course.title}</h3>
        <p   className="course-card__teacher">Викладач: {course.teacher}</p>
        <p className="course-card__description">{course.description ?? 'Опис курсу відсутній'}</p>
        <div className="course-card__footer">
            <span className="course-card__lessons">{course.lessons} уроків</span>
            <strong className="course-card__price">{priceLabel}</strong>
        </div>
        <div className="course-card__actions">
          <button 
            type="button"
            aria-pressed={course.isFavorite}
            onClick={()=>onToggleFavorite(course.id)}>{course.isFavorite ? 'Прибрати з обраного' : 'Додати в обране'}</button>
            <button 
            type="button"
            aria-pressed={course.isPublished}
            onClick={()=>onToggle(course.id)}>{course.isPublished ? 'Приховати' : 'Опублікувати'}
            </button>
            <button     type="button"  onClick={()=>onDelete(course.id)}>Видалити</button>
          
        </div>
    </Card>
  )
}
      
