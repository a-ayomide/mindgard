import { Concat, Conv, Dropout, MaxPool, Relu } from '.';
import { nodeType } from '../../store/store';

export const CustomNode = ({ data }: nodeType) => {
  switch (data?.label) {
    case 'Conv':
      return <Conv data={data} />;
    case 'Relu':
      return <Relu data={data} />;
    case 'Softmax':
      return <Relu data={data} />;
    case 'MaxPool':
      return <MaxPool data={data} />;
    case 'GlobalAveragePool':
      return <MaxPool data={data} />;
    case 'Concat':
      return <Concat data={data} />;
    case 'Dropout':
      return <Dropout data={data} />;
    default:
      return null;
  }
};
