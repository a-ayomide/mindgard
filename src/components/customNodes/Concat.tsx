import { Stack, Text } from '@chakra-ui/react';
import { Handle, Position } from 'reactflow';
import { nodeType } from '../../store/store';

const Concat = ({ data }: Pick<nodeType, 'data'>) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Stack
        gap={0}
        border="1px solid #000"
        borderRadius={7}
        bg="#51413C"
        color="#fff"
        px={3}
        py={1}
      >
        <Text mx={1} fontSize="14px" textAlign="center">
          {data?.type}
        </Text>
      </Stack>

      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default Concat;
