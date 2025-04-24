"use client";

import { setUserLocale } from "@/services/locale";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { US, ES, CN } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";
import { Locale } from "../../i18n/config";

function SwitchLocale({ style }: { style?: React.CSSProperties }) {
  const locale = useLocale() as Locale;
  const [, startTransition] = useTransition();

  const handleChange = (event: SelectChangeEvent<Locale>) => {
    const nextLocale = event.target.value as Locale;
    console.log("locale", nextLocale);
    startTransition(() => {
      setUserLocale(nextLocale);
    });
  };

  return (
    <Select
      style={{
        borderRadius: "20px",
        width: "80px",
        marginRight: "20px",
        height: "40px",
        ...style,
      }}
      value={locale}
      onChange={handleChange}
    >
      <MenuItem value="en-US">
        <US title="en-US" />
      </MenuItem>
      <MenuItem value="es-US">
        <ES title="es-US" />
      </MenuItem>
      <MenuItem value="zh-CN">
        <CN title="zh-CN" />
      </MenuItem>
    </Select>
  );
}

export default SwitchLocale;
