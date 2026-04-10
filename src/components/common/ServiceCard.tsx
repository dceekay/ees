import { motion } from 'framer-motion';

type Props = {
  index: string;
  title: string;
  description: string;
  image: string;
};

export function ServiceCard({ index, title, description, image }: Props) {
  return (
    <motion.div
      className="serviceCard"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="serviceImageWrap">
        <img src={image} alt={title} />
      </div>

      <div className="serviceContent">
        <span className="serviceIndex">{index}</span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </motion.div>
  );
}