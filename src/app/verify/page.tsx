"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  let searchParams = useSearchParams();
  let token = searchParams.get("token");
  let router = useRouter();

  const verifyEmail = async () => {
    try {
      let reuslt = await axios({
        url: `http://localhost:9000/user/verify-email`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push("/login");
    } catch (error) {}
  };
  useEffect(() => {
    verifyEmail();
  }, []);
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Verifying Your Email...</h1>
      </div>
    </div>
  );
};

export default page;
