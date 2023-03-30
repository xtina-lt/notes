list = [
    {"email": "test@gmail.com", "password" : "abdef"},
    {"email": "test1@gmail.com", "password" : "abdefgh"},
]

for e in list:
    if e['email'] == "test@gmail.com":
        print("gotchy")
        e['password'] = "gotch"

for e in list:
    print(e['email'])
    print(e['password'])