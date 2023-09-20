import { Flex } from '@chakra-ui/layout';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      p={4}
      gap={10}
      w="100vw"
      h="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
};
export default Layout;
