import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

//get all unique select values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  // GET UNIQUE TYPES
  let types = getUnique(rooms, "type");
  //get all
  types = ["all", ...types];
  // mapping to return
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // GET GUEST NUMBERS
  let guests = getUnique(rooms, "capacity");
  // mapping to return
  guests = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/*slect type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            className="form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          />
          {types}
        </div>
        {/*end select type */}

        {/*slect guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
          />
          {guests}
        </div>
        {/*end select type */}

        {/*room price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            className="form-control"
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        {/*end room price */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size type */}

        {/* breakfast  */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          {/* end of breakfast */}

          {/* pets  */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of pets */}
      </form>
    </section>
  );
};

export default RoomFilter;
