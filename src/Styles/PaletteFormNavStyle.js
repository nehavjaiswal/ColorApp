import { DRWER_WIDTH } from "../Constant";
import sizes from "./Sizes";

const drawerWidth = DRWER_WIDTH;

const styles = theme => ({
    root : {
        display : "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        height: "64px",
        [sizes.down("sm")]: {
          height: "55px"
        }
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        })
      },
      menuButton: {
        marginRight: 20,
        marginLeft : 12
      },
      hide: {
        display : "none"
      },
      navBtns: {
        marginRight :"1rem",
        "& a": {
            textDecoration : "none",
        },
        [sizes.down("xs")] : {
          marginRight : "0.5rem"
      },
        
      },
      btn: {
        margin : "0 0.5rem",
        [sizes.down("md")]: {
          margin: "0 0.2rem",
          fontSize: "0.8rem",
          padding: "0.3rem"
        },
        [sizes.down("xs")]: {
          margin: "0 0.2rem",
          fontSize: "0.8rem",
          padding: "0.3rem"
        }
      },
});

export default styles;