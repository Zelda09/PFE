import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/fr';
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";

const Calendar = (isDashboard = false) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handelDateClick = (selected) => {
    const title = prompt("Créer un événement");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handelEventClick = (selected) => {
    if (
      window.confirm(
        `Voulez-vous vraiment supprimer l’événement ? '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.fixAccent[300]}
          p="15px"
          borderRadius="4px">
          <Typography variant="h5">Evenment</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}>
                <ListItemText
                  primary={event.title}
                  secondaryTypographyProps={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* calender */}
        
        <Box sx={{
        "& .fc": {
          background: `${colors.fixAccent[300]} !important`,
        },}}
        flex="1 1 100%" ml="15px">
            <FullCalendar className="bodydark"
            height="75vh"
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
            ]}
            locale={esLocale}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handelDateClick}
            eventClick={handelEventClick}
            eventsSet={(events)=> setCurrentEvents(events)}
            initialEvents={[
                {id:"1234", title:"all day event", date:"2024-04-26"},
                {id:"123", title:"timed", date:"2024-05-20"},
                {id:"12", title:" event", date:"2024-03-16"},
            ]}
            />
        </Box>
      </Box>
    </Box>
  );
};
export default Calendar;
