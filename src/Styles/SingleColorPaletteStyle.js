import sizes from "./Sizes";

export default {
    Palette :{
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors :{
        height : "90%"
    },
    goBack : {
        height : "50%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        opacity: "1",
        backgroundColor: "black",
        "& a" : {
        color:  "white",
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
        textDecoration: "none"
        },
        [sizes.down("lg")] : {
            width : "25%",
            height :"33.3333%"
        },
        [sizes.down("md")] : {
            width : "50%",
            height :"20%"
        },
        [sizes.down("xs")] : {
            width : "100%",
            height :"10%"
        }
    }

}
