interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </header>
  );
}
