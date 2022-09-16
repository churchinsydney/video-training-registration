import clsx from 'clsx';
import { useEffect, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import LocaleButton from '../buttons/LocaleButton';
import ThemeButton from '../buttons/ThemeButton';
import Logo from '../images/Logo';
import SignInStatus from '../SignInStatus';

type HeaderProps = {
  large?: boolean;
};

export default function Header({ large = false }: HeaderProps) {
  const [onTop, setOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div />;
  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-shadow',
        !onTop && 'shadow-sm'
      )}
    >
      <div className='bg-white transition-colors dark:bg-dark dark:text-white'>
        <nav
          className={clsx(
            'layout flex items-center justify-between py-4',
            large && 'lg:max-w-[68rem]'
          )}
        >
          <UnstyledLink href='/'>
            <Logo />
          </UnstyledLink>

          <div className='flex justify-between space-x-3'>
            <ThemeButton />
            <LocaleButton />
            <SignInStatus />
          </div>
        </nav>
      </div>
    </header>
  );
}

export const headerLinks = [{ href: '/events', mobile: true }];
