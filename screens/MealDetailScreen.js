import { Text, View,Image,StyleSheet,ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favoriat-context";

function MealDetailScreen ({ route,navigation }){

    const favorateMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;
    
    const selectedMeal = MEALS.find((meal) => meal.id === mealId );

    const mealIsFavorate = favorateMealsCtx.ids.includes(mealId);

    function changeFavorateStatusHandler(){
        if(mealIsFavorate){
            favorateMealsCtx.removeFavorite(mealId);
        } else{
            favorateMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={changeFavorateStatusHandler} icon={ mealIsFavorate ? 'star' : 'star-outline'} color='white' />
            },
        });
    },[navigation, changeFavorateStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer} >
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title} >{selectedMeal.title}</Text>
            <MealDetail 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}   
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles= StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
    image:{
        width:'100%',
        height:350,
    },
    title:{
        fontWeight:'bold',
        fontSize: 24,
        margin:8,
        textAlign:'center',
        color:'white',
    },
    detailText:{
        color:'white',
    },
    listContainer:{
        width:'80%',
    },
    listOuterContainer:{
        alignItems:'center',
    }
});