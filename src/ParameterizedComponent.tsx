import { ParameterizedRouteComponent } from '../lib';

interface IProps extends ParameterizedRouteComponent {}

const ParameterizedComponent: React.FC<IProps> = ({ params }) => {
  return <h1>From Param: {JSON.stringify(params)}</h1>;
};

export default ParameterizedComponent;
