import { Link } from "react-router-dom";

const Item = ({
  id,
  nombre,
  marca,
  categoria,
  detalle,
  precio,
  imagen,
  stock,
}) => {
  return (
    <div className="card m-1" style={{ width: "18rem" }}>
      <img src={"../img/" + imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-title">Marca: {marca}</h6>
        <p className="card-text">{detalle}</p>
        <p className="card-text">$ {precio}</p>
        <Link to={`/item/${id}`} className="Option btn btn-warning">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export { Item };
