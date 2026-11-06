import { useState } from "react";
import type { Course, CourseDraft } from "@/types/course";
import { CourseList } from "@/components/CourseList";
import { courses as initialCourses, emptyDraft } from "@/data/courses";
import "@/App.css"

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

 function handleToggleFavorite(id: string) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === id ? { ...course, isFavorite: !course.isFavorite } : course
      )
    );
 }
 function handleTogglePublished(id: string) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === id ? { ...course, isPublished: !course.isPublished } : course
      )
    );
  }

  function handleDeleteCourse(id: string) {
    setCourses((currentCourses) =>
      currentCourses.filter((course) => course.id !== id)
    );
  }
  
  function handleAddCourse(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
   const title= draft.title.trim();
   const price= Number(draft.price);
   if (!title){
      setFormErrors("Назва курсу обов'язкова");
      return;
   }
   if(!draft.price.trim()|| !Number.isFinite(price) || price < 0){
      setFormErrors("Ціна курсу повинна бути додатнім числом");
      return;
   }
   const newCourse: Course = {
      id: crypto.randomUUID(),
      title,
      price,
      teacher:"Викладача ще не призначено",
      level:"beginner",
      lessons:0,
      isPublished: true,
      isFavorite: false,
   };
   setCourses((currentCourses) => [...currentCourses, newCourse]);
   setDraft({...emptyDraft});
   setFormErrors("");
  }

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
            <span>В обраному: {favoriteCount}</span>
            <span>Показано: {visibleCourses.length}</span>
          </div>
        </header>
        <section  className="course-controls" aria-labelledby="add-course-heading">
             <h2 id="add-courses-heading" className="visually-hidden">Додати курс</h2>
             <form className="course-form" onSubmit={handleAddCourse} noValidate>
<label htmlFor="course-title">Назва курсу</label>
<input id="course-title" value={draft.title} onChange={(event)=>setDraft({...draft, title:event.currentTarget.value})}/>
<label htmlFor="course-price">Ціна, грн</label>
<input id="course-price" value={draft.price} type="number" min="0" step="any" onChange={(event)=>setDraft({...draft, price:event.currentTarget.value})}/>
      {formErrors && <p role="alert">{formErrors}</p>}  
      <button type="submit">Додати курс</button>     
             </form>
                </section>
                <section aria-labelledby="course-heading">
          <h2 id="courses-heading" className="visually-hidden">Доступні Курси</h2>
          <div className="course-controls">
            <label htmlFor="course-search">Пошук за назвою</label>
            <input id="course-search"  type="search" value={search} onChange={(event)=>setSearch(event.currentTarget.value)}/>
            <label>
              <input  type="checkbox" checked={onlyPublished} onChange={(event)=>setOnlyPublished(event.currentTarget.checked)}/>
            </label>
              <label>
              <input  type="checkbox" checked={onlyFavorites} onChange={(event)=>setOnlyFavorites(event.currentTarget.checked)}/>
            </label>

          </div>
          <CourseList courses={visibleCourses}  onToggle={handleTogglePublished} onToggleFavorite={handleToggleFavorite} onDelete={handleDeleteCourse}  />
        </section>
      
      </div>
      </main>
  );
}


