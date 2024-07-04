import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ image, title, description, onClick }) {
    return (
        <Card className="w-64 p-4 bg-white rounded-lg shadow-md">
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{ width: '100%', height: '200px', objectFit: 'cover' }} // Set fixed height and width
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
    
            </CardActions>
        </Card>
    );
}

// PropTypes for the component
MultiActionAreaCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func, // Added onClick prop
};
