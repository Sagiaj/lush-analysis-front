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
                <v-btn color="primary" @click.native="calculateByOptimization()">תכין לי ארוחה!</v-btn>
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
        updateOtherConstraints(constraints, curIdx, relativeAction) {
            // the current constraint's raised values should be distributed among the other values
            let data = constraints[curIdx].val;
            // let curFoodType = constraints[curIdx].foodType;
            // let incrementalStep = constraints[curIdx].increments / 2;
            // let sumCaloriesFromAction = (data.proteins + data.carbs + data.fats) * constraints[curIdx].increments;
            let otherConstraints = constraints.filter((c, i) => i !== curIdx).forEach( (constraint, i) => {
                let relation = ( (data.proteins + data.carbs + data.fats) / ( (constraint.val.proteins + constraint.val.carbs + constraint.val.fats) / 2) );
                if (relativeAction == "add") {
                    if (constraint.grams - relation * constraints[curIdx].increments > constraint.lessThan) {
                        constraint.grams -= relation * constraints[curIdx].increments;
                    }
                } else if (relativeAction == "subtract") {
                    if (constraint.grams + relation * constraints[curIdx].increments < constraint.biggerThan) {
                        constraint.grams += relation * constraints[curIdx].increments;
                    }
                }
            });
        },
        optimizeByConstraints(constraints) {
            // for each constraint - check conditions
            // for each condition unmatched - optimize
            constraints.forEach((constraint, idx) => {
                let relativeAction;
                let caloriesFromDedicatedFoodType = constraint.val[constraint.foodType] * constraint.grams;
                if (caloriesFromDedicatedFoodType < constraint.biggerThan) {
                    relativeAction = "subtract";
                    constraint.grams += constraint.increments;
                } else if (caloriesFromDedicatedFoodType > constraint.lessThan) {
                    relativeAction = "add";
                    constraint.grams -= constraint.increments;
                } else {
                    return true;
                }
                this.updateOtherConstraints(constraints, idx, relativeAction);
                constraint.increments /= 2;
            });
            return this.checkConstraints(constraints);
        },
        calculateByOptimization() {
            let chosenProtein = {...this.proteins[this.chosenIngredients.proteins]};
            let chosenCarb = {...this.carbs[this.chosenIngredients.carbs]};
            let chosenFat = {...this.fats[this.chosenIngredients.fats]};

            chosenProtein.carbs *= 4;
            chosenProtein.proteins *= 4;
            chosenProtein.fats *= 9;

            chosenCarb.carbs *= 4;
            chosenCarb.proteins *= 4;
            chosenCarb.fats *= 9;

            chosenFat.carbs *= 4;
            chosenFat.proteins *= 4;
            chosenFat.fats *= 9;

            let constraints = [
                {
                    increments: 0.1,
                    foodType: "proteins",
                    grams: 0.01,
                    val: {...chosenProtein},
                    biggerThan: 0.8 * this.allowedCalories.proteins,
                    lessThan: this.allowedCalories.proteins
                },
                {
                    increments: 0.1,
                    foodType: "carbs",
                    grams: 0.01,
                    val: {...chosenCarb},
                    biggerThan: 0.8 * this.allowedCalories.carbs,
                    lessThan: this.allowedCalories.carbs
                },
                {
                    increments: 0.1,
                    foodType: "fats",
                    grams: 0.01,
                    val: {...chosenFat},
                    biggerThan: 0.8 * this.allowedCalories.fats,
                    lessThan: this.allowedCalories.fats
                }
            ];

            let startDate = +new Date();
            let constraintsPassed = this.checkConstraints(constraints);

            while (!constraintsPassed) {
                constraintsPassed = this.optimizeByConstraints(constraints);
                if ((+new Date()) - startDate > 500) {
                    console.log('took too much time so quit! check recent constraints:', constraints);
                    this.calculatedIngredients.proteins = `${this.chosenIngredients.proteins} - ${Math.round(constraints[0].grams*100)} גרם`;
                    this.calculatedIngredients.carbs = `${this.chosenIngredients.carbs} - ${Math.round(constraints[1].grams*100)} גרם`;
                    this.calculatedIngredients.fats = `${this.chosenIngredients.fats} - ${Math.round(constraints[2].grams*100)} גרם`;
                    this.mealComplete = true;
                    return true;
                }
            }
        },
        checkConstraints(constraints) {
            return constraints.reduce((bool, constraint) => {
                if (!bool) {
                    return false;
                }
                let calories = constraint.val[constraint.foodType] * constraint.grams;
                let isBiggerThan = calories > constraint.biggerThan;
                let isLessThan = calories < constraint.lessThan;
                return bool && isBiggerThan && isLessThan;
            }, true);
        },
        calculateIngredients() {
            let remainingCals = {...this.allowedCalories};
            let chosenProtein = {...this.proteins[this.chosenIngredients.proteins]};
            let chosenCarb = {...this.carbs[this.chosenIngredients.carbs]};
            let chosenFat = {...this.fats[this.chosenIngredients.fats]};

            chosenProtein.carbs *= 4;
            chosenProtein.proteins *= 4;
            chosenProtein.fats *= 9;

            chosenCarb.carbs *= 4;
            chosenCarb.proteins *= 4;
            chosenCarb.fats *= 9;

            chosenFat.carbs *= 4;
            chosenFat.proteins *= 4;
            chosenFat.fats *= 9;

            let g1, g2, g3;
            let relational = 1;
            if (chosenProtein.proteins != chosenCarb.proteins) {
                relational = chosenProtein.proteins / chosenCarb.proteins;
            }
            let pMinusC = { // example: 2c + 3f = 10
                p: 0,
                c: chosenProtein.carbs - ( relational * chosenCarb.carbs ), // this * g2
                f: chosenProtein.fats - ( relational * chosenCarb.fats ), // this * g3
                total: this.allowedCalories.proteins - ( relational * this.allowedCalories.carbs )
            };
            if (chosenProtein.proteins != chosenFat.proteins) {
                relational = chosenProtein.proteins / chosenFat.proteins;
            }
            let pMinusF = { // example: 5c + f = 12
                p: 0,
                c: chosenProtein.carbs - ( relational * chosenFat.carbs ), // this * g2
                f: chosenProtein.fats - ( relational * chosenFat.fats ), // this * g3
                total: this.allowedCalories.proteins - ( relational * this.allowedCalories.fats )
            };

            // assuming pMinusF and pMinusC do not produce zeros except for both p's
            if (pMinusC.c != pMinusF.c) {
                relational = pMinusC.c / pMinusF.c;
            }

            let finalEquation = { // 8f = -1
                p: 0,
                c: 0,
                f: pMinusC.f - ( relational * pMinusF.f ), // this * g3
                total: pMinusC.total - ( relational * pMinusF.total )
            };

            g3 = finalEquation.total / finalEquation.f;
            g2 = ( pMinusF.total - (pMinusF.f * g3) ) / pMinusF.c;
            g1 = ( this.allowedCalories.proteins - (chosenCarb.proteins * g2) - (chosenFat.proteins * g3) ) / chosenProtein.proteins; // from g1*p1 + g2*p2 + g3*p3 = this.allowedCalories.proteins
            
            if (g1 < -1 || g2 < -1 || g3 < 0) {
                return this.calculateIngredientsSecondary()
            }

            this.calculatedIngredients.proteins = `${this.chosenIngredients.proteins} - ${Math.round(g1*100)} גרם`;
            this.calculatedIngredients.carbs = `${this.chosenIngredients.carbs} - ${Math.round(g2*100)} גרם`;
            this.calculatedIngredients.fats = `${this.chosenIngredients.fats} - ${Math.round(g3*100)} גרם`;

            this.mealComplete = true;
        },
        calculateIngredientsSecondary() {
            console.log('secondary method')
            let remainingCals = {...this.allowedCalories};
            let chosenProtein = {...this.proteins[this.chosenIngredients.proteins]};
            let chosenCarb = {...this.carbs[this.chosenIngredients.carbs]};
            let chosenFat = {...this.fats[this.chosenIngredients.fats]};

            remainingCals.carbs *= 0.9;
            remainingCals.proteins *= 0.9;

            // calculate protein food grams based on allowed protein calories
            let chosenProteinWeight = this.calculateFoodGramsByTargetCalories(chosenProtein.proteins, remainingCals.proteins);
            this.calculatedIngredients.proteins = `${this.chosenIngredients.proteins} - ${Math.round(chosenProteinWeight)} גרם`;

            // subtract the incidental carb and fat calories from remainingCals
            this.updateCaloricRemaindersByFoodConsumption(remainingCals, chosenProtein, chosenProteinWeight);

            // calculate the fat food grams based on remaining fat calories
            let chosenFatWeight = 4;
            if (remainingCals.fats > 36) {
                chosenFatWeight = this.calculateFoodGramsByTargetCalories(chosenFat.fats, remainingCals.fats, "fats");
            }
            this.calculatedIngredients.fats = `${this.chosenIngredients.fats} - ${Math.round(chosenFatWeight)} גרם`

            this.updateCaloricRemaindersByFoodConsumption(remainingCals, chosenFat, chosenFatWeight);

            let chosenCarbWeight = 5;
            if (remainingCals.carbs > 20) {
                // calculate carb food grams based on remaining carb calories
                chosenCarbWeight = this.calculateFoodGramsByTargetCalories(chosenCarb.carbs, remainingCals.carbs);
            }
            this.calculatedIngredients.carbs = `${this.chosenIngredients.carbs} - ${Math.round(chosenCarbWeight)} גרם`;

            // subtract the incidental fat calories from remainingCals
            this.updateCaloricRemaindersByFoodConsumption(remainingCals, chosenCarb, chosenCarbWeight);
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
                },
                "לחם כוסמין 100%": {
                    carbs: 34.3,
                    proteins: 14.9,
                    fats: 4.1
                },
                "לחם מיוחד - קונדיטוריה ברון": {
                    carbs: 39.5,
                    proteins: 9.9,
                    fats: 1.68
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
                carbs: (43)*4,
                proteins: (33)*4,
                fats: (11)*9
            },
            foodTypeFactors: {
                carbs: 4,
                proteins: 4,
                fats: 9
            },
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
