const mapping: Record<string, string> = {
  'maintenance-tasks': 'maintenance_task',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
