"use client";

import { useState, useEffect } from "react";
import Inbox from "../../../components/pages/AppPages/Inbox";
import Today from "../../../components/pages/AppPages/Today";

export default function AppPage({ params }) {
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    switch (params.menu) {
      case "inbox":
        setActivePage(<Inbox />);
        break;
      case "today":
        setActivePage(<Today />);
        break;
    }
  }, [params]);

  return <div>{activePage}</div>;
}