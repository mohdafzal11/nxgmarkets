import { useState, useEffect, useCallback } from 'react';
import type { User } from '../constants/user';
import { getCurrentUser, login as loginService, logout as logoutService } from '../constants/user';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const user = await loginService(email, password);
      if (user) {
        setUser(user);
        return { success: true };
      } else {
        setError('Invalid email or password');
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    logoutService();
    setUser(null);
  }, []);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    isAdmin,
  };
};

export default useUser;
