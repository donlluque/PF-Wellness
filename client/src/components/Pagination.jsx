import { Center, Button, Text, Input } from "@chakra-ui/react";
import React from "react";

export default function Pagination({
  page,
  setPage,
  PerPage,
  input,
  setInput,
}) {
  function nextPage() {
    setInput(input + 1);
    setPage(page + 1);
  }

  function previousPage() {
    setInput(input - 1);
    setPage(page - 1);
  }

  return (
    <Center mb="1rem">
      <Button
        bg="#2C7A7B"
        size="sm"
        disabled={page === 1 || page < 1}
        onClick={previousPage}
      >
        ⇠
      </Button>
      <Center mr="1rem">
        <Input
          w="2rem"
          size="sm"
          fontSize="md"
          border="none"
          name="page"
          autoComplete="off"
          type="text"
          value={input}
        />
        <Text fontSize="md"> of </Text>
        <Text fontSize="md" ml="1rem">
          {" "}
          {PerPage}
        </Text>
      </Center>
      <Button
        bg="#2C7A7B"
        size="sm"
        disabled={page > PerPage || page === PerPage}
        onClick={nextPage}
      >
        ⇢
      </Button>
    </Center>
  );
}
