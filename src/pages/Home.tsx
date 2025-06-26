import { useEffect, useState } from 'react';
import {
  Container,
  IconButton,
  Typography,
  CircularProgress,
  Grid,
  Box,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import type { Item } from '../types/types';
import axiosInstance from '../api/axiosConfig';
import CardItem from '../components/Card';
import Logo from '../assets/logo.png';
import { containerStyles, headerBox, logoStyle, titleText, addSection, cardListText, addButton, gridContainer } from '../styles/style.home';


const HomePage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [adding, setAdding] = useState<boolean>(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axiosInstance.get<Item[]>('/items');
        setItems(res.data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`/items/${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  const handleAdd = async () => {
    setAdding(true);
    try {
      const res = await axiosInstance.post<Item>('/items');
      setItems((prev) => [...prev, res.data]);
    } catch (error) {
      console.error('Failed to add item:', error);
    } finally {
      setAdding(false);
    }
  };

  return (
    <Container sx={containerStyles}>
      <Box sx={headerBox}>
        <Box
          component="img"
          src={Logo}
          alt="RecruiterFlow Logo"
          sx={logoStyle}
        />
        <Box>
          <Typography variant="h3" sx={titleText}>
            RecruiterFlow Assignment
          </Typography>
        </Box>
      </Box>

      <Box sx={addSection}>
        <Typography variant="h5" sx={cardListText}>
          Card List
        </Typography>
        {adding ? (
          <CircularProgress size={28} />
        ) : (
          <Tooltip title="Add new card">
            <IconButton
              onClick={handleAdd}
              color="primary"
              sx={addButton}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {loading ? (
        <Box textAlign="center" mt={6}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center" sx={gridContainer}>
          {items.map((item: Item) => (
            <Grid >
              <CardItem item={item} onDelete={() => handleDelete(item.id)} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
