import { useState } from "react";
 
export function CourseDetails() {
    const [isExpanded, setIsExpanded] = useState(false);
 

    return(
        <section>
            <h2>Фундамент React</h2>
            <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls="course-program"
            onClick={()=>{
                setIsExpanded((previous)=>!previous)
            }}>
                {isExpanded ? "Приховати програму курсу" : "Показати програму курсу"}
            </button>
            <div id="course-program" hidden={!isExpanded}>
                <ul>
                    <li>Вступ до React</li>
                    <li>Компоненти та пропси</li>
                    <li>Хуки та стан</li>
                </ul>
            </div>
        </section>
    )}