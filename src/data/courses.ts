import type { Course, CourseDraft } from "@/types/course";
export const courses: Course[] = [
    {
        id: 'js',
        title: 'JavaScript',
        description: 'Курс з JavaScript',
        teacher: 'John Doe',
        level: 'beginner',
        price: 1000,
        lessons: 12,
        isPublished: true,
        isFavorite: false
    },
    {
        id: 'ts',
        title: 'TypeScript',
        description: 'Курс з TypeScript',
        teacher: 'Jane Smith',
        level: 'intermediate',
        price: 1500,
        lessons: 10,
        isPublished: true,
        isFavorite: false
    },
    {
        id: 'react',
        title: 'React',
        description: 'Курс з React',
        teacher: 'Bob Johnson',
        level: 'advanced',
        price: 2000,
        lessons: 15,
        isPublished: true,
        isFavorite: false
    }
];
export const emptyDraft: CourseDraft = {
    title: '',
    price: '',
};
export const priceFormatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    maximumFractionDigits: 0
});