import "./singleproduct.scss";

const SingleProduct = (props) => {
  return (
    <div className="singleproduct">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
