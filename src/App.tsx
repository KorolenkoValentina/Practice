import { useState } from "react";
import type { Course, CourseDraft } from "@/types/course";
import { CourseList } from "@/components/CourseList";
import { courses as initialCourses, emptyDraft } from "@/data/courses";


export default function App() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [search, setSearch] = useState("");
  const [onlyPublished, setOnlyPublished] = useState(false);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [draft, setDraft] = useState<CourseDraft>(emptyDraft);
  const [formErrors, setFormErrors] = useState("");
  const query = search.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(query);
    const matchesPublished = !onlyPublished || course.isPublished;
    const matchesFavorites = !onlyFavorites || course.isFavorite;
    return matchesSearch && matchesPublished && matchesFavorites;
  });
  const favoriteCount = courses.filter((course) => course.isFavorite).length;
  const publishedCount = courses.filter((course) => course.isPublished).length;
  const freeCount = courses.filter((course) => course.isPublished && course.price === 0).length;
 const publishedCourses = courses.filter(course => course.isPublished);
 const freeCourses = publishedCourses.filter(course => course.price === 0).length;
  return (
    <main className="app">
      <div className="app__container">
        <header className="app__header">
          <p className="app_label">навчальна програма</p>
          <h1 className="app__title">Список курсів</h1>
          <p className="app__description">Оберіть курс і почніть навчання з практичних прикладів</p>
          <div className="app__statistics">
            <span>Доступні курси: {publishedCourses.length}</span>
            {freeCourses > 0 && (
            <span>Безкоштовні курси: {freeCourses}</span>)}
          </div>
        </header>
        <section>
          <h2 id="courses-heading" className="visually-hidden">Доступні Курси</h2>
          <CourseList courses={publishedCourses} />
        </section>
      
      </div>
      </main>
  );
}


