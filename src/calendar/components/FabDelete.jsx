

import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeleteEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeleteEvent();
    }

    return (
        <button
            className={`btn btn-danger fab-danger ${hasEventSelected ? '' : 'd-none'}`}
            onClick={handleDelete}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
