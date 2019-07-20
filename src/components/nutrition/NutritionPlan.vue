<template>
    <v-container grid-list-xl style="direction: rtl;">
        <v-btn flat icon color="primary" @click.native="resetFoods()">
            <v-icon>refresh</v-icon>
        </v-btn>
        <v-layout row wrap text-xs-center justify-center align-center>
            <v-flex xs3 v-for="(foodType, idx) in ingredients" :key="idx">
                <v-autocomplete
                    :label="`בחרי ${foodType.hebrewName}`"
                    :items="foodType.values"
                    v-model="chosenIngredients[foodType.name]"
                ></v-autocomplete>
            </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-center v-if="allIngredientsChosen">
            <v-flex xs12>
                <v-btn color="primary" @click.native="calculateIngredients()">תכין לי ארוחה!</v-btn>
            </v-flex>
        </v-layout>
        <v-container grid-list-xl>
            <v-layout row wrap text-xs-center justify-center v-if="mealComplete">
                <v-flex xs12>
                    <v-alert outline color="primary" icon="" :value="true">
                        הארוחה:
                        <v-spacer></v-spacer>
                        חלבון - {{ calculatedIngredients.proteins }}
                        <v-spacer></v-spacer>
                        פחמימות - {{ calculatedIngredients.carbs }}
                        <v-spacer></v-spacer>
                        שומנים בריאים - {{ calculatedIngredients.fats }}
                    </v-alert>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'NutritionPlan',
    components: {},
    computed: {
        allIngredientsChosen() {
            return this.chosenIngredients.carbs !== null 
            && this.chosenIngredients.proteins !== null 
            && this.chosenIngredients.fats !== null;
        }
    },
    methods: {
        resetFoods() {
            this.mealComplete = false;
            this.chosenIngredients = {
                carbs: null,
                proteins: null,
                fats: null
            };
        },
        calculateCaloriesPerGrams(foodType, grams) {
            return {
                total: ( (foodType.proteins * 4 + foodType.carbs * 4 + foodType.fats * 9) * grams) / 100,
                carbs: (foodType.carbs * 4 * grams) / 100,
                proteins: (foodType.proteins * 4 * grams) / 100,
                fats: (foodType.fats * 4 * grams) / 100
            }
        },
        calculateFoodGramsByTargetCalories(gramsOfFood, targetCalories, type = null) {
            let caloricFactor = type === "fats" ? 9 : 4;
            let caloriesPer100g = gramsOfFood * caloricFactor;
            return (targetCalories / caloriesPer100g) * 100;
        },
        updateCaloricRemaindersByFoodConsumption(calObj, foodConsumed, foodAmtInGrams) {
            return Object.keys(foodConsumed).reduce((obj, type) => {
                let curFoodTypeInGrams = foodConsumed[type] * (foodAmtInGrams / 100);
                let caloricFactor = type === "fats" ? 9 : 4;
                obj[type] = obj[type] - (curFoodTypeInGrams * caloricFactor);
                return obj;
            }, calObj);
        },
        calculateIngredients() {
            let remainingCals = {...this.allowedCalories};
            let chosenProtein = {...this.proteins[this.chosenIngredients.proteins]};
            let chosenCarb = {...this.carbs[this.chosenIngredients.carbs]};
            let chosenFat = {...this.fats[this.chosenIngredients.fats]};

            remainingCals.carbs *= 0.9;
            remainingCals.proteins *= 0.9;

            // calculate protein food grams based on allowed protein calories
            console.log('remaining before calculating proteins:', remainingCals, chosenProtein)
            let chosenProteinWeight = this.calculateFoodGramsByTargetCalories(chosenProtein.proteins, remainingCals.proteins);
            this.calculatedIngredients.proteins = `${this.chosenIngredients.proteins} - ${Math.round(chosenProteinWeight)} גרם`;

            // subtract the incidental carb and fat calories from remainingCals
            this.updateCaloricRemaindersByFoodConsumption(remainingCals, chosenProtein, chosenProteinWeight);

            // calculate the fat food grams based on remaining fat calories
            console.log('remaining before calculating fats:', remainingCals)
            let chosenFatWeight = 4;
            if (remainingCals.fats > 36) {
                chosenFatWeight = this.calculateFoodGramsByTargetCalories(chosenFat.fats, remainingCals.fats, "fats");
            }
            this.calculatedIngredients.fats = `${this.chosenIngredients.fats} - ${Math.round(chosenFatWeight)} גרם`

            this.updateCaloricRemaindersByFoodConsumption(remainingCals, chosenFat, chosenFatWeight);

            console.log('remaining before calculating carbs:', remainingCals)
            let chosenCarbWeight = 5;
            if (remainingCals.carbs > 20) {
                // calculate carb food grams based on remaining carb calories
                chosenCarbWeight = this.calculateFoodGramsByTargetCalories(chosenCarb.carbs, remainingCals.carbs);
            }
            this.calculatedIngredients.carbs = `${this.chosenIngredients.carbs} - ${Math.round(chosenCarbWeight)} גרם`;

            // subtract the incidental fat calories from remainingCals
            this.updateCaloricRemaindersByFoodConsumption(remainingCals, chosenCarb, chosenCarbWeight);
            
            console.log("AFTER:", remainingCals);
            this.mealComplete = true;
        }
    },
    mounted() {
        for (let idx in this.ingredients) {
            let name = this.ingredients[idx].name;
            this.ingredients[idx].values = [...Object.keys(this[name])];
        }
    },
    data () {
        return {
            carbs: {
                "בטטה": {
                    carbs: 24.12,
                    proteins: 1.6,
                    fats: 0
                },
                "כוסמת": {
                    carbs: 24.94,
                    proteins: 3.38,
                    fats: 0.62
                },
                "לחם אנג'ל 100% מלא": {
                    carbs: 31.8,
                    proteins: 11.8,
                    fats: 6.5
                },
                "בורגול": {
                    carbs: 26,
                    proteins: 3.08,
                    fats: 0.5
                },
                "קינואה": {
                    carbs: 24.3,
                    proteins: 5.4,
                    fats: 1.92
                }
            },
            proteins: {
                "קוטג'": {
                    carbs: 2.7,
                    proteins: 10.2,
                    fats: 5
                },
                "טונה": {
                    carbs: 0,
                    proteins: 26,
                    fats: 10
                },
                "גבינה לבנה 5%": {
                    carbs: 4.3,
                    proteins: 9.5,
                    fats: 5
                },
                "גבינה צהובה 9% עמק": {
                    carbs: 0.2,
                    proteins: 30,
                    fats: 9
                },
                "שוק עוף": {
                    carbs: 0,
                    proteins: 26.26,
                    fats: 8.06
                },
                "חזה עוף": {
                    carbs: 0,
                    proteins: 29,
                    fats: 3.1
                }
            },
            fats: {
                "שקדים": {
                    carbs: 21.67,
                    proteins: 21.22,
                    fats: 49.42
                },
                "חמאת בוטנים 100% טבעית": {
                    carbs: 16,
                    proteins: 28,
                    fats: 53
                },
                "אגוזי מלך": {
                    carbs: 13.71,
                    proteins: 15.23,
                    fats: 65.21
                },
                "טחינה גולמית": {
                    carbs: 10.7,
                    proteins: 10.7,
                    fats: 60.1
                }
            },
            ingredients: [
                {
                    name: "carbs",
                    hebrewName: "פחמימה",
                    values: []
                },
                {
                    name: "proteins",
                    hebrewName: "חלבון",
                    values: []
                },
                {
                    name: "fats",
                    hebrewName: "שומן בריא",
                    values: []
                }
            ],
            chosenIngredients: {
                carbs: null,
                proteins: null,
                fats: null
            },
            allowedCalories: {
                carbs: 204,
                proteins: 122,
                fats: 81
            },
            // totalCaloriesAllowed: 1750,
            mealComplete: false,
            calculatedIngredients: {
                proteins: "",
                carbs: "",
                fats: ""
            }
        }
    }
};
</script>

<style>
    .v-input.v-select label {
        right: 0px !important;
        left: auto !important;
    }
</style>
