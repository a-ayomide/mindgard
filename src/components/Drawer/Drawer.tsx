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
    <DrawerWrapper
      isOpen={isOpen}
      size={'md'}
      placement="right"
      onClose={onClose}
    >
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
                Type:{' '}
                <Box
                  as="span"
                  borderRadius={3}
                  display="flex"
                  w="100%"
                  py={1}
                  px={3}
                  bg="#4a4949"
                >
                  {node?.data?.type}{' '}
                </Box>{' '}
              </Text>
              {node?.data?.parameters?.activation && (
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
                    {node?.data?.parameters?.activation}{' '}
                  </Box>{' '}
                </Text>
              )}
              {node?.data?.parameters?.weights && (
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
                    {processWeights(node?.data?.parameters?.weights)}
                  </Box>{' '}
                </Text>
              )}
              {node?.data?.parameters?.biases && (
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
                    {processWeights(node?.data?.parameters?.biases)}
                  </Box>{' '}
                </Text>
              )}
              {node?.data?.parameters?.kernel_size && (
                <Text
                  as="span"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="14px"
                >
                  Kernel Size:
                  <Box
                    as="span"
                    borderRadius={3}
                    display="flex"
                    w="100%"
                    py={1}
                    px={3}
                    bg="#4a4949"
                  >
                    {node?.data?.parameters?.kernel_size}
                  </Box>{' '}
                </Text>
              )}
              {node?.data?.parameters?.filters && (
                <Text
                  as="span"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="14px"
                >
                  Filters:
                  <Box
                    as="span"
                    borderRadius={3}
                    display="flex"
                    w="100%"
                    py={1}
                    px={3}
                    bg="#4a4949"
                  >
                    {node?.data?.parameters?.filters}
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
