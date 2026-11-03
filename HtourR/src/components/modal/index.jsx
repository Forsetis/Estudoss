function Modal ({ src, alt, aoFechar}) {
    return (
        <div className="modal-container" onClick={aoFechar} style={{ display: "flex"}}>
        <span className="modal-fechar" onClick={aoFechar}>&times;</span>
        <img className="modal-conteudo" src={src} alt={alt} onClick={(e)=>e.stopPropagation()}/>
        </div>
    );
}

export default Modal;