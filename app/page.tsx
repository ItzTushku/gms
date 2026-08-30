export default function Home() {
  // The self-contained concept remains isolated in its existing sandboxed preview.
  return (
    <main>
      <iframe
        title="Golomt Custody trading concept"
        src="/index.html"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
      />
    </main>
  );
}
