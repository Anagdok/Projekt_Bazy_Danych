import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const GamesPage = React.lazy(() => import('./pages/GamesPage'));
const GameDetailPage = React.lazy(() => import('./pages/GameDetailPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const OrdersPage = React.lazy(() => import('./pages/OrdersPage'));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <MainLayout>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/games" element={<GamesPage />} />
                  <Route path="/game/:id" element={<GameDetailPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </MainLayout>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App