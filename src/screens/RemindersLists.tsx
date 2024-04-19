import {  Text, View,SafeAreaView ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'

import { useQuery } from '@tanstack/react-query';
import { fetchRemindersList } from '../api/Reminders';
import ReminderItems from '../components/ReminderItems';


const RemindersLists = ({navigation}) => {

  const {data,isLoading}  = useQuery({
    queryFn:()=>fetchRemindersList(),
    queryKey:["reminders"]
  });
  return (
    <SafeAreaView className="bg-primary h-full">
              <ScrollView>
              <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-2xl text-white font-psemibold">
                  Reminder Lists
                </Text>
                </View>
                </View>

                <View>
        {
          data?.map((reminder)=>{
            return <ReminderItems  reminder={reminder}
              key={`reminder-id-${reminder?.id}`}
            />
          })
        }
    </View>
    <TouchableOpacity
                 onPress={()=>navigation.navigate('AddReminder')}
                 className="bg-secondary rounded-xl min-h-[55px] flex flex-row justify-center items-center w-full mt-2"
                >
       <Text className={`text-primary font-psemibold text-lg `}>Add New Reminder</Text>
                </TouchableOpacity>
                </View>
              </ScrollView>
      </SafeAreaView>
  )
}

export default RemindersLists

