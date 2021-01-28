import { AppBar, Link, Typography } from '@material-ui/core'

export default function MenuNavBar({ categories }) {
  const category = categories.map(cat => <Link color="inherit" key={cat}>{cat}</Link>)
  return (
    <>
      <h1>Menu</h1>
      <Link>
        <AppBar position="static">
            <Typography>
              {category}
            </Typography>
        </AppBar>
      </Link>
    </>
  );
  
}