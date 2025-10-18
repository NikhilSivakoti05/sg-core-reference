import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItem {
  quarter: string;
  year: string;
  title: string;
  description: string;
  status: 'coming' | 'development' | 'launched';
}

const Timeline = () => {
  const timelineItems: TimelineItem[] = [
    {
      quarter: 'Q2',
      year: '2025',
      title: 'PLANADESK Automotive',
      description: 'Mobile workstation designed for automotive professionals and mechanics',
      status: 'coming',
    },
    {
      quarter: 'Q3',
      year: '2025',
      title: 'PLANADESK Smart IoT',
      description: 'AI-powered workstation with smart inventory tracking and automation',
      status: 'development',
    },
    {
      quarter: 'Q4',
      year: '2025',
      title: 'PLANADESK Enterprise Suite',
      description: 'Large-scale solutions for enterprise and fleet management',
      status: 'development',
    },
    {
      quarter: 'Q1',
      year: '2026',
      title: 'PLANADESK Medical Pro',
      description: 'Specialized medical-grade workstation with advanced hygiene features',
      status: 'coming',
    },
  ];

  const statusColors = {
    coming: 'bg-muted text-muted-foreground',
    development: 'bg-secondary/20 text-secondary',
    launched: 'bg-success/20 text-success',
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">Upcoming Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovation never stops. Here's what we're building next for professionals like you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== timelineItems.length - 1 && (
                <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-border" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-card">
                <Calendar className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-subheading font-semibold text-primary">
                        {item.quarter} {item.year}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[item.status]}`}
                      >
                        {item.status === 'coming' && 'Coming Soon'}
                        {item.status === 'development' && 'In Development'}
                        {item.status === 'launched' && 'Launched'}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
