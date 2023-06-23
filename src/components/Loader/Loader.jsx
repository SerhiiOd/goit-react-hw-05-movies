import { GridLoader } from 'react-spinners';

export const Loader = () => {
  const override = {
    display: 'block',
    margin: '50px auto',
  };
  return (
    <GridLoader
      color="#b84b6f"
      size={25}
      margin={5}
      loading={true}
      cssOverride={override}
    />
  );
};
