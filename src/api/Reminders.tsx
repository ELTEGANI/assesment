import {REMINDERS} from '../api/entities';

const remindersList = [
    {
      "id": 1,
      "title": "Doctor's Appointment",
      "description": "Annual check-up at Dr. Smith's Office",
      "time": "2023-04-15T14:00:00"
    },
    {
      "id": 2,
      "title": "Meeting with Bank Manager",
      "description": "Meeting to discuss new bank account features",
      "time": "2023-04-16T11:00:00"
    },
    {
      "id": 3,
      "title": "Coffee with Samantha",
      "description": "Catching up over coffee at Central Perk",
      "time": "2023-04-17T09:30:00"
    },
    {
      "id": 4,
      "title": "Final Project Submission",
      "description": "Submit final project to college portal",
      "time": "2023-04-18T23:59:00"
    },
    {
      "id": 5,
      "title": "Sophia's Birthday Party",
      "description": "Surprise party for Sophia at her place",
      "time": "2023-04-19T19:00:00"
    }
  ]



  
export const fetchRemindersList = async (): Promise<REMINDERS[]>  =>{
  await new Promise((resolve)=>setTimeout(resolve,1000));
   return [...remindersList]
}  


export const addReminder = async (reminder:REMINDERS): Promise<REMINDERS>  =>{
  await new Promise((resolve)=>setTimeout(resolve,1000));
   const newReminder ={
    id: remindersList.length + 1,
    title: reminder.title,
    description:reminder.description,
    time:reminder.time 
   }
   remindersList.push(newReminder)
   return newReminder;
} 

