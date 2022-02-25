export default {
    NavBar :{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },
    
    logo : {
        marginRight: "13px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
        "& a" :{
            color: "black",
            textDecoration: "none"
        }
        
    },
    slider : {
        width: "340px",
        margin: "0 1px",
        display: "inline-block",
        "& .rc-slider-track" :{
            backgroundColor: "transparent",
        },
        "& .rc-slider-rail" : {
            height: "8px",
        },
        "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active,.rc-slider-handle:focus" : {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        }
    },
    selectContainer :{
        marginLeft: "auto",
        marginRight: "1rem"
    }
}