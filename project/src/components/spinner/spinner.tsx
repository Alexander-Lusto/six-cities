import { CSSProperties } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '400px auto',
};

function Spinner(): JSX.Element {
  return (
    <FadeLoader cssOverride={override} />
  );
}

export default Spinner;
