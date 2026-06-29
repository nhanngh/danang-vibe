'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LABELS: Record<string, string> = { vi: 'VI', en: 'EN' };

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-2">
          {i > 0 && <span className="text-text-muted select-none">|</span>}
          <Link
            href={pathname}
            locale={loc}
            className={
              loc === locale
                ? 'text-primary font-semibold'
                : 'text-text-muted hover:text-text transition-colors'
            }
          >
            {LABELS[loc]}
          </Link>
        </span>
      ))}
    </div>
  );
}
