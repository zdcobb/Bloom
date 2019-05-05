import { calculateChoices } from '../helpers/NumberGenerator.js';

let choices = calculateChoices();

it('Should calculate 4 choices', () => {
  expect(choices.length).toBe(4);
});