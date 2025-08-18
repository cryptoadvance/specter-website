# Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js. The application features a contact form and newsletter subscription system with a clean, responsive design using shadcn/ui components and Tailwind CSS. It follows a monorepo structure with shared type definitions and schemas between the frontend and backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with a custom design system including CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite with custom configuration for path aliases and development features

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
- **Contacts**: Contact form submissions with spam protection (honeypot field)
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