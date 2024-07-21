import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ item }){
    function renderMealItem(itemData){
        const item= itemData.item;

        const mealItemProps = {
            id: item.id,
            title:  item.title,
            imageUrl:item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity,
        };

        return (
            <MealItem {...mealItemProps} />
        );
    }

    return(
        <View style={styles.container} >
            <FlatList 
                data={item} 
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        backgroundColor:'#3f2f25',
    },
});