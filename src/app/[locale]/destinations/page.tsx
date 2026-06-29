import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function DestinationsPage({
  params,
}: PageProps<"/[locale]/destinations">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("DestinationsPage");

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-2xl font-bold font-heading leading-tight">{t("title")}</h1>
      <p className="mt-4 text-lg text-text-muted">{t("subtitle")}</p>
    </main>
  );
}
