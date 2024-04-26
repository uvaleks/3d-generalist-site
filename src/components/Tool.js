function Tool({ img, name, invert, light }) {

    return (
      <div className="tool">
        <img className={`tool__img ${invert ? ' tool__img_invert' : ''}${light ? ' tool__img_light' : ''}`} src={img} alt={name} />
        <p className="tool__name">{name}</p>
      </div>
    );
  }
  
  export default Tool;
  