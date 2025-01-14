import React from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import communicationImage from '../assets/images/communication.png';
import innovativethinkerImage from '../assets/images/innovativethinker.png';
import problemsolvingImage from '../assets/images/problemsolving.png';
import passionImage from '../assets/images/passion.png';
import adaptabilityImage from '../assets/images/Adaptability.png';

const softskills = [
  { title: 'Good Communication Skills', image: communicationImage, description: 'Ability to convey ideas clearly and effectively' },
  { title: 'Innovative Thinker', image: innovativethinkerImage, description: 'Skilled at developing creative solutions to challenges' },
  { title: 'Problem-Solving Abilities', image: problemsolvingImage, description: 'Proficient in analyzing issues and finding effective solutions' },
  { title: 'Passion for Learning', image: passionImage, description: 'Enthusiastic about staying updated with new technologies and trends' },
  { title: 'Adaptability', image: adaptabilityImage, description: 'Capable of working both independently and collaboratively within a team' },
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
  textAlign: 'center',
});

const FlipCardContainer = styled('div')({
  '&:hover .flip-card-inner': {
    transform: 'rotateY(180deg)',
  },
});

const Softskills = () => {
  const gridJustify = softskills.length >= 5 ? 'center' : 'flex-start';

  return (
    <Box sx={{ mt: 5, px: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Softskills
      </Typography>
      <Grid container spacing={4} justifyContent={gridJustify}>
        {softskills.map((softskill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FlipCardContainer>
              <FlipCard>
                <FlipCardInner className="flip-card-inner">
                  <FlipCardFront>
                    <Card sx={{ width: 300, height: 200 }}>
                      <CardMedia
                        sx={{ height: '100%', objectFit: 'cover' }}
                        image={softskill.image}
                      />
                    </Card>
                  </FlipCardFront>
                  <FlipCardBack>
                    <Card sx={{ width: 300, height: 200 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {softskill.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {softskill.description}
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

export default Softskills;
