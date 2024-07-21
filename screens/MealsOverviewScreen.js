import { View,FlatList,StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

function MealsOverviewScreen({ route, navigation }){

    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >=0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId ).title;

    navigation.setOptions({
        title: categoryTitle,
    });
    },[catId, navigation]);

    return <MealsList item={displayMeals} />
};

export default MealsOverviewScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});