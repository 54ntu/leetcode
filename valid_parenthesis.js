// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


function valid_parenthesis(s){
    let myarr=[]
    let closeToOpen={')':'(','}':'{',']':'['}
    for(let i=0; i<s.length;i++){
        if(s[i] in closeToOpen){
            if(myarr.length>0){
                let top_item= myarr.pop();

                if(closeToOpen[s[i]] !==top_item) return false
            }
            else{
                return false
            }
        }else{
            myarr.push(s[i]);
        }
       

    }
    return (myarr.length===0 ? true:false)
}


console.log(valid_parenthesis('([])'))