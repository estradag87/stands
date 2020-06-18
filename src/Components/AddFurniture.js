import React from "react";

class AddFurniture extends React.Component {
  idRef = React.createRef();
  imageRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  categoryRef = React.createRef();

  createFurniture = (event) => {
    event.preventDefault();
    const furnitureNew = {
      id: this.idRef.current.value,
      image: this.imageRef.current.value,
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      category: this.categoryRef.current.value,
    };
    this.props.addNewFurniture(furnitureNew);
    event.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <form className="AddFurnitureForm" onSubmit={this.createFurniture}>
          <input name="id" type="text" ref={this.idRef} placeholder="Id" />
          <input
            name="image"
            type="text"
            ref={this.imageRef}
            placeholder="Image"
          />
          <input
            name="name"
            type="text"
            ref={this.nameRef}
            placeholder="Name"
          />
          <input
            name="price"
            type="number"
            ref={this.priceRef}
            placeholder="Price"
          />
          <select name="category" ref={this.categoryRef}>
            <option value="Mesas">Mesas</option>
            <option value="Sillas">Sillas</option>
            <option value="Exhibidores">Exhibidores</option>
            <option value="Decoración">Decoración</option>
          </select>
          <button type="submit">+ agregar nuevo producto</button>
        </form>
      </div>
    );
  }
}

export default AddFurniture;
