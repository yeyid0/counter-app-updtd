import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    App: {
      backgroundColor: "lightblue",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      display: "flex",
      gap: "20px",
    },
    myH1:{
        fontSize: "50px",
    },
    myButtons: {
      display: "flex",
      gap: "10px",
    },
    myInput: {
      width: "100px",
      outline:"none",
      border:"none",
    },
    myButton:{
        backgroundColor: "white",
        borderRadius: "5px",
        width: "100px",
        height: "30px",
        border: "none",
        transitionDuration: "0.2s",
        "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
      color: "black",
      
    },
    },
  });
  
  export default useStyles;