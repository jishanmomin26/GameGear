/**
 * ComponentShowcase — Development-only page
 *
 * This page exists solely to verify that all UI components
 * from Milestone 2 render correctly. It should be removed
 * or hidden before production deployment.
 */

import { ShoppingCart, Heart, ArrowRight, Zap, Search } from 'lucide-react'
import {
  Button,
  Container,
  SectionTitle,
  Badge,
  Card,
  Loader,
  EmptyState,
} from '../../components/ui'

const Divider = () => (
  <hr className="my-12 border-graphite" />
)

const ComponentShowcase = () => {
  return (
    <main className="min-h-screen bg-obsidian py-16">
      <Container>
        {/* Page Header */}
        <div className="mb-16 text-center">
          <Badge variant="crimson" className="mb-4">Development Only</Badge>
          <h1 className="text-[44px] font-extrabold text-text-primary max-sm:text-[32px]">
            Component Showcase
          </h1>
          <p className="mt-3 text-text-muted">
            Milestone 2 — Reusable UI Components
          </p>
        </div>

        {/* ----------------------------------------------------------------
           BUTTON
           ---------------------------------------------------------------- */}
        <SectionTitle
          title="Button"
          subtitle="Primary, Secondary, and Ghost variants with multiple sizes, icons, and loading states."
          align="left"
        />

        {/* Variants */}
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-text-muted">Variants</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        {/* Sizes */}
        <p className="mt-8 mb-4 text-sm font-medium uppercase tracking-wider text-text-muted">Sizes</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        {/* With Icons */}
        <p className="mt-8 mb-4 text-sm font-medium uppercase tracking-wider text-text-muted">With Icons</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button icon={ShoppingCart}>Add to Cart</Button>
          <Button variant="secondary" icon={Heart}>Wishlist</Button>
          <Button variant="ghost" icon={ArrowRight} iconPosition="right">
            Browse
          </Button>
        </div>

        {/* States */}
        <p className="mt-8 mb-4 text-sm font-medium uppercase tracking-wider text-text-muted">States</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>

        <Divider />

        {/* ----------------------------------------------------------------
           CONTAINER
           ---------------------------------------------------------------- */}
        <SectionTitle
          title="Container"
          subtitle="Max-width wrapper with responsive padding (32px → 24px → 16px)."
          align="left"
        />
        <div className="rounded-[18px] border border-dashed border-graphite bg-charcoal/30 p-6">
          <p className="text-text-secondary text-sm">
            This entire showcase page is wrapped in a <code className="rounded bg-graphite px-2 py-0.5 text-crimson">{'<Container>'}</code> component. 
            Resize the browser to see the responsive padding change.
          </p>
        </div>

        <Divider />

        {/* ----------------------------------------------------------------
           SECTION TITLE
           ---------------------------------------------------------------- */}
        <SectionTitle
          title="SectionTitle"
          subtitle="Used above every section. Supports left, center, and right alignment."
          align="left"
        />

        <div className="space-y-8 rounded-[18px] border border-graphite bg-charcoal/30 p-8">
          <SectionTitle title="Left Aligned" subtitle="Subtitle text goes here." align="left" />
          <SectionTitle title="Center Aligned" subtitle="Subtitle text goes here." align="center" />
          <SectionTitle title="Right Aligned" subtitle="Subtitle text goes here." align="right" />
        </div>

        <Divider />

        {/* ----------------------------------------------------------------
           BADGE
           ---------------------------------------------------------------- */}
        <SectionTitle
          title="Badge"
          subtitle="Labelling and status indicators for products, categories, and states."
          align="left"
        />
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="crimson">Crimson</Badge>
          <Badge variant="gold">Gold</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>

        <Divider />

        {/* ----------------------------------------------------------------
           CARD
           ---------------------------------------------------------------- */}
        <SectionTitle
          title="Card"
          subtitle="Base card component with hover lift, shadow, and optional glassmorphism."
          align="left"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="p-6">
            <Badge variant="crimson" className="mb-3">Standard</Badge>
            <h3 className="text-lg font-semibold text-text-primary">Standard Card</h3>
            <p className="mt-2 text-sm text-text-muted">
              Solid charcoal background with hover lift and crimson glow shadow.
            </p>
          </Card>

          <Card glass className="p-6">
            <Badge variant="info" className="mb-3">Glass</Badge>
            <h3 className="text-lg font-semibold text-text-primary">Glass Card</h3>
            <p className="mt-2 text-sm text-text-muted">
              Semi-transparent background with backdrop blur for glassmorphism.
            </p>
          </Card>

          <Card hover={false} className="p-6">
            <Badge className="mb-3">Static</Badge>
            <h3 className="text-lg font-semibold text-text-primary">Static Card</h3>
            <p className="mt-2 text-sm text-text-muted">
              No hover animation. Useful for content that should not lift.
            </p>
          </Card>
        </div>

        <Divider />

        {/* ----------------------------------------------------------------
           LOADER
           ---------------------------------------------------------------- */}
        <SectionTitle
          title="Loader"
          subtitle="Loading spinners in three sizes. Also supports a full-screen overlay mode."
          align="left"
        />
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="text-center">
            <Loader size="sm" />
            <p className="mt-2 text-xs text-text-muted">Small</p>
          </div>
          <div className="text-center">
            <Loader size="md" />
            <p className="mt-2 text-xs text-text-muted">Medium</p>
          </div>
          <div className="text-center">
            <Loader size="lg" />
            <p className="mt-2 text-xs text-text-muted">Large</p>
          </div>
        </div>

        <Divider />

        {/* ----------------------------------------------------------------
           EMPTY STATE
           ---------------------------------------------------------------- */}
        <SectionTitle
          title="EmptyState"
          subtitle="Shown when a page or section has no content to display."
          align="left"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card hover={false} className="p-6">
            <EmptyState
              title="Your cart is empty"
              message="Looks like you haven't added any products yet."
              actionLabel="Start Shopping"
              onAction={() => alert('Navigate to Shop')}
            />
          </Card>

          <Card hover={false} className="p-6">
            <EmptyState
              icon={Search}
              title="No results found"
              message="Try adjusting your search or filters."
            />
          </Card>
        </div>

        <Divider />

        {/* Footer Note */}
        <div className="py-8 text-center">
          <p className="text-sm text-text-muted">
            🎮 GameGear Design System — Milestone 2 complete
          </p>
        </div>
      </Container>
    </main>
  )
}

export default ComponentShowcase
