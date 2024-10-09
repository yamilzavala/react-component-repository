import { useState } from "react";
const url = "https://www.greatfrontend.com/api/questions/like-button";

export const useFetchData = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: like ? "like" : "unlike" }),
      });
      console.log(res);
      if (res.status >= 200 && res.status < 300) {
        setLike(!like);
      } else {
        const errRes = await res.json();
        setError(errRes.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, like, fetchData };
};
