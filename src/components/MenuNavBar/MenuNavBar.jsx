import { AppBar, Link, Typography } from '@material-ui/core'

export default function MenuNavBar() {
  return (
    <>
      <h1>Menu</h1>
        <AppBar position="sticky">
          <Typography>
            <Link color="inherit">omakase</Link>
          </Typography>
        </AppBar>

    </>
  );
  
}