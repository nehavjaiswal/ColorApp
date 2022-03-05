const styles ={
    root : {
        height : "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover svg" : {
            color : "white",
            transform : "scale(1.5)"
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
        transition : "all 0.3s ease-in-out"
    }
}

export default styles;