import random
import json
import datetime

date = datetime.datetime.now().date()

highest_number = int(input("What's the highest pokémon number you want to include? (Default: 898): ") or "898")
number_of_shuffles = int(input("How many times should the list be generated? (Default: 1): ") or "1")

number_list = []
for i in range(0, number_of_shuffles):
    temp_list = []
    for i in range(0, highest_number):
        temp_list.append(i + 1)
    random.shuffle(temp_list)
    number_list += temp_list
list_object = {
    "initial_date": {
        "day": date.day,
        "month": date.month,
        "year": date.year
    },
    "list": number_list
}

with open('pokemonList.json', 'w') as file:
    json.dump(list_object, file)
