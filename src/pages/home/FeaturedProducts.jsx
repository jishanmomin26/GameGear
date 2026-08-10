import { Link } from 'react-router-dom'
import { Container, SectionTitle, Button } from '../../components/ui'
import { ProductGrid } from '../../components/product'
import { featuredProducts } from '../../data/products'

const FeaturedProducts = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <SectionTitle
            title="Featured Products"
            subtitle="Hand-picked gear for the ultimate gaming experience."
            align="left"
            className="mb-0"
          />
          <Link to="/shop">
            <Button variant="ghost" size="small">
              View All
            </Button>
          </Link>
        </div>

        <div className="mt-10">
          <ProductGrid products={featuredProducts} columns={4} />
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts
