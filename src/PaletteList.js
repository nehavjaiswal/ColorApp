import React,{Component} from "react";
import {Link} from "react-router-dom";
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Dialog from '@mui/material/Dialog';
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { blue,red } from '@mui/material/colors';
import DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from "./MiniPalette";
import styles from "./Styles/PaletteListStyle";


class PaletteList extends Component{
    constructor(props){
        super(props);
        this.state = {
            openDeleteDialog : false,
            deletingId : ""
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.gotoPalette = this.gotoPalette.bind(this);

    }
    openDialog(id){
        this.setState({openDeleteDialog : true, deletingId : id})
    }
    closeDialog(){
        this.setState({openDeleteDialog : false, deletingId : ""})
    }
    gotoPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    handleDelete(){
        this.props.deletePalette(this.state.deletingId)
        this.closeDialog();
    }
    render(){
        const {paletteList, classes} = this.props 
        const {openDeleteDialog} = this.state
        return(
            <div className= {classes.root} key ={paletteList.id}>
                <div className= {classes.container}>
                    <nav className= {classes.nav}>
                         <h1 className={classes.heading}>React Colors</h1>
                         <Link to="/palette/new">Create Palette</Link>
                    </nav>
                     <TransitionGroup className={classes.palettes}>
                        {paletteList.map(palette =>(
                            <CSSTransition key ={palette.id} className ="fade" timeout = {500}>
                            <MiniPalette {... palette} gotoPalette = {this.gotoPalette}
                                openDialog = {this.openDialog}
                                key = {palette.id}
                                id = {palette.id}
                            /> 
                            </CSSTransition>
                        
                        ))}
                        </TransitionGroup>
                </div>
                <Dialog open = {openDeleteDialog} 
                    aria-labelledby="delete-dialog-title"
                    onClose={this.closeDialog}
                >
                    <DialogTitle id="delete-dialog-title">Delete This Palette</DialogTitle>
                    <List>
                        <ListItem button onClick = {this.handleDelete}>
                           <ListItemAvatar>
                                <Avatar
                                style = {{backgroundColor : blue[100],color:blue[600]}}
                                >
                               <CheckIcon />
                               </Avatar>
                           </ListItemAvatar>
                           <ListItemText primary ="Delete" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick ={this.closeDialog}>
                           <ListItemAvatar>
                                <Avatar
                                style = {{backgroundColor : red[100],color:red[600]}}
                                >
                               <CloseIcon />
                               </Avatar>
                           </ListItemAvatar>
                           <ListItemText primary = "Cancel" />
                        </ListItem>
                    </List>
                </Dialog>
               
            </div>
            
        )
    }
}

export default withStyles(styles) (PaletteList);