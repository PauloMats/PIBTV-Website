import React from 'react';
import './Section.css';

interface SectionProps {
    title: string;
    content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
    return (
        <section className="section">
            <h2>{title}</h2>
            <p>{content}</p>
        </section>
    );
};

export default Section;
