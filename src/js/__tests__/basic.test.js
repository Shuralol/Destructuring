import { getSpecialsArray } from "../character.js";

test('getSpecialsArray should return an array of objects with id, name, icon and description fields', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ],
  };

  const result = getSpecialsArray(character);
  expect(result).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]);
});

test('getSpecialsArray should set default value for description field if it is missing', () => {
  const character = {
    special: [
      {
        id: 1,
        name: 'Special Attack',
        icon: 'http://...',
      },
    ],
  };

  const result = getSpecialsArray(character);
  expect(result[0].description).toBe('Описание недоступно');
});