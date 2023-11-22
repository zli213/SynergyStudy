"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "../../../../../components/application/widgets/Modal";
import SettingAccount from "../../../../../components/pages/Settings/Account";
import SettingTheme from "../../../../../components/pages/Settings/Theme";
import { useRouter } from "next/navigation";

export default function SettingModal({ params }) {
  const router = useRouter;
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    switch (params.settingItem) {
      case "account":
        setActivePage(<SettingAccount />);
        break;
      case "theme":
        setActivePage(<SettingTheme />);
        break;
    }
  }, [params]);

  const pushNav = () => {
    router.push("/application/today");
  };
  return (
    <Modal>
      <div>this is setting modal</div>
      <Link href="/application/setting/account">account</Link>
      <Link href="/application/setting/theme">theme</Link>
      <div>{activePage}</div>
    </Modal>
  );
}
