import { getUserLocale } from "@/services/locale";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "./config";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return { locale, messages };
  } catch (error) {
    console.log(
      `Error loading translation file for locale "${locale}":`,
      error
    );
    console.log(
      `Translation file for locale "${locale}" not found. Falling back to default locale "${defaultLocale}".`
    );
    const fallbackMessages = (
      await import(`../../messages/${defaultLocale}.json`)
    ).default;
    return { locale: defaultLocale, messages: fallbackMessages };
  }
});
