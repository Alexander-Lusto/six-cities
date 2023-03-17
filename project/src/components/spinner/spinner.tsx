import { CSSProperties } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const TEST_ID = 'spinner';

const override: CSSProperties = {
  display: 'block',
  margin: '400px auto',
};

function Spinner(): JSX.Element {
  return (
    <FadeLoader cssOverride={override} data-testid={TEST_ID}/>
  );
}

export default Spinner;
