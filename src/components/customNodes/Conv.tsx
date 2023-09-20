import { Stack, Text } from '@chakra-ui/react';
import { Handle, Position } from 'reactflow';
import { processWeights } from '../../lib';
import { nodeType } from '../../store/store';

const Conv = ({ data }: Pick<nodeType, 'data'>) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Stack
        gap={0}
        border="1px solid #fff"
        borderRadius={7}
        bg="#000"
        color="#fff"
        width="160px"
      >
        <Text mx={1} fontSize="14px" textAlign="center">
          {data?.type}
        </Text>
        <Stack px={1} borderBottomRadius={7} gap={0} bg="#fff">
          {data?.parameters?.activation && (
            <Text isTruncated textAlign="center" fontSize="11px" color="black">
              Activation: {data?.parameters?.activation}
            </Text>
          )}
          {data?.parameters?.weights && (
            <Text isTruncated textAlign="center" fontSize="11px" color="black">
              W: {`< ${processWeights(data?.parameters?.weights)} >`}
            </Text>
          )}
        </Stack>
      </Stack>

      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default Conv;
