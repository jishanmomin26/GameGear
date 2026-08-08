import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container, SectionTitle, Card } from '../../components/ui'
import { categories } from '../../data/products'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const FeaturedCategories = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Shop by Category"
          subtitle="Browse our curated collection of premium gaming gear."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants}>
              <Link to="/shop">
                <Card className="group relative h-[260px] overflow-hidden">
                  {/* Category Image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent transition-opacity duration-300" />

                  {/* Content overlay */}
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-text-primary">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {cat.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm font-medium text-crimson">
                      <span>{cat.productCount} Products</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default FeaturedCategories
