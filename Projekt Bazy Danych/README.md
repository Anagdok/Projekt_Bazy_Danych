# CrackGrilla

A modern game store built with React, TypeScript, and Supabase.

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd crackgrilla
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Lucide React