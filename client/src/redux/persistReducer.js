const defaultState = {
  text: 'initial',
  polje:["PRAZNO POLJE"],
  foo: {
    bar: 'zoo',
    nested: {
      veryDeep: true,
    },
  },
};

export default function(state=defaultState, action = {}) {
  switch(action.type) {
    case 'UPDATE':
      return {
        ...state,
        text: action.text,
        foo: {
          ...state.foo,
          bar: action.text,
        },
      };
      case 'UPDATE-AUTHORS':
      return {
        ...state,
        polje: action.polje,
        foo: {
          ...state.foo,
          bar: action.text,
        },
      };
    default:
      return state;
  }
}