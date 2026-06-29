import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navigation');

  return (
    <nav className="w-full px-6 py-4 border-b border-bg-subtle bg-bg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl font-heading">
          Đà Nẵng Vibe
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="text-text-muted hover:text-text transition-colors">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="text-text-muted hover:text-text transition-colors">
                {t('destinations')}
              </Link>
            </li>
            <li>
              <Link href="/food" className="text-text-muted hover:text-text transition-colors">
                {t('food')}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
