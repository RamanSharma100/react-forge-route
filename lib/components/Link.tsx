import { useRouter } from '../hooks';

export interface ILink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  state?: any;
  activeClassName?: string;
  navLink?: boolean;
}

export const Link: React.FC<ILink> = ({
  to,
  href,
  state = {},
  navLink,
  activeClassName,
  ...props
}) => {
  const { navigate, getActiveRoute } = useRouter();

  to = to === '' ? '/' : to;
  href = href === '' ? '/' : href;

  if (to && href) {
    throw new Error('Either use "to" or "href" prop in Link component ');
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to || href || '', { state });
  };

  const isActive = navLink ? getActiveRoute()?.path === to : false;

  return (
    <a
      {...props}
      href={to || href}
      onClick={handleClick}
      className={
        props.className +
        (navLink ? (isActive ? ` ${activeClassName}` : '') : '')
      }
    />
  );
};
