# 20. Valid Parentheses
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.


def valid_parenthesis(s):
    mylist=[]
    closeToOpen={')':'(',']':'[','}':'{'}
    for char in s:
        if char in closeToOpen:
            if mylist:
                top_item= mylist.pop()
            elif closeToOpen[char] != top_item:
                return False
            else:
                return False
        else:
            mylist.append(char)
    return True if not mylist else False

print(valid_parenthesis("(){}["))