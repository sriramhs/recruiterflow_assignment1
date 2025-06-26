import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';
import type { CardType } from '../types/types';
import { motionStyles, cardStyles, cardContent, dateText, cardActions, deleteButton } from '../styles/style.card';
import { titleText } from '../styles/style.home';


const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const CardItem = ({ item, onDelete }: CardType) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 18,
      }}
      style={motionStyles}
    >
      <Card sx={cardStyles}>
        <CardContent sx={cardContent}>
          <Typography variant="h6" sx={titleText} noWrap>
            {item.name}
          </Typography>
          <Typography variant="body2" sx={dateText}>
            {formatDate(item.createdAt)}
          </Typography>
        </CardContent>

        <CardActions sx={cardActions}>
          <IconButton
            aria-label="delete"
            onClick={onDelete}
            sx={deleteButton}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default CardItem;
