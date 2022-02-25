import chroma from "chroma-js";

export default {
    colorBox : {
        height : props => (props.showingFullPalette ? "25%" : "50%"),
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover button":{
            opacity: "1",
            transition: "0.5s"
        }
    },
    copyText :{
        color : props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"

    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(255, 255, 255, 0.6)" : "white",
        position: "absolute",
        display: "inline-block",
        right: "0px",
        bottom: "0px",
        backgroundColor: "rgba(255, 255, 255, 0.3)", 
        border: "none",
        width: "60px",
        height: "30px",
        lineHeight: "30px",
        textAlign: "center",
        texTransform: "uppercase"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
        width: "100px",
        height:"30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginTop: "-15px",
        marginLeft: "-50px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        textAlign: "center",
        fontSize: "1rem",
        lineHeight: "30px",
        outline: "none",
        border: "none",
        textTransform: "uppercase",
        textDecoration: "none",
        opacity : "0"
    },
    boxContent:{
        width: "100%",
        position: "absolute",
        bottom: "0px",
        left: "0px",
        padding: "10px",
        fontSize:"12px",
        textTransform: "uppercase",
        color: "black",
        letterSpacing: "1px"
    },
    copyOverlay : {
        opacity: "0",
       zIndex: "0",
       width: "100%",
       height: "100%",
       transition: "transform 0.6s ease-in-out",
       transform: "scale(0.1)"
    },
    showOverlay : {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsg : {
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transform: "scale(0.1)",
        opacity: "0",
        fontSize: "4rem",
        color: "white",
        "& h1":{
                width: "100%",
                textShadow: "1px 2px black",
                fontWeight: "400",
                textTransform: "uppercase",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                textAlign: "center",
                marginBottom: "0",
                padding: "1rem"
        },
        "& p" :{
           
                fontSize: "2rem",
                fontWeight: "100"
        }
     },
    msgShow : {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
    }
    
    
    
}