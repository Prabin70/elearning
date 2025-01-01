"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  let [email, setEmail] = useState("");

  let handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = {
      email: email,
    };

    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:9000/user/forgot-password",
        data: data,
      });
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          id="email"
          placeholder="enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default page;
