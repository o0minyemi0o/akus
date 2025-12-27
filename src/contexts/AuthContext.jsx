import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// 테스트용 사용자 데이터 (나중에 Firebase/백엔드로 교체 가능)
const DEMO_USERS = [
  { id: 'user1', email: 'test@akus.com', password: '1234', name: 'Akus User' },
  { id: 'user2', email: 'demo@akus.com', password: 'demo', name: 'Demo User' },
];

// localStorage에 사용자 목록 저장/불러오기
const getUsersFromStorage = () => {
  const users = localStorage.getItem('akus-users');
  return users ? JSON.parse(users) : [...DEMO_USERS];
};

const saveUsersToStorage = (users) => {
  localStorage.setItem('akus-users', JSON.stringify(users));
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // localStorage에서 사용자 정보 불러오기
    const savedUser = localStorage.getItem('akus-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 사용자 정보 변경 시 localStorage에 저장
  useEffect(() => {
    if (user) {
      localStorage.setItem('akus-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('akus-user');
    }
  }, [user]);

  const login = (email, password) => {
    // 테스트용 간단한 인증 (나중에 Firebase/백엔드로 교체)
    const users = getUsersFromStorage();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return { success: true };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const register = (name, email, password) => {
    // 이메일 중복 확인
    const users = getUsersFromStorage();
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      return { success: false, error: 'Email already exists' };
    }

    // 새 사용자 추가
    const newUser = {
      id: `user${Date.now()}`,
      name,
      email,
      password,
    };

    const updatedUsers = [...users, newUser];
    saveUsersToStorage(updatedUsers);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    logout,
    register,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
