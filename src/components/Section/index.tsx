import { Flex, FlexProps } from "@chakra-ui/react";

export const Section = ({
  flexProps,
  children,
}: {
  flexProps?: FlexProps & { id: string };
  children?: React.ReactNode;
}) => {
  return (
    <Flex
      w="100%"
      px={5}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      {...flexProps}
    >
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={6}
      >
        {children}
      </Flex>
    </Flex>
  );
};
