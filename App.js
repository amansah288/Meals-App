import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreens from './screens/CategoriesScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavorateScreen from './components/FavorateScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favoriat-context';


const Stack = createNativeStackNavigator();
const BotomTab = createBottomTabNavigator();

export default function App() {

  function FirstScreenHandler(){
    return(
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
        headerTintColor:'white',
        contentStyle:{backgroundColor:'#3f2f25'},
      }}>
        <Stack.Screen name='MealsCategories' component={CategoriesScreens} 
          options={{
          title:'All Categories',
          }} 
        />
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
        <Stack.Screen name='MealDetail' component={MealDetailScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>     
        <NavigationContainer>
          <BotomTab.Navigator
            screenOptions={{
              tabBarLabelStyle: { color: '#e4baa1' },
              tabBarActiveBackgroundColor: '#351401',
              tabBarInactiveBackgroundColor: '#351401',
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor:'white',
              headerTitle:'favorite',
            }}
            
          >
            <BotomTab.Screen name='Home' component={FirstScreenHandler}
              options={{
                headerShown:false,
                tabBarIcon: ({color,size}) => <Ionicons name='home' color={color} size={size} />,
              }}
            />
            <BotomTab.Screen name='favorite' component={FavorateScreen} 
              options={{
                tabBarIcon: ({color,size}) => <Ionicons name='star' color={color} size={size} />,
                
              }}
              
            />
          </BotomTab.Navigator>
        </NavigationContainer>
        </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
