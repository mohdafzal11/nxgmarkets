import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

interface ProtectedRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  children,
  adminOnly = false,
  redirectTo = '/login',
}: ProtectedRouteProps) => {
  const { isAuthenticated, isAdmin, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
