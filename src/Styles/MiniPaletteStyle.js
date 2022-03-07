export default {
     
    root : {
         border : "2px solid black",
         backgroundColor : "white",
         position : "relative",
         borderRadius : "5px",
         padding : "0.5rem",
         cursor: "pointer",
         "&:hover svg" :{
              opacity : 1
         }
     },
    colors :{
         backgroundColor : "#dae1e4",
         height : "150px",
         width : "100%",
         borderRadius : "5px",
         overflow : "hidden"
    },
    title:{
         display : "flex",
         justifyContent : "space-between",
         alignItems : "center",
         margin : "0",
         color : "black",
         paddingTop : "0.5rem",
         fontSize : "1rem",
         position : "relative"
    },
    emoji:{
         marginLeft : "0.5rem",
         fontSize : "1.5rem"
    },
    miniColor:{
         height : "20%",
         width : "25%",
         display : "inline-block",
         margin : "0 auto",
         position : "relative",
         marginBottom : "-3.5px"
    },
    deleteIcon:{
         color : "white",
         backgroundColor : "#eb3d30",
         width : "25px",
         height : "25px",
         position : "absolute",
         top :"0px",
         right : "0px",
         zIndex : 10,
         opacity : 0
    }
 }
 