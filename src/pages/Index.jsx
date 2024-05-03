import { Box, Flex, Textarea, Input, Button, useToast, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaTrash, FaSave } from 'react-icons/fa';

const Index = () => {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || []);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });
  const toast = useToast();

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSave = () => {
    if (currentNote.id === null) { // New note
      if (currentNote.title || currentNote.content) {
        setNotes([...notes, { ...currentNote, id: Date.now() }]);
        setCurrentNote({ id: null, title: '', content: '' });
        toast({
          title: 'Note added',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
    } else { // Update existing note
      const updatedNotes = notes.map(note => note.id === currentNote.id ? currentNote : note);
      setNotes(updatedNotes);
      toast({
        title: 'Note updated',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (currentNote.id === id) {
      setCurrentNote({ id: null, title: '', content: '' });
    }
    toast({
      title: 'Note deleted',
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSelectNote = (note) => {
    setCurrentNote(note);
  };

  return (
    <Box p={4}>
      <Flex direction="column" mb={4}>
        <Input
          placeholder="Title"
          mb={2}
          value={currentNote.title}
          onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
        />
        <Textarea
          placeholder="Take a note..."
          value={currentNote.content}
          onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
          size="sm"
        />
        <Button leftIcon={<FaSave />} colorScheme="blue" mt={3} onClick={handleSave}>
          Save
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {notes.map(note => (
          <Flex key={note.id} p={3} shadow="md" borderWidth="1px" direction="column">
            <Input
              value={note.title}
              isReadOnly
              onClick={() => handleSelectNote(note)}
            />
            <Textarea
              value={note.content}
              isReadOnly
              onClick={() => handleSelectNote(note)}
              mt={2}
            />
            <Button leftIcon={<FaTrash />} colorScheme="red" mt={3} onClick={() => handleDelete(note.id)}>
              Delete
            </Button>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;