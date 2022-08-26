import blob from "../imagenes/blob.svg";

export default  function Blob () {
    return  (
        <div>
            
            <img src={blob}
            style={{
                width:"250px",
                minWidth:"110px",
                zIndex: "150",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -30%)"
              }}
              alt=""
            />

        </div>
    );
}