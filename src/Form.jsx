import React, { useState } from "react";

const Form = () => {
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNoti: "",
  });
  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setform((prev) => {
      return {
        ...prev,

        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">First Name</label>
        <br />
        <input
          className="outline rounded-sm"
          type="text"
          name="firstname"
          onChange={changeHandler}
          value={form.firstname}
        />
        <br />
        <label onChange={changeHandler} htmlFor="lastname">
          last Name
        </label>
        <br />
        <input
          className="outline rounded-sm"
          onChange={changeHandler}
          type="text"
          name="lastname"
          value={form.lastname}
        />
        <br />
        <label htmlFor="email"> Email</label>
        <br />
        <input
          className="outline rounded-sm"
          type="email"
          name="email"
          onChange={changeHandler}
          value={form.email}
        />
        <br />
        <label htmlFor="">Country</label>
        <br />
        <select
          className="outline rounded-sm"
          id="dropdown"
          name="country"
          value={form.country}
          onChange={changeHandler}
        >
          <option value="India">India</option>
          <option value="US">US</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
        <br />
        <label htmlFor="address">Adrress dalo</label>
        <br />
        <input
          className="outline rounded-sm"
          type="text"
          name="address"
          value={form.address}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="city">City daal </label>
        <br />
        <input
          className="outline rounded-sm"
          type="text"
          name="city"
          value={form.city}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="state">State/Province</label>
        <br />
        <input
          className="outline rounded-sm"
          type="text"
          name="state"
          value={form.state}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="state">ZIP</label>
        <br />
        <input
          className="outline rounded-sm"
          type="text"
          onChange={changeHandler}
          value={form.zip}
          name="zip"
        />
        <fieldset>
          <legend>By email</legend>

          <div className="flex">
            <input
              className=" mb-2"
              type="checkbox"
              id="comments"
              name="comments"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p className="">Get notified when someone comments on post</p>
            </div>
          </div>
          <div className="flex">
            <input
              className=" mb-2"
              type="checkbox"
              id="candidates"
              name="candidates"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">candidates</label>
              <p className="">lorem candidraespost</p>
            </div>
          </div>
          <div className="flex">
            <input
              className=" mb-2"
              type="checkbox"
              id="offers"
              name="offers"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">offers</label>
              <p className="">Get notified when someone offers on post</p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Push Notifi</legend>
          <p>This is del by msg</p>
          <input
            type="radio"
            name="pushNoti"
            id="pushEverything"
            value="pushEverything"
            onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Push Everything</label>
          <input
            type="radio"
            name="pushNoti"
            id="pushEmail"
            value="same as2"
            onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Push 3</label>

          <label htmlFor="pushEverything">Push 2</label>
          <input
            type="radio"
            name="pushNoti"
            id="pushEmail"
            value="same as e3"
            onChange={changeHandler}
          />
        </fieldset>
        <input
          type="submit"
          className=" bg-sky-700 rounded-md px-4  text-yellow-50 "
        ></input>
      </form>
    </div>
  );
};

export default Form;
