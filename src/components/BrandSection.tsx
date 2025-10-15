import { motion } from "framer-motion";

const brands = [
  "Pepsi",
  "Coca-Cola",
  "Daiso",
  "TopValu",
  "i-Rashiku",
  "iC Innercasual",
];

const BrandSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
        Our Partner Brands
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all border aspect-square"
          >
            <span className="text-lg font-semibold text-center text-foreground">
              {brand}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
