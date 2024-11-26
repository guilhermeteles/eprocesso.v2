export default function Documents() {
  const items = [
    { id: 1, title: 'Document 1', icons: ['🖊️', '🗑️'] },
    { id: 2, title: 'Document 2', icons: ['🖊️', '🗑️'] },
    { id: 3, title: 'Document 3', icons: ['🖊️', '🗑️'] },
  ];

  return (
    <div className="documents">
      {items.map((item) => (
        <div key={item.id} className="document-item flex items-center justify-between p-2 border-b">
          <span className="arrow">{'>'}</span>
          <input type="checkbox" className="checkbox mx-2" />
          <span className="title flex-1">{item.title}</span>
          <div className="icons flex space-x-2">
            {item.icons.map((icon, index) => (
              
              <span key={index} className="icon">
                {icon}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
