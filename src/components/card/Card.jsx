import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material';

const Card = ({
  image,
  title,
  description,
  elevation = 1,
  children,
  ...props
}) => {
  return (
    <MuiCard
      elevation={elevation}
      {...props}
      sx={{
        borderRadius: 0,
        ...props.sx,
      }}
    >
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            aspectRatio: '1 / 1',
            objectFit: 'cover',
          }}
        />
      )}
      {(title || description || children) && (
        <CardContent>
          {title && (
            <Typography variant="h6" component="div" gutterBottom>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          )}
          {children}
        </CardContent>
      )}
    </MuiCard>
  );
};

export default Card;
