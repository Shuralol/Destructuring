 export function getSpecialsArray({ special }) {
  return special.map(({ id, name, icon, description }) => ({
    id,
    name,
    description: description || 'Описание недоступно',
    icon,
  }));
}