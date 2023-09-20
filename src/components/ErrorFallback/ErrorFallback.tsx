import { useToast } from '@chakra-ui/toast';
import { useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  const toast = useToast();

  useEffect(() => {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      toast({
        title: 'Error',
        status: 'error',
        position: 'top',
        isClosable: true,
        description: error?.message,
        duration: 10000,
      });
    }
  }, []);

  return <></>;
};
export default ErrorFallback;
