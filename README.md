# StyleHub - Modern Ecommerce Frontend

A premium, modern, and fully responsive ReactJS ecommerce frontend website built with React + Vite, Tailwind CSS, Framer Motion, and React Router.

## Features

✨ **Modern UI Design**
- Premium and sleek interface inspired by Myntra, H&M, Zara, and Amazon Fashion
- Responsive design for mobile, tablet, and desktop
- Smooth animations and transitions
- Modern gradient backgrounds and shadows

🛍️ **Core Pages**
- **Home Page** - Hero section with featured products and categories
- **Products Page** - Grid layout with advanced filters and search
- **Product Details Page** - Detailed product information with related items
- **Cart Page** - Complete shopping cart management
- **Navbar** - Responsive navigation with mobile menu and search
- **Footer** - Contact info and links

🔍 **Advanced Features**
- Category-based filtering
- Price range filter
- Search functionality
- Product sorting (newest, price, rating)
- Shopping cart with quantity management
- Toast notifications
- Loading skeletons
- Wishlist functionality
- Share product option

🎨 **Design Elements**
- Tailwind CSS for styling
- Lucide React icons
- Framer Motion animations
- Modern fonts (Inter)
- Responsive grid layouts
- Hover effects and micro-interactions
- Smooth page transitions

📦 **Product Data**
- 24 dummy products across 6 categories
- 4 Jeans, 4 Shirts, 4 T-Shirts, 4 Shoes, 4 Hoodies, 4 Jackets
- Real images from Unsplash
- Complete product information (name, price, rating, description)

## Tech Stack

- **React 18.3** - UI library
- **Vite 5.0** - Build tool and dev server
- **React Router 6.20** - Navigation
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 10.16** - Animations
- **Lucide React 0.294** - Icons
- **React Hot Toast 2.4** - Notifications

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

### Step 4: Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ecommerce/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with mobile menu
│   │   ├── Footer.jsx           # Footer with contact info
│   │   ├── ProductCard.jsx      # Reusable product card
│   │   ├── CategoryCard.jsx     # Category display card
│   │   └── LoadingSkeleton.jsx  # Loading animation
│   ├── pages/
│   │   ├── Home.jsx             # Home page with hero and featured products
│   │   ├── Products.jsx         # Products page with filters
│   │   ├── ProductDetails.jsx   # Single product details page
│   │   └── Cart.jsx             # Shopping cart page
│   ├── context/
│   │   └── CartContext.jsx      # Cart state management
│   ├── data/
│   │   └── products.js          # Dummy product data
│   ├── assets/                  # Images and static assets
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── public/                       # Static files
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                     # This file
```

## Key Components

### Navbar
- Logo with gradient effect
- Navigation links
- Search bar
- Shopping cart with item count badge
- Responsive mobile menu
- Smooth animations

### Home Page
- Large hero banner with background image
- Call-to-action buttons
- 6 category cards with hover effects
- Featured products section
- Promotional banner
- Scroll animations

### Products Page
- Product grid layout (responsive: 1-4 columns)
- Search functionality
- Category filter
- Price range slider
- Sorting options (newest, price, rating)
- Mobile filter sidebar
- No results message

### Product Details Page
- Large product image with zoom effect
- Product name, price, and rating
- Quantity selector
- Add to cart button
- Wishlist and share buttons
- Related products section
- Breadcrumb navigation

### Cart Page
- List of cart items
- Product images and details
- Quantity adjustment
- Remove item functionality
- Order summary with tax and shipping
- Promo code input
- Empty cart state

### Cart Context
- Global state management
- Add/remove items
- Update quantity
- Calculate totals
- Toast notifications

## Product Data

The dummy product data includes:

### Categories
1. Jeans - 4 products
2. Shirts - 4 products
3. T-Shirts - 4 products
4. Shoes - 4 products
5. Hoodies - 4 products
6. Jackets - 4 products

Each product includes:
- ID, name, category
- Price and original price
- Rating (1-5 stars)
- High-quality Unsplash images
- Detailed description
- Additional details

## Styling Features

- **Color Palette**: Blue (#2563eb), Purple, Orange, White, Gray tones
- **Responsive Breakpoints**: Mobile, Tablet, Desktop
- **Animations**: Slide in, fade, scale, hover effects
- **Typography**: Inter font family
- **Shadows**: Subtle elevation shadows
- **Spacing**: Consistent padding and margins
- **Border Radius**: Rounded corners (4-12px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Fast load times with Vite
- Optimized images from Unsplash
- Code splitting with React Router
- Smooth 60fps animations
- Responsive and mobile-optimized

## Future Enhancements

- User authentication
- Backend API integration
- Payment gateway integration
- Order tracking
- User reviews and ratings
- Wishlist persistence
- Advanced search with autocomplete
- Product recommendations
- Inventory management
- Admin dashboard

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please feel free to reach out.

---

**Made with ❤️ using React + Vite + Tailwind CSS**
