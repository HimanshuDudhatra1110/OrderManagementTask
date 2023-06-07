import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.ORDERLIST);
  }, [navigate]);

  return null;
}
