import type { ReactNode } from "react";
import '@/assets/styles/Card.css';
interface CardProps{
    children: ReactNode;
    className?: string;

}
export function Card({ children, className }: CardProps){
    return(
        <article className={`card ${className || ''}`}>
{children}
        </article>
    )
}
