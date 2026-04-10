type SectionHeadingProps = {
  title: string;
  body?: string;
};

export function SectionHeading({ title, body }: SectionHeadingProps) {
  return (
    <div>
      <h2>{title}</h2>
      {body ? <p className="subtitle">{body}</p> : null}
    </div>
  );
}