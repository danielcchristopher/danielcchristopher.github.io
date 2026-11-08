export function EditorialTitle({ text }: { text: string }) {
  const split = text.trim().lastIndexOf(" ");
  return (
    <h1 className="portfolio-title">
      {split < 0 ? (
        <em>{text}</em>
      ) : (
        <>
          {text.slice(0, split + 1)}
          <em>{text.slice(split + 1)}</em>
        </>
      )}
    </h1>
  );
}
