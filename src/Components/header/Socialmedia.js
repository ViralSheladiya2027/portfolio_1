import { IconButton, Stack } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./header.css";

const Socialmedia = () => {
  return (
    <div className="socialmedia_container">
 <Stack direction="row" spacing={1}>
      <IconButton href="https://linkedin.com/in/sunny-patel-b516b022a" aria-label="linkedin">
        <LinkedInIcon  className="icon" />
      </IconButton>
      <IconButton href="http://github.com/SunnyPatel2027" aria-label="github">
        <GitHubIcon  className="icon"/>
      </IconButton>
      <IconButton aria-label="delete">
        <TwitterIcon  className="icon"/>
      </IconButton>
    </Stack>
    </div>
  )
}

export default Socialmedia