import { useParams } from '../lib';

const NestedParameterizedComponent = () => {
  const { getParams } = useParams();
  return <div>NestedParameterizedComponent: {JSON.stringify(getParams())}</div>;
};

export default NestedParameterizedComponent;
