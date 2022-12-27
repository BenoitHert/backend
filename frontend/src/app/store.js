import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import todoReducer from '../features/todos/todoSlice'
import agendaReducer from '../features/agenda/agendaSlice'
import dashboardReducer from '../features/dashboard/dashboardSlice'
import kanbanReducer from '../features/kanban/kanbanSlice'
import menuReducer from '../features/menus/menuSlice'
import shoplistReducer from '../features/shopList/shopSlice'
import calendarReducer from '../features/calendar/calendarSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    dashboard: dashboardReducer,
    shoplist: shoplistReducer,
    agenda: agendaReducer,
    calendar : calendarReducer,

  },
});
