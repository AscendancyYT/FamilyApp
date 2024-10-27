const roles = {
  MOM: 'mom',
  DAD: 'dad',
  CHILD: 'child',
};

export const permissions = {
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  VIEW_PRODUCTS: 'VIEW_PRODUCTS',
  SET_DINNER: 'SET_DINNER',
  EAT_OUTSIDE: 'EAT_OUTSIDE',
  PIN_ACHIEVEMENTS: 'PIN_ACHIEVEMENTS',
  SET_TASKS: 'SET_TASKS',
  SEE_TASKS: 'SEE_TASKS',
};

export const rolePermissions = {
  mom: [permissions.ADD_PRODUCTS, permissions.SET_DINNER, permissions.SET_TASKS],
  dad: [permissions.VIEW_PRODUCTS, permissions.EAT_OUTSIDE, permissions.SET_TASKS],
  child: [permissions.PIN_ACHIEVEMENTS, permissions.SEE_TASKS],
};

// Utility to check if a user has permission
export const hasPermission = (userRole, permission) => {
  return rolePermissions[userRole]?.includes(permission);
};
