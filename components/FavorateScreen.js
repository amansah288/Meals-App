import { useContext } from "react";
import MealsList from "./MealList/MealsList";
import { FavoritesContext } from "../store/context/favoriat-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View,Text } from "react-native";

function FavorateScreen(){

    const favorateMealsCtx = useContext(FavoritesContext);

    const favorateMeals = MEALS.filter(meal => favorateMealsCtx.ids.includes(meal.id) );

    if(favorateMeals.length === 0){
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.text} >you have no favorite meals yet.</Text>
            </View>
        )
    }

    return <MealsList item={favorateMeals} />
}

export default FavorateScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3f2f25',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
});