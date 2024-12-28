import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const TabsLayout = () => {
    return (

        <SafeAreaView>
            <Tabs>
                <Tabs.Screen name='index' options={
                    { headerShown: false, }
                } />
                <Tabs.Screen name="orders" options={{ headerTitleAlign: 'center' }} />

            </Tabs>
        </SafeAreaView>

    )
};

export default TabsLayout;