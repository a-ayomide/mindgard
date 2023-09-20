import { BoxProps, CircularProgress, Flex, Portal } from '@chakra-ui/react';

type FullPageLoaderProps = {
  bg?: BoxProps['bg'];
};

const FullPageLoader = ({ bg }: FullPageLoaderProps) => {
  return (
    <Portal>
      <Flex
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        pos="fixed"
        bg={bg || 'blackAlpha.800'}
        alignItems="center"
        justifyContent="center"
        zIndex={99}
      >
        <Flex
          p={0.5}
          borderRadius="full"
          bg={bg ? 'blackAlpha.600' : 'transparent'}
        >
          <CircularProgress isIndeterminate size="100px" thickness="4px" />
        </Flex>
      </Flex>
    </Portal>
  );
};

export default FullPageLoader;
