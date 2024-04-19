import { Text,View,SafeAreaView ,Alert,Pressable,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addReminder } from '../api/Reminders';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FormField from '../components/FormField';
import Notifications from '../Notifications';


const AddReminder = () => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:Date) => {
    setDate(date);
    hideDatePicker();
  };

  const submitReminder = async()=>{
    if(!form.title || !form.description){
      Alert.alert('Error','Please fill in all the fields')
      return
    }
      try {
          await addReminderMutation({
              id:0,
              title:form.title,
              description:form.description,
              time:date.toISOString()
          });
          Alert.alert('Success','Reminder Added Successfuly and Notification has been set')
          Notifications.scheduleNotification({reminder:form.title, date: date});

      } catch (error) { 
          console.log(error);
          Alert.alert('Error',"Error Please try again")
      }
  }

  const queryClient = useQueryClient();
    const {mutateAsync:addReminderMutation} = useMutation({
        mutationFn: addReminder,
        onSuccess:()=>{
          queryClient.invalidateQueries()
        }
      }); 
      const [form, setform] = useState({
        id:'',
        title:'',
        description:'',
        time:''
      })
      return (
        <SafeAreaView className="bg-primary h-full">
      <ScrollView>
     


        <View className="w-full justify-center min-h-[50vh] px-4 my-6">
      

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
           <FormField
             title='Reminder Title'
             value={form.title}
             handleChangeText={(e: any)=>setform({...form,
              title:e})}
            otherStyles="mt-10"
            keyboardType="email-address"
           />
           <FormField
             title='Reminder Description'
             value={form.description}
             handleChangeText={(e: any)=>setform({...form,
              description:e})}
              otherStyles="mt-7"
           />

         <Pressable onPress={showDatePicker}>
        <Text className="text-base text-gray-100 font-pmedium mt-10">{"Set Date: "+date.toISOString()}</Text>
      </Pressable>    
     

      <TouchableOpacity
                 onPress={
                  submitReminder
                }
                 className="bg-gray-100 rounded-xl min-h-[55px] flex flex-row justify-center items-center w-full mt-7"
                >
       <Text className={`text-primary font-psemibold text-lg `}>Add Reminder</Text>
                </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
      )
}

export default AddReminder

