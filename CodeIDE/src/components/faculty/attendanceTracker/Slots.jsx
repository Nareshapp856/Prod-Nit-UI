function Slots({ availableSlots, selectedSlot, onSlotSelection }) {
  return availableSlots?.map((slot) => (
    <button
      key={slot.id}
      onClick={() => onSlotSelection(slot.id)}
      className={`py-2 flex justify-center rounded-lg shadow-md min-w-[110px] transition-colors duration-200 ease-in-out ${
        slot.id === selectedSlot
          ? "bg-blue-600 text-white"
          : "bg-blue-200 text-blue-800"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm text-center">
          {slot.startTime} - {slot.endTime}
        </span>
      </div>
    </button>
  ));
}

export default Slots;
