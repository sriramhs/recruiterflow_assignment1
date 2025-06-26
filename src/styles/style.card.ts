// src/styles/cardItemStyles.ts

export const motionStyles = {
  height: '100%',
  width: '100%',
  maxWidth: '300px',
  margin: '0 auto',
};

export const cardStyles = {
  height: 150,
  borderRadius: 3,
  background: 'linear-gradient(135deg, #e0e0e0, #f7f7f7)',
  color: '#212121',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  transition: 'box-shadow 0.3s ease-in-out',
};

export const titleText = {
  fontWeight: 600,
  mb: 0.5,
};

export const dateText = {
  color: '#444',
};

export const cardContent = {
  pb: 1.5,
};

export const cardActions = {
  justifyContent: 'flex-end',
  pb: 1,
  pt: 0,
};

export const deleteButton = {
  color: '#e53935',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.2)',
  },
};
