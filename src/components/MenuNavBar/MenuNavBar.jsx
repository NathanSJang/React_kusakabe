import { AppBar } from '@material-ui/core'
import { Link } from 'react-scroll'
import useStyles from './styles';

export default function MenuNavBar({ categories }) {
  const classes = useStyles();
  
  const category = categories.map(cat => 
    <Link
      activeClass="active"
      to={cat}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {cat}
    </Link>
      )

  return (
    <div>
      <h1>Menu</h1>
      <AppBar className={classes.menuAppBar} position="sticky">
        {category}
      </AppBar>
    </div>
  );
  
}