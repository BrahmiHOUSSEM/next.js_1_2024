import { useEffect, useState } from "react";

export function useProfile() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("api/profile")
      .then((response) => response.json())
      .then((data) => {
        setIsAdmin(data.admin);
        setLoading(false);
      });
  }, []);

  return { isAdmin, loading };
}
