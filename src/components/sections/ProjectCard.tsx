import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: Props) {
  const stackPreview = project.stack?.slice(0, 4) ?? [];

  return (
    <motion.article
      layout
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/project/${project.id}`}
        className="bg-white p-6 md:p-7 rounded-[2rem] shadow-sm flex flex-col h-full border border-black/5 group cursor-pointer hover:shadow-md transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green block"
      >
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-grey shrink-0">
          <img
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="bg-yellow text-green font-headline font-bold text-[11px] md:text-[12px] px-3 py-1 rounded-full uppercase text-center flex items-center justify-center leading-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.summary && (
            <p className="font-body text-green/70 text-[14px] leading-relaxed mb-4">{project.summary}</p>
          )}
          {stackPreview.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {stackPreview.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-body font-medium text-green/80 bg-grey px-2 py-0.5 rounded-md border border-black/5"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-auto gap-4 pt-1 shrink-0">
          <h3 className="text-lg md:text-xl font-headline font-bold text-green leading-snug">{project.title}</h3>
          <div className="w-11 h-11 shrink-0 bg-green text-white rounded-full flex items-center justify-center shadow-md group-hover:bg-yellow group-hover:text-green transition-colors duration-300">
            <span className="material-symbols-outlined text-[22px]" aria-hidden>
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
