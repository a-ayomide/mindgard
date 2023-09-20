import {
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Drawer as DrawerWrapper,
  Text,
  Stack,
  Box,
} from '@chakra-ui/react';
import { useStore } from '../../store/store';
import { processWeights } from '../../lib';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  const { node } = useStore();
  return (
    <DrawerWrapper isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Stack bg="#242424" color="#fff" height="100%">
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize="14px">NODE PROPERTIES</Text>
          </DrawerHeader>

          <DrawerBody>
            <Stack gap={5}>
              <Text display="flex" alignItems="center" gap={2} fontSize="14px">
                {' '}
                Label:{' '}
                <Box
                  as="span"
                  borderRadius={3}
                  display="flex"
                  w="100%"
                  py={1}
                  px={3}
                  bg="#4a4949"
                >
                  {node?.data?.label}{' '}
                </Box>{' '}
              </Text>
              {node?.data?.activation && (
                <Text
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="14px"
                >
                  {' '}
                  Activation:{' '}
                  <Box
                    as="span"
                    borderRadius={3}
                    display="flex"
                    w="100%"
                    py={1}
                    px={3}
                    bg="#4a4949"
                  >
                    {node?.data?.activation}{' '}
                  </Box>{' '}
                </Text>
              )}
              {node?.data?.weights && (
                <Text
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="14px"
                >
                  {' '}
                  Weights:{' '}
                  <Box
                    as="span"
                    borderRadius={3}
                    display="flex"
                    w="100%"
                    py={1}
                    px={3}
                    bg="#4a4949"
                  >
                    {processWeights(node?.data?.weights)}
                  </Box>{' '}
                </Text>
              )}
              {node?.data?.biases && (
                <Text
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="14px"
                >
                  {' '}
                  Biases:{' '}
                  <Box
                    as="span"
                    borderRadius={3}
                    display="flex"
                    w="100%"
                    py={1}
                    px={3}
                    bg="#4a4949"
                  >
                    {processWeights(node?.data?.biases)}
                  </Box>{' '}
                </Text>
              )}
            </Stack>
          </DrawerBody>
        </Stack>
      </DrawerContent>
    </DrawerWrapper>
  );
};

export default Drawer;
