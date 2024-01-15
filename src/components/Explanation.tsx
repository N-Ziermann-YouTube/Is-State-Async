let value: any = undefined;

function useStateFake<G>(initialValue: G) {
  if (value === undefined) {
    value = initialValue;
  }
  return [
    value as G,
    () => {
      console.log('inc', value);
      value++;
    },
  ] as const;
}

// ----------------------------------

const INITIAL_VALUE = 1;
export function Explanation() {
  let state = useStateFake(INITIAL_VALUE);

  return (
    <button
      onClick={() => {
        const [value, incAndLogState] = state;
        incAndLogState();
        console.log('click', value);
        state = useStateFake(INITIAL_VALUE);
      }}
    >
      Explanation
    </button>
  );
}
