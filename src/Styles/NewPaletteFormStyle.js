import { DRWER_WIDTH } from "../Constant";
import sizes from "./Sizes";
const drawerWidth = DRWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems : "center",
    [sizes.down("sm")]: {
			width: "100%"
		}
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    width : "100%",
    padding: "0 8px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height : "calc(100vh - 64px)",
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container : {
    width :"90%",
    height : "100%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",[sizes.down("sm")]: {
			width: "80%",
			maxHeight: "100vh"
		}


  },
  buttons :{
    width :"100%", 
  },
  button :{
    width :"50%", 
  }
});


export default styles;