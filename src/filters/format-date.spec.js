import formatDate from './format-date';

describe('formatDate', () => {
  it('formats Date to short format', () => {
    expect(formatDate(new Date('2021-04-30T14:52:00.630Z'))).toBe('30/04/2021 10:52');
  });

  it('returns nothing if no date param', () => {
    expect(formatDate()).toBe(null);
  });

  it('returns nothing if date param is not a Date', () => {
    expect(formatDate('2021-04-30T14:52:00.630Z')).toBe(null);
  });
});
