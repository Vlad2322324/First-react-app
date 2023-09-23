import React, { useState } from 'react';
import { Box, Button, Center, Text } from '@chakra-ui/react';

const Card = () => {
  const [result, setResult] = useState(4);

  const handleAddBClick = () => {
    setResult(result + 5);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold">
        A plus B<br></br>
        A=4 B=5
      </Text>
      <Center mt={4}>
        <Button onClick={handleAddBClick}>Click to add B</Button>
      </Center>
      <Center mt={4}>
        <Text fontSize="2xl">{result}</Text>
      </Center>
    </Box>
  );
};

export default Card;
