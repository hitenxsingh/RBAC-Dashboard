import { Role, User } from '../types';

export const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: {
      users: ['create', 'read', 'update', 'delete'],
      roles: ['create', 'read', 'update', 'delete'],
      products: ['create', 'read', 'update', 'delete'],
      orders: ['create', 'read', 'update', 'delete'],
    },
  },
  {
    id: '2',
    name: 'Editor',
    description: 'Can manage content',
    permissions: {
      users: ['read'],
      roles: ['read'],
      products: ['create', 'read', 'update'],
      orders: ['read', 'update'],
    },
  },
  {
    id: '3',
    name: 'Viewer',
    description: 'Read-only access',
    permissions: {
      users: ['read'],
      roles: ['read'],
      products: ['read'],
      orders: ['read'],
    },
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    roleId: '1',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    roleId: '2',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    roleId: '3',
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
  },
];