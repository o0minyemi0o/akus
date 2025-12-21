import { Box, Typography } from '@mui/material';
import ContentInset from './layout/ContentInset';

const Footer = ({ sx, ...props }) => {
  return (
    <Box
      component="footer"
      {...props}
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        ...sx,
      }}
    >
      <ContentInset maxWidth="1600px">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.75rem',
              color: 'text.secondary',
              letterSpacing: '0.02em',
            }}
          >
            © 2024 akus. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                fontSize: '0.75rem',
                color: 'text.secondary',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                '&:hover': {
                  opacity: 0.6,
                },
              }}
            >
              Terms
            </Typography>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                fontSize: '0.75rem',
                color: 'text.secondary',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                '&:hover': {
                  opacity: 0.6,
                },
              }}
            >
              Privacy
            </Typography>
          </Box>
        </Box>
      </ContentInset>
    </Box>
  );
};

export default Footer;
