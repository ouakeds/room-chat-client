import { Box, CardContent, Chip, Divider, Typography } from "@mui/material";

interface IRoomCard {
    title: string,
    description: string;
    chips: string[];
  }
  
const RoomCard = ({title, description, chips}: IRoomCard) => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                transition: 'box-shadow 0.3s ease-in-out',
                ':hover': {
                    boxShadow: '0px 0px 10px 2px #ababab'
                }
            }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" sx={{color: '#0066ff'}}>
                        {title}
                    </Typography>
                    <Typography component="div" variant="h6" sx={{color: '#ababab'}}>
                        {description}
                    </Typography>
                    {
                        chips.map((chip: string) => <Chip label={chip} variant="outlined" sx={{marginTop: 1}}/>)
                    }
                </CardContent>
                <Divider />
            </Box>
        </>
    );
}

export default RoomCard;