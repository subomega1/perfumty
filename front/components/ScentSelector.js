'use client';

const ICONS = {
  top: '🌿',
  middle: '🌸',
  base: '🌲',
};

export default function ScentSelector({
  scents,
  selectedTopNote,
  selectedMiddleNote,
  selectedBaseNote,
  onTopNoteSelect,
  onMiddleNoteSelect,
  onBaseNoteSelect,
}) {
  const renderScentButtons = (notes, selectedNote, onSelect, type) => (
    <div className="flex flex-wrap gap-3">
      {notes.map((scent) => {
        const isSelected = selectedNote?.name === scent.name;
        return (
          <button
            key={scent.name}
            onClick={() => onSelect(scent)}
            className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
              ${
                isSelected
                  ? 'bg-gradient-to-r from-[#E6ADEC] to-[#C287E8] text-white border-transparent shadow-md'
                  : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-purple-500'
              }`}
          >
            <span className="text-lg">{ICONS[type]}</span>
            <span>{scent.name}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col space-y-3 font-[Quicksand]">
            <h2 className="text-2xl font-bold text-purple-700  tracking-wide">Select your preferred Scents!</h2>

      <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-2 shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold tracking-wide text-purple-700 mb-4">
          TOP NOTES
        </h3>
        {renderScentButtons(scents.top, selectedTopNote, onTopNoteSelect, 'top')}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-2 shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold tracking-wide text-purple-700 mb-4">
          MIDDLE NOTES
        </h3>
        {renderScentButtons(scents.middle, selectedMiddleNote, onMiddleNoteSelect, 'middle')}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-2 shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold tracking-wide text-purple-700 mb-4">
          BASE NOTES
        </h3>
        {renderScentButtons(scents.base, selectedBaseNote, onBaseNoteSelect, 'base')}
      </div>
    </div>
  );
}