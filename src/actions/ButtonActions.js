import {
  RANDOM_TEXT,
} from './types';

export const generateRandomText = (text) => {
  return {
    type: RANDOM_TEXT,
    payload: text,
  };
};
