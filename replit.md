# Overview

This is a replica of the Specter Solutions website built as a modern full-stack web application using React, TypeScript, and Express.js. The application features the Specter Association branding with a hero section, desktop and hardware product showcases, and a contact form. It includes dedicated pages for Specter Desktop and Hardware products, maintaining the original site's structure while using modern web technologies.

# User Preferences

Preferred communication style: Simple, everyday language.

## Design Requirements
- Use exact Specter brand colors: Primary (#2D9CDB), Text (#FFFFFF), Link (#FF7C7C), Background 1 (#05080F), Background 2 (#192432)
- Maintain original Specter Solutions site structure and layout
- Use provided background images and contact person photos
- Desktop and Hardware sections should link to dedicated pages

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Routing**: Wouter for lightweight client-side routing with dedicated pages for Desktop (/desktop) and Hardware (/hardware)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with Specter brand colors and custom design system
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite with custom configuration for path aliases and asset imports
- **Assets**: Custom hero background image and contact person image integrated via @assets imports

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with `/api` prefix for all endpoints
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot reload and middleware integration with Vite in development mode

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **Storage Pattern**: Repository pattern with in-memory fallback storage for development
- **Validation**: Shared Zod schemas for client and server validation

## Data Models
- **Users**: Basic user authentication system with username/password
- **Contacts**: Contact form submissions with spam protection (honeypot field) for association inquiries
- **Newsletters**: Email subscription management with duplicate prevention

## Security Features
- **Spam Protection**: Honeypot field implementation in contact forms
- **Validation**: Server-side validation using Zod schemas
- **CORS**: Configured for cross-origin requests
- **Input Sanitization**: Automatic through Zod validation and type safety

## Development Experience
- **Hot Reload**: Vite integration for fast development
- **Type Safety**: End-to-end TypeScript with shared types
- **Path Aliases**: Configured shortcuts for imports (@/, @shared/)
- **Linting**: TypeScript strict mode enabled
- **Error Overlay**: Runtime error modal for development debugging

# External Dependencies

## Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database schema management and migrations

## Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Zod integration for form validation
- **wouter**: Lightweight routing library
- **date-fns**: Date manipulation utilities

## UI Framework
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

## Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development features

## Validation & Utilities
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component

# Recent Changes (August 23, 2025)

## Build Guide Addition (August 23, 2025)
- Created comprehensive Build Guide page (/build-guide) with detailed hardware wallet assembly instructions
- Added four different hardware wallet case types: Specter DIY, Specter Shield, Specter Shield Lite, and Shield Lite with Batteries
- Implemented filtering system to show/hide sections and legend parts based on selected case type
- Integrated Build Guide into all page navigation dropdowns under Hardware section
- Added detailed parts legend with authentic supplier links and specifications
- Includes links to official GitHub documentation and assembly instructions
- Features responsive design with image placeholders for each wallet type

## Vendor Logo Integration (August 23, 2025)
- Added authentic vendor logos to all 4 vendor cards replacing colored placeholder circles
- ClavaStack: Orange character logo with crown (BtcFrankenstein)
- Pleb.style: Black stylized "PLEB" text logo  
- Bitcoin-store.org: Blue and gray geometric logo
- Cryptoguide.tips: Blue map-style logo with "Crypto Guide" text
- Removed white borders and background styling for pure logo display

## Navigation Enhancement (August 23, 2025)
- Updated Hardware dropdown navigation across all pages to include Build Guide option
- Consistent three-item dropdown: Hardware Overview, Vendors, Build Guide
- Updated both desktop and mobile navigation menus on all pages
- Build Guide properly highlighted when active in navigation

## Previous Changes (August 21, 2025)

### Website Structure Update
- Created dedicated Desktop page (/desktop) with detailed Specter Desktop information
- Created dedicated Hardware page (/hardware) with Specter DIY hardware wallet details  
- Created dedicated Contact page (/contact) with Specter Association team member profiles and contact form
- Updated home page navigation to link to new dedicated pages
- Removed Enterprise section per user request, focusing only on Desktop and Hardware

### Navigation Integration
- Fully integrated contact page into main site navigation structure
- Updated all pages (Home, Desktop, Hardware, Contact) with consistent header navigation
- Replaced simple "Back to Home" buttons with full navigation menu on all pages
- Added mobile responsive navigation with hamburger menu across all pages
- Contact page now uses exact same styling and fonts as main Specter site
- Updated Moritz profile picture to version with Bitcoin logo background
- Contact form styling matches home page design patterns

### Visual Design Changes
- Updated hero section with custom background image (man typing with Specter interface)
- Changed hero text from "Free Open-Source Product Suite" to "Open-Source Specter Project"
- Updated subtitle from "For Bitcoiners, Developers & Enterprise" to "Secure your Bitcoin with Specter"
- Replaced contact person image with new association team photo
- Changed contact section title from "Contact Moritz for more information" to "Contact Association"
- Redesigned contact form layout with centered form and contact image above

### Brand Integration
- Applied Specter brand colors throughout the site
- Integrated custom assets via @assets imports for better asset management
- Maintained responsive design with mobile navigation
- Preserved original site structure while modernizing the technology stack