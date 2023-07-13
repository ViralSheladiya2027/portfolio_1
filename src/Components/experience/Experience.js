import React from 'react'
import "./experience.css";
import { Stack, Typography,Box, IconButton, Grid } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const Experience = () => {
  return (
    <section id="experience">
      <Box p={3}>
      <Typography variant="h6" component="h5">
      What Skills I Have
        </Typography>
        <Typography variant="h4" component="h2">
        My Experience
        </Typography>
        <Box mt={2} />
<Box  display="flex"
      justifyContent="center"
      alignItems="center"
      // height={200}
      bgcolor="blueviolet"
      m={3} sx={{ flexGrow: 1, borderRadius: 5 }}>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Box sx={{ mt: 1 }}>
        <Typography variant="h6">Frontend Development</Typography>
        <Box mb={2}/>
        <Stack direction="row" spacing={2}>
          <VerifiedIcon />
          <Stack direction="column" spacing={0.5}>
            <Typography variant="subtitle1">Flutter</Typography>
            <small>Experience</small>
          </Stack>
          <Box width="5px"/>
          <VerifiedIcon />
          <Stack direction="column" spacing={1}>
            <Typography variant="subtitle1">React</Typography>
            <small>Experience</small>
          </Stack>
        </Stack>
        {/* More stacks */}
      </Box>
    </Grid>
  </Grid>
</Box>
<Box sx={{ flexGrow: 1, bgcolor: "blueviolet", m: 3, borderRadius: 5 }}>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Box sx={{ mt: 1 }}>
        <Typography variant="h6">Backend Development</Typography>
        <Stack direction="row" spacing={1}>
          <VerifiedIcon />
          <Stack direction="column" spacing={1}>
            <Typography variant="subtitle1">React</Typography>
            <small>Experience</small>
          </Stack>
          <VerifiedIcon />
          <Stack direction="column" spacing={1}>
            <Typography variant="subtitle1">React</Typography>
            <small>Experience</small>
          </Stack>
        </Stack>
        {/* More stacks */}
      </Box>
    </Grid>
  </Grid>
</Box>


      </Box>
    </section>
  )
}

export default Experience