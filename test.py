
# dojo = {
#    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }
# def printInfo(dict):
#     for i in dict:
#         print(f"{len(i)} {i.upper()}")
#         for j in dict[i]:
#             print(j)
# printInfo(dojo)


# students = [
#          {'first_name':  'Michael', 'last_name' : 'Jordan'},
#          {'first_name' : 'John', 'last_name' : 'Rosales'},
#          {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#          {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]

# def iterateDictionary(arr):
#     for i in arr:
#         result = ""
#         for k,v in i.items():
#             result += f"{k} - {v}, "
#         print(result)
# iterateDictionary(students) 
# # should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# # first_name - Michael, last_name - Jordan
# # first_name - John, last_name - Rosales
# # first_name - Mark, last_name - Guillen
# # first_name - KB, last_name - Tonel
# # # output:
# # 7 LOCATIONS
# # San Jose
# # Seattle
# # Dallas
# # Chicago
# # Tulsa
# # DC
# # Burbank
    
# # 8 INSTRUCTORS
# # Michael
# # Amy
# # Eduardo
# # Josh
# # Graham
# # Patrick
# # Minh
# # Devon


var = "(17,)"
print(var)
res = var.split(',')  
print(res[0][1:])
