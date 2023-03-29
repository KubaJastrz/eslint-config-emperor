const link = document.createElement('a');
link.href = 'https://example.com';
link.target = '_blank';
link.rel = 'noopener noreferrer';

const root = document.getElementById('root')!;
root.append(link);
