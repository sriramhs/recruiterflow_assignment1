// src/styles/homePageStyles.ts

export const containerStyles = {
  minHeight: '100vh',
  paddingY: 6,
};

export const headerBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  mb: 4,
};

export const logoStyle = {
  width: 120,
  height: 40,
};

export const titleText = {
  fontWeight: 700,
  color: '#111',
  letterSpacing: 1,
};

export const addSection = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  mb: 4,
};

export const cardListText = {
  fontWeight: 600,
  color: '#333',
  letterSpacing: 0.5,
};

export const addButton = {
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    transform: 'scale(1.1)',
  },
};

export const gridContainer = {
  px: { xs: 1, sm: 3, md: 5 },
};
