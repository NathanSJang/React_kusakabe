import { AppBar, Link, Typography } from '@material-ui/core'

export default function MenuNavBar({ categories }) {
  const category = categories.map(cat => <Link color="inherit" key={cat}>{cat}</Link>)
  return (
    <Link>
      <h1>Menu</h1>
        <AppBar position="sticky">
          <Typography>
            {category}
          </Typography>
        </AppBar>

    </Link>
  );
  
}