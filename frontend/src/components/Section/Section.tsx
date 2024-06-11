import React from 'react';

interface SectionProps {
    title: string;
    content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
    return (
        <section>
            <h2>{title}</h2>
            <div>{content}</div>
        </section>
    );
};

export default Section;
