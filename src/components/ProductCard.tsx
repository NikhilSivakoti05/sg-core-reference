import { motion } from 'framer-motion';
import { Check, ShoppingCart, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from "react-router-dom";


interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
  index: number;
}

const ProductCard = ({ name, price, description, features, badge, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
    >
      {badge && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
          {badge}
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-heading font-bold mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-heading font-bold text-primary">{price}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Link to="/detail">
  <Button variant="outline" className="w-full">
    <Eye className="w-4 h-4 mr-2" />
    View Details
  </Button>
</Link>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default ProductCard;
