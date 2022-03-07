import sizes from "./Sizes";

const styles ={
    root : {
        height : "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5.6px",
        "&:hover svg" : {
            color : "white",
            transform : "scale(1.5)"
        },
        [sizes.down("lg")] : {
            width: "25%",
            height : "20%"
        },
        [sizes.down("md")] : {
            width: "50%",
            height : "10%"
            },
        [sizes.down("xs")] : {
            width: "100%",
            height : "5%",
           
        },
    },
    BoxContent : {
        width: "100%",
        position: "absolute",
        bottom: "0px",
        left: "0px",
        padding: "10px",
        fontSize:"12px",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 0.3)",
        letterSpacing: "1px",
        display : "flex",
        justifyContent : "space-between",
        transition : "all 0.3s ease-in-out",  
    },
}

export default styles;