import React from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import meditationImage from '../assets/images/meditation.png';
import chessImage from '../assets/images/chess.png';
import sudokuImage from '../assets/images/sudoku.png';
import numpuzImage from '../assets/images/numpuz.png';

const interests = [
  { title: 'Meditation', image: meditationImage, description: 'Focus on mindfulness and relaxation' },
  { title: 'Chess', image: chessImage, description: 'Strategic board game' },
  { title: 'Sudoku', image: sudokuImage, description: 'Number puzzle game' },
  { title: 'Numpuz', image: numpuzImage, description: 'Tile puzzle game' },
];


const FlipCard = styled('div')({
  perspective: '1000px',
  marginBottom: '20px', 
  width: '100%',
  maxWidth: '300px', 
  height: '200px',
});

const FlipCardInner = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
});

const FlipCardFront = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FlipCardBack = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
});

const FlipCardContainer = styled('div')({
  '&:hover .flip-card-inner': {
    transform: 'rotateY(180deg)',
  },
});

const Interests = () => {

  const gridJustify = interests.length >=5 ? 'center' : 'flex-start';

  return (
    <Box sx={{ mt: 5, px: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Interests
      </Typography>
      <Grid container spacing={4} justifyContent={gridJustify}>
        {interests.map((interest, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FlipCardContainer>
              <FlipCard>
                <FlipCardInner className="flip-card-inner">
                  <FlipCardFront>
                    <Card sx={{ width: 300, height: 200 }}>
                      <CardMedia
                        sx={{ height: 140, objectFit: 'cover' }}
                        image={interest.image}
                        title={interest.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {interest.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </FlipCardFront>
                  <FlipCardBack>
                    <Card sx={{ width: 300, height: 200 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {interest.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {interest.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </FlipCardBack>
                </FlipCardInner>
              </FlipCard>
            </FlipCardContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Interests;

