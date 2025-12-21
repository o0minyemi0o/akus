import { Box } from '@mui/material';
import MottoText from '../components/typography/MottoText';
import ContentInset from './layout/ContentInset';

const Motto = ({ text, sx, ...props }) => {
  return (
    <Box
      component="section"
      {...props}
      sx={{
        py: 12,
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      <ContentInset maxWidth="900px">
        <MottoText>{text}</MottoText>
      </ContentInset>
    </Box>
  );
};

export default Motto;
