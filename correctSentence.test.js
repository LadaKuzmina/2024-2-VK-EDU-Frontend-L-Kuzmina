import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("hello")).toBe("Hello.")
})
test('returns false', () => {
  expect(correctSentence(1)).toBe(false);
  expect(correctSentence(NaN)).toBe(false);
  expect(correctSentence(true)).toBe(false);
  expect(correctSentence(null)).toBe(false);
  expect(correctSentence(undefined)).toBe(false);
  expect(correctSentence({})).toBe(false);
})