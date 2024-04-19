import { Text, View } from 'react-native'
import React from 'react'

const ReminderItems =({reminder}) => {
    return (
      <View className="flex flex-col items-center px-4 mb-9">
        <View className="flex flex-row gap-2 items-start">
          <View className="flex justify-center items-center flex-row flex-1">
            <View className="flex justify-center flex-1 ml-1 gap-y-1">
               <Text
                className="font-psemibold text-sm text-white"
                numberOfLines={1}>
                  {reminder.title}
              </Text>
              <Text
                className="font-psemibold text-sm text-white"
                numberOfLines={1}>
                  {reminder.description}
              </Text>
              <Text
                className="text-xs text-white font-pregular"
                numberOfLines={1}
              >
                  {reminder.time}
              </Text>
            </View>
          </View>
        </View>
  
      </View>
    )
  }

export default ReminderItems

