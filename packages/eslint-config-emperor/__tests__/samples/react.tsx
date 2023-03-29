import { createRoot } from 'react-dom/client';

function App({ name }: { name: string }) {
  return <div>Hello, {name}</div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App name="John" />);
