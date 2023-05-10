
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Calendar } from 'react-big-calendar'
import { CalendarEventBox, CalendarModal, FabAddNew, FabDelete, NavBar } from "../"
import { getMessagesES, localizer } from "../../helpers"
import { useState } from "react"
import { useCalendarStore, useUiStore } from '../../hooks'

export const CalendarPage = () => {

    const { openDateModal, } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = (event) => {
        openDateModal();
    }

    const onSelect = (event) => {
        setActiveEvent(event);
    }

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
        setLastView(event);
    }

    return (
        <>
            <NavBar />

            <Calendar
                culture='es'
                messages={getMessagesES()}
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEventBox
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />

            <CalendarModal />

            <FabAddNew />

            <FabDelete />
        </>
    )
}
