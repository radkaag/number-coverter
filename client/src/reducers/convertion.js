import {
  CONVERT_INPUT,
  CONVERT_INPUT_FAILURE,
  CONVERT_INPUT_SUCCESS,
  CONVERT_RESET
} from '../AC/convertion';

const convertionDefault =
  'Please enter a number, which represents an word and press convert to see output.';

export default (convertion = convertionDefault, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONVERT_INPUT: {
      return 'Loading...';
    }

    case CONVERT_INPUT_FAILURE: {
      return 'Convertion failed, some problem with server occured.';
    }

    case CONVERT_INPUT_SUCCESS: {
      return payload.words;
    }

    case CONVERT_RESET: {
      return convertionDefault;
    }

    default: {
      return convertion;
    }
  }
};
