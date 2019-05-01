import random
import json
import datetime

date = datetime.datetime.now().date()

number_list = []
for i in range(0, 807):
    number_list.append(i)
random.shuffle(number_list)
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
