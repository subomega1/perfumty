'use client';

export default function ScentSelector({
  scents,
  selectedTopNote,
  selectedMiddleNote,
  selectedBaseNote,
  onTopNoteSelect,
  onMiddleNoteSelect,
  onBaseNoteSelect,
}) {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">TOP NOTES</h3>
        <div className="flex flex-wrap gap-2">
          {scents.top.map((scent) => (
            <button
              key={scent.name}
              onClick={() => onTopNoteSelect(scent)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedTopNote?.name === scent.name
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-300 dark:border-gray-600 hover:border-purple-600'
              }`}
            >
              {scent.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">MIDDLE NOTES</h3>
        <div className="flex flex-wrap gap-2">
          {scents.middle.map((scent) => (
            <button
              key={scent.name}
              onClick={() => onMiddleNoteSelect(scent)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedMiddleNote?.name === scent.name
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-300 dark:border-gray-600 hover:border-purple-600'
              }`}
            >
              {scent.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">BASE NOTES</h3>
        <div className="flex flex-wrap gap-2">
          {scents.base.map((scent) => (
            <button
              key={scent.name}
              onClick={() => onBaseNoteSelect(scent)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedBaseNote?.name === scent.name
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-300 dark:border-gray-600 hover:border-purple-600'
              }`}
            >
              {scent.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}