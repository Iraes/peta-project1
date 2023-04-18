import { classNames } from '../../../src/shared/lib/classNames/classNames';

describe('classNames', () => {
  test('C одним первым параметром', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('C модами в 2 аргументе', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('C модами в 2 аргументе но с фолс значением', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('C модами в 2 аргументе но с undefined значением', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('C массивом в 3 аргументе', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });
});
