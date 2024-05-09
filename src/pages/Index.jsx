import { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, ListIcon, IconButton, Text, HStack } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Todo List
        </Text>
        <HStack width="100%">
          <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTodo()} />
          <IconButton aria-label="Add todo" icon={<FaPlus />} onClick={handleAddTodo} />
        </HStack>
        <List width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} paddingY={2} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{todo}</Text>
              <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
