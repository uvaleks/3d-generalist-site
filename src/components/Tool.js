function Tool({ img, name, invert }) {

    return (
      <div className="tool">
        <img className={`tool__img ${invert ? ' tool__img_invert' : ''}`} src={img} alt={name} />
        <p className="tool__name">{name}</p>
      </div>
    );
  }
  
  export default Tool;
  