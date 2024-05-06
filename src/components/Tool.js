function Tool({ img, name, invert, light, contacts }) {

    return (
      <div className={`tool${contacts ? ' tool_contacts' : ''}`}>
        <img className={`tool__img${invert ? ' tool__img_invert' : ''}${light ? ' tool__img_light' : ''}`} src={img} alt={name} />
        <p className="tool__name">{name}</p>
      </div>
    );
  }
  
  export default Tool;
  