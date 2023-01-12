import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button} from './src/components';
//  import { View } from './src/components'
//  import { Text } from './src/components'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="container mx-auto my-2 h-40 justify-center items-center lg basis-1 bg-auto bg-black">
          <Text className="text-lg text-white ">
            White Text Inside Black Container
          </Text>
        </View>

        <View className="container mx-auto my-2 items-center ">
          <Text>SOLID Button</Text>
          <Button className="bg-blue-500" text="Solid Button" type="solid" />
        </View>
        <View className="container mx-auto my-2 items-center ">
          <Text>Link Button</Text>
          <Button className="text-blue-500 btnClass" text=" Button" type="link" />
        </View>
        <View className="container mx-auto my-2 items-center ">
          <Text>Outline Button</Text>
          <Button text=" Button" type="outline" />
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
