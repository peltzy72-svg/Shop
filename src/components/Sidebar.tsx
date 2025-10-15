import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: 1, name: "Popular Products", subcategories: [] },
  { id: 2, name: "New Arrivals", subcategories: [] },
  { id: 3, name: "Local Products", subcategories: [] },
  {
    id: 4,
    name: "International Brands",
    subcategories: ["TopValu", "Daiso", "iC Innercasual", "i-Rashiku"],
  },
  {
    id: 5,
    name: "Food & Drinks",
    subcategories: ["Fresh Food", "Beverages", "Snacks", "Frozen"],
  },
  {
    id: 6,
    name: "Health & Beauty",
    subcategories: ["Skincare", "Makeup", "Hair Care", "Wellness"],
  },
  {
    id: 7,
    name: "Home & Living",
    subcategories: ["Kitchen", "Bedroom", "Bathroom", "Decor"],
  },
];

const Sidebar = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <aside className="hidden lg:block w-64 bg-card rounded-lg shadow-sm p-4 sticky top-20 h-fit">
      <h3 className="font-semibold text-lg mb-4 text-foreground">Categories</h3>
      <nav className="space-y-1">
        {categories.map((category) => (
          <div key={category.id}>
            <button
              onClick={() => category.subcategories.length > 0 && toggleCategory(category.id)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent transition-colors text-left group"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary">
                {category.name}
              </span>
              {category.subcategories.length > 0 && (
                <motion.div
                  animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              )}
            </button>
            <AnimatePresence>
              {expandedCategory === category.id && category.subcategories.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-6 py-2 space-y-1">
                    {category.subcategories.map((sub, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
