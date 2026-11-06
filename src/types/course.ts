export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export interface Course {
    id: string;
    title: string;
    description?: string;
    teacher: string;
    level: CourseLevel;
    price: number;
    lessons: number;
    isPublished: boolean;
    isFavorite: boolean;
}
export interface CourseDraft{
    title: string;
    price: string;
}
export interface CourseCardProps {
    course: Course;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
}
