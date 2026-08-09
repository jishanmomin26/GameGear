import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Container, Button, EmptyState } from '../components/ui'
import ProductPrice from '../components/product/ProductPrice'
import { useState } from 'react'

const Cart = () => {
  const navigate = useNavigate()
  const { cart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart()
  const [checkoutSimulated, setCheckoutSimulated] = useState(false)

  const handleCheckout = () => {
    setCheckoutSimulated(true)
    setTimeout(() => setCheckoutSimulated(false), 4000)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-obsidian text-text-primary">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
          <Link to="/" className="transition-colors hover:text-crimson">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="transition-colors hover:text-crimson">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-text-primary font-semibold">Cart</span>
        </nav>

        {/* Heading */}
        <div className="mb-10 flex items-center justify-between border-b border-graphite pb-5">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Shopping Cart</h1>
            <p className="mt-1 text-sm text-text-muted">
              Manage your selected gaming equipment
            </p>
          </div>
          {cart.length > 0 && (
            <span className="rounded-full bg-charcoal border border-graphite px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {checkoutSimulated && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="mb-8 border border-emerald-500/30 bg-emerald-500/10 p-4 rounded-xl text-center text-sm text-emerald-400"
          >
            <p className="font-semibold">Simulating Checkout Order Creation...</p>
            <p className="text-xs mt-1 opacity-80">This store frontend does not have checkout logic integrated. Your mock checkout request was received!</p>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {cart.length === 0 ? (
            <EmptyState
              icon={ShoppingBag}
              title="Your Cart is Empty"
              description="Browse our shop and equip your setup with the best gaming gear."
              actionLabel="Go To Shop"
              onAction={() => navigate('/shop')}
            />
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              {/* Cart Items List */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-4 p-4 rounded-[12px] bg-charcoal border border-graphite items-center justify-between flex-wrap sm:flex-nowrap"
                    >
                      {/* Product details */}
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <Link to={`/product/${item.id}`} className="block shrink-0 h-20 w-20 rounded-lg bg-obsidian border border-graphite overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </Link>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-crimson">
                            {item.category}
                          </p>
                          <Link to={`/product/${item.id}`} className="mt-1 block text-sm font-semibold hover:text-crimson transition-colors line-clamp-2">
                            {item.name}
                          </Link>
                          <p className="mt-1 text-xs text-text-muted">
                            In Stock
                          </p>
                        </div>
                      </div>

                      {/* Spacer or Divider for mobile */}
                      <div className="w-full h-px bg-graphite sm:hidden my-1" />

                      {/* Right Hand Side Controls */}
                      <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start gap-6 ml-auto">
                        {/* Qty Selector */}
                        <div className="flex items-center rounded-[8px] border border-graphite bg-obsidian overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center text-text-secondary transition-colors hover:bg-graphite hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="flex h-8 w-10 items-center justify-center text-xs font-semibold text-text-primary border-x border-graphite">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center text-text-secondary transition-colors hover:bg-graphite hover:text-text-primary cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right min-w-[70px]">
                          <ProductPrice price={item.price * item.quantity} />
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-all hover:bg-crimson/10 hover:text-crimson border border-transparent hover:border-crimson/20 cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Continue Shopping button */}
                <div className="mt-4">
                  <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-crimson transition-colors group">
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Summary panel */}
              <div className="lg:col-span-4 rounded-[12px] bg-charcoal border border-graphite p-6">
                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary border-b border-graphite pb-4">
                  Order Summary
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                    <span className="text-text-primary font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Shipping</span>
                    <span className="text-emerald-400 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Tax</span>
                    <span className="text-text-primary font-medium">$0.00</span>
                  </div>

                  <div className="my-2 h-px bg-graphite" />

                  <div className="flex justify-between items-baseline">
                    <span className="text-base font-bold text-text-primary">Total Price</span>
                    <span className="text-2xl font-extrabold text-crimson">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    size="large"
                    className="w-full text-center flex justify-center py-3 font-bold cursor-pointer"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 text-[11px] text-text-muted border-t border-graphite pt-4">
                  <p>• Fast & free shipping nationwide</p>
                  <p>• Secured SSL frontend transaction simulation</p>
                  <p>• 30-day money back warranty</p>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </main>
  )
}

export default Cart
