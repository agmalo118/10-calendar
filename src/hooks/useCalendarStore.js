import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        // TODO: llegar al backend

        // Todo bien
        if (calendarEvent._id) {
            // Actualizando  
            dispatch(onUpdateEvent({ ...calendarEvent }));
        }
        else {
            // Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    }

    const startDeleteEvent = () => {
        // TODO: llegar al backend

        dispatch(onDeleteEvent());
    }

    return {
        //* Props
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //* Methods
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent
    }
}